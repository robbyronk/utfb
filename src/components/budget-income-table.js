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
        {
          _.values(this.props.budgets)
            .map((budget) =>
              <BudgetIncomeRow change={this.props.updateBudget}
                         key={budget.id}
                         budget={budget}
              />)
        }
        </tbody>
        <tfoot>
        <tr>
          <td>Going into Overflow</td>
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