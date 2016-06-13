import {createSelector} from "reselect";
import _ from "lodash";

const budgetsSelector = (state) => state.budgets
const categoriesSelector = (state) => state.categories

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
