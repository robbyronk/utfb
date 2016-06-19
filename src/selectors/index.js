import {createSelector} from "reselect";
import _ from "lodash";

// todo organize these

export const categories = (state) => _.values(state.categories)
export const incomes = (state) => _.values(state.incomes)
const expenses = (state) => _.values(state.expenses)

export function expensesForCategory(state, props) {
  return _.filter(expenses(state), {category: props.category.id})
}

export function amountForCategory(state, props) {
  return _.find(categories(state), {id: props.category.id}).amount
}

export const available = createSelector(
  [amountForCategory, expensesForCategory],
  function (categoryAmount, expenses) {
    return categoryAmount - _.sumBy(expenses, 'amount')
  }
)

export const totalIncome = createSelector(
  [incomes],
  (incomes) => (
    _.sumBy(incomes, 'amount')
  )
)

export const totalCategories = createSelector(
  [categories],
  (categories) => (
    _.sumBy(categories, 'amount')
  )
)

export const amountToCategorize = createSelector(
  [totalIncome, totalCategories],
  (totalIncome, totalCategories) => (
    _.round(totalIncome - totalCategories, 2)
  )
)
