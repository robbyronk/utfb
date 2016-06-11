import React, {Component, PropTypes} from "react";
import BudgetIncomeRow from "../components/budget-income-row";

export default class BudgetIncomeTable extends Component {
  render() {
    return (
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
        </tbody>
        <tfoot>
        <tr>
          <td>Overflow</td>
          <td>$100</td>
        </tr>
        </tfoot>
      </table>
    )
  }
}

BudgetIncomeTable.propTypes = {
  budgets: PropTypes.object.isRequired,
  updateBudget: PropTypes.func.isRequired
}