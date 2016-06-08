import React, {Component, PropTypes} from "react";
import MoneyInput from "../components/money-input";

export default class IncomeRow extends Component {
  render() {
    return (
      <tr>
        <td>
          <input defaultValue="1/1/2016"
                 type="text"/>
        </td>
        <td>
          <input defaultValue="Acme Co"
                 type="text"/>
        </td>
        <td>
          <MoneyInput/>
        </td>
      </tr>
    )
  }
}
