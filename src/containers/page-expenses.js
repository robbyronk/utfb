import React, {Component} from "react";
import {connect} from "react-redux";
import {createExpense, updateExpense, deleteExpense} from "../actions";
import ExpenseTable from "../components/expense-table";
import {browserHistory} from "react-router";
import {isOverspent} from "../selectors/index";

class PageExpenses extends Component {
  gotoAvailable() {
    browserHistory.push('/available')
  }

  gotoRebalance() {
    browserHistory.push('/rebalance')
  }

  render() {
    return (
      <div>
        <h3>Expenses</h3>
        <button className="button expanded"
                onClick={this.props.createExpense}>Add an Expense
        </button>
        <ExpenseTable expenses={this.props.expenses}
                      deleteExpense={this.props.deleteExpense}
                      updateExpense={this.props.updateExpense}/>
        { this.props.isOverspent
          ? <button className="button expanded" onClick={this.gotoRebalance}>Next</button>
          : <button className="success button expanded" onClick={this.gotoAvailable}>Finish</button>
        }
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    expenses: state.expenses,
    isOverspent: isOverspent(state),
  }
}

export default connect(mapStateToProps, {
  createExpense,
  deleteExpense,
  updateExpense
})(PageExpenses)
