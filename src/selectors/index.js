import {createSelector} from "reselect";
import _ from "lodash";

// todo organize these

export const categoriesSelector = (state) => _.values(state.categories)
export const incomeSelector = (state) => _.values(state.incomes)
const expenses = (state) => _.values(state.expenses)

export function expensesForCategory(state, props) {
  return _.filter(expenses(state), {category: props.category.id})
}

export function amountForCategory(state, props) {
  return _.find(categoriesSelector(state), {id: props.category.id}).amount
}

export const available = createSelector(
  [amountForCategory, expensesForCategory],
  function (amount, expenses) {
    return amount - _.sumBy(expenses, 'amount')
  }
)

export const categoriesForSelect = createSelector(
  [categoriesSelector],
  (categories) => _.values(categories)
)

export const totalIncome = createSelector(
  [incomeSelector],
  (incomes) => (
    _.sumBy(incomes, 'amount')
  )
)

export const totalCategories = createSelector(
  [categoriesSelector],
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

// export const addCategoryName = createSelector(
//   [budgetsSelector, categoriesSelector],
//   (budgets, categories) => (
//     _.mapValues(
//       budgets, (budget) => _.set(budget, 'name', categories[budget.category].name)
//     )
//   )
// )

// for each category, make sure there is a budget
//   reduce over categories and return object of budgets
// const createMissingBudgets = createSelector(
//   [budgetsSelector, categoriesSelector],
//   (budgets, categories) => {
//     var newBudgets = Object.assign({}, budgets)
// }
// )

