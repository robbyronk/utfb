import React, {Component} from "react";
import {connect} from "react-redux";
import {updateBudget} from "../actions";
import BudgetIncomeTable from "../components/budget-income-table";

class PageBudgetIncome extends Component {

  render() {
    return (
      <div>
        <h3>Budget Income</h3>
        <p>Put the amount you need in each category
          to cover expenses until your next paycheck.</p>
        <p>Left over money builds up in "overflow".</p>
        <button className="button expanded">Add Category</button>
        <button className="alert hollow button expanded">Delete Categories</button>
        <BudgetIncomeTable budgets={this.props.budgets}
                           updateBudget={this.props.updateBudget}/>
        <button className="success button expanded">Finish</button>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    budgets: state.budgets
  }
}

export default connect(mapStateToProps, {
  updateBudget
})(PageBudgetIncome)
