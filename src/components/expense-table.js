import React, {Component, PropTypes} from "react";
import ExpenseRow from "../components/expense-row";

export default class ExpenseTable extends Component {
  render() {
    return (
      <table>
        <thead>
        <tr>
          <td>Date</td>
          <td>Who</td>
          <td width="30%">Amount</td>
        </tr>
        </thead>
        <tbody>
        {
          _.values(this.props.expenses)
            .map((expense) =>
              <ExpenseRow change={this.props.updateExpense}
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
  updateExpense: PropTypes.func.isRequired
}