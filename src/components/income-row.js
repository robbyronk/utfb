import React, {Component, PropTypes} from "react";
import MoneyInput from "../components/money-input";

export default class IncomeRow extends Component {
  render() {
    return (
      <tr>
        <td>
          <input value={this.props.income.date}
                 type="text"/>
        </td>
        <td>
          <input value={this.props.income.payer}
                 type="text"/>
        </td>
        <td>
          <MoneyInput amount={this.props.income.amount}/>
        </td>
      </tr>
    )
  }
}

IncomeRow.propTypes = {
  income: PropTypes.object.isRequired
}