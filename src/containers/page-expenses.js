import React, {Component} from "react";
import {connect} from "react-redux";
import {updateExpense} from "../actions";
import ExpenseTable from "../components/expense-table";

class PageExpenses extends Component {
  // todo if an expense makes a category go over, the finish button should be a next button
  // todo next button should go to rebalance screen
  // todo finish button should go to available screen

  render() {
    return (
      <div>
        <h3>Expenses</h3>
        <button className="button expanded">Add an Expense</button>
        <button className="alert hollow button expanded">Delete Expenses</button>
        <ExpenseTable expenses={this.props.expenses}
                      updateExpense={this.props.updateExpense}/>
        <button className="success button expanded">Finish</button>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    expenses: state.expenses
  }
}

export default connect(mapStateToProps, {
  updateExpense
})(PageExpenses)
