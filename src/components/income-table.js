import React, {Component, PropTypes} from "react";
import IncomeRow from "../components/income-row";

export default class IncomeTable extends Component {
  render() {
    return (
      <table>
        <thead>
        <tr>
          <td>Date</td>
          <td>Who</td>
          <td width="30%">Amount</td>
          <td>Delete</td>
        </tr>
        </thead>
        <tbody>
        {
          _.values(this.props.incomes)
            .map((income) =>
              <IncomeRow change={this.props.updateIncome}
                         delete={this.props.deleteIncome}
                         key={income.id}
                         income={income}
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

IncomeTable.propTypes = {
  incomes: PropTypes.object.isRequired,
  deleteIncome: PropTypes.func.isRequired,
  updateIncome: PropTypes.func.isRequired
}