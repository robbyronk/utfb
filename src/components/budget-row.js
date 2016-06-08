import React, {Component, PropTypes} from "react";
import MoneyInput from "../components/money-input";

export default class BudgetRow extends Component {
  render() {
    return (
      <tr>
        <td>
          Rent
        </td>
        <td>
          $5
        </td>
      </tr>
    )
  }
}
