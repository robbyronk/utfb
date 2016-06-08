import React, {Component, PropTypes} from "react";
import MoneyInput from "../components/money-input";

export default class BudgetIncomeRow extends Component {
  render() {
    return (
      <tr>
        <td>
          <input type="text" defaultValue="aoeu"/>
        </td>
        <td>
          <MoneyInput/>
        </td>
      </tr>
    )
  }
}
