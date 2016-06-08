import React, {Component} from "react";
import {connect} from "react-redux";
import BudgetIncomeRow from "../components/budget-income-row";
import DeleteRow from "../components/delete-row";

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
        <table>
          <thead>
          <tr>
            <td>Category</td>
            <td width="50%">Budgeted</td>
          </tr>
          </thead>
          <tbody>
          <BudgetIncomeRow/>
          <BudgetIncomeRow/>
          <DeleteRow label="Mortgage"/>
          </tbody>
          <tfoot>
          <tr>
            <td>Overflow</td>
            <td>$100</td>
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

export default connect(mapStateToProps, {})(PageBudgetIncome)
