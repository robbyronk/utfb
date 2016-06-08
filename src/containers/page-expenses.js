import React, {Component} from "react";
import {connect} from "react-redux";
import ExpenseRow from "../components/expense-row";

class PageExpenses extends Component {

  render() {
    return (
      <div>
        <h3>Expenses for 1/1/2016 - 8/1/2016</h3>
        <button className="button expanded">Add an Expense</button>
        <button className="alert hollow button expanded">Delete Expenses</button>
        <table>
          <thead>
          <tr>
            <td>Date</td>
            <td>Who</td>
            <td width="30%">Amount</td>
          </tr>
          </thead>
          <tbody>
          <ExpenseRow/>
          <ExpenseRow/>
          <ExpenseRow/>
          </tbody>
          <tfoot>
          <tr>
            <td>Total</td>
            <td>&nbsp;</td>
            <td>$500</td>
          </tr>
          </tfoot>
        </table>
        <button className="success button expanded">Finish</button>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, {})(PageExpenses)
