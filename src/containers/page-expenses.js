import React, {Component} from "react";
import {connect} from "react-redux";
import {updateExpense} from "../actions";
import ExpenseTable from "../components/expense-table";

class PageExpenses extends Component {

  render() {
    return (
      <div>
        <h3>Expenses for 1/1/2016 - 8/1/2016</h3>
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
