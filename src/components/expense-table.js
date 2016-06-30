import React, {Component, PropTypes} from "react";
import ExpenseRow from "../components/expense-row";

export default class ExpenseTable extends Component {
  render() {
    return (
      <table>
        <thead>
        <tr>
          <td width="15%">Date</td>
          <td width="30%">Who</td>
          <td width="30%">Category</td>
          <td width="15%">Amount</td>
          <td width="10%">Delete</td>
        </tr>
        </thead>
        <tbody>
        {
          _.values(this.props.expenses)
            .map((expense) =>
              <ExpenseRow change={this.props.updateExpense}
                          delete={this.props.deleteExpense}
                          key={expense.id}
                          expense={expense}
              />)
        }
        </tbody>
        <tfoot>
        <tr>
        </tr>
        </tfoot>
      </table>
    )
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.object.isRequired,
  deleteExpense: PropTypes.func.isRequired,
  updateExpense: PropTypes.func.isRequired
}