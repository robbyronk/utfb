import React, {Component, PropTypes} from "react";
import MoneyInput from "../components/money-input";

export default class RebalanceRow extends Component {
  render() {
    return (
      <tr>
        <td>
          Rent
        </td>
        <td>
          <MoneyInput/>
        </td>
        <td>
          $500
        </td>
        <td>
          $0
        </td>
      </tr>
    )
  }
}
