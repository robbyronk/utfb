import React, {Component, PropTypes} from "react";
import MoneyInput from "../components/money-input";

export default class RebalanceRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.category.name}
        </td>
        <td>
          <MoneyInput amount={this.props.category.amount}/>
        </td>
        <td>
          ${this.props.category.spent}
        </td>
        <td>
          ${this.props.category.available}
        </td>
      </tr>
    )
  }
}

RebalanceRow.propTypes = {
  category: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired
}