import {createSelector} from "reselect";
import _ from "lodash";

const categoriesSelector = (state) => state.categories
const incomeSelector = (state) => state.income
const expensesSelector = (state) => state.expenses

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
    totalIncome - totalCategories
  )
)

export const addCategoryName = createSelector(
  [budgetsSelector, categoriesSelector],
  (budgets, categories) => (
    _.mapValues(
      budgets, (budget) => _.set(budget, 'name', categories[budget.category].name)
    )
  )
)

// for each category, make sure there is a budget
//   reduce over categories and return object of budgets
const createMissingBudgets = createSelector(
  [budgetsSelector, categoriesSelector],
  (budgets, categories) => {
    var newBudgets = Object.assign({}, budgets)
    // todo
  }
)

