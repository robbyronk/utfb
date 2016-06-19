import {createSelector} from "reselect";
import _ from "lodash";

// todo organize these

export const categories = (state) => _.values(state.categories)
export const incomes = (state) => _.values(state.incomes)
const expenses = (state) => _.values(state.expenses)

function sumByAmount(collection) {
  return _.sumBy(collection, 'amount')
}

function _expensesForCategory(state, category) {
  return _.filter(expenses(state), {category})
}

export function expensesForCategory(state, props) {
  return _expensesForCategory(state, props.category.id)
}

function _amountForCategory(state, id) {
  return _.find(categories(state), {id}).amount
}

export function amountForCategory(state, props) {
  return _amountForCategory(state, props.category.id)
}

const _available = function (categoryAmount, expenses) {
  return categoryAmount - sumByAmount(expenses)
}

export function rebalanceCategories(state) {
  return _.map(categories(state), (category) => Object.assign(
    {},
    category,
    {
      spent: sumByAmount(_expensesForCategory(state, category.id)),
      available: _available(_amountForCategory(state, category.id), _expensesForCategory(state, category.id))
    }
  ))
}

export const available = createSelector(
  [amountForCategory, expensesForCategory],
  _available
)

export const totalIncome = createSelector(
  [incomes],
  (incomes) => (
    sumByAmount(incomes)
  )
)

export const totalCategories = createSelector(
  [categories],
  (categories) => (
    sumByAmount(categories)
  )
)

export const amountToCategorize = createSelector(
  [totalIncome, totalCategories],
  (totalIncome, totalCategories) => (
    _.round(totalIncome - totalCategories, 2)
  )
)
