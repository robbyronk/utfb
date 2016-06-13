import React, {Component} from "react";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {updateBudget, createCategory, updateCategory} from "../actions";
import BudgetIncomeTable from "../components/budget-income-table";
import {addCategoryName} from "../selectors";

class PageBudgetIncome extends Component {

  render() {
    return (
      <div>
        <h3>Budget Income</h3>
        <p>Put the amount you need in each category
          to cover expenses until your next paycheck.</p>
        <p>Left over money builds up in "overflow".</p>
        <button className="button expanded"
                onClick={this.props.createCategory}>Add Category
        </button>
        <button className="alert hollow button expanded">Delete Categories</button>
        <BudgetIncomeTable budgets={this.props.budgets}
                           updateBudget={this.props.updateBudget}
                           updateCategory={this.props.updateCategory}/>
        <button className="success button expanded">Finish</button>
      </div>
    )
  }

}

const budgetIncomeSelector = createSelector(
  addCategoryName,
  (budgets) => ({
    budgets
  })
)

export default connect(budgetIncomeSelector, {
  updateBudget,
  createCategory,
  updateCategory
})(PageBudgetIncome)
