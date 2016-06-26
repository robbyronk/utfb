import React, {Component, PropTypes} from "react";
import MoneyInput from "../components/money-input";

export default class RebalanceRow extends Component {
  handleAmountChange(amount) {
    this.props.change({...this.props.category, amount})
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.category.name}
        </td>
        <td>
          <MoneyInput amount={this.props.category.amount}
                      change={this.handleAmountChange.bind(this)}/>
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