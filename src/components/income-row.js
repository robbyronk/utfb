import React, {Component, PropTypes} from "react";
import MoneyInput from "../components/money-input";

export default class IncomeRow extends Component {
  handleDateChange(event) {
    this.props.change(Object.assign({}, this.props.income, {date: event.target.value}))
  }

  handlePayerChange(event) {
    this.props.change(Object.assign({}, this.props.income, {payer: event.target.value}))
  }

  handleAmountChange(event) {
    this.props.change(Object.assign({}, this.props.income, {amount: event.target.value}))
  }

  render() {
    return (
      <tr>
        <td>
          <input value={this.props.income.date}
                 onChange={this.handleDateChange.bind(this)}
                 type="text"/>
        </td>
        <td>
          <input value={this.props.income.payer}
                 onChange={this.handlePayerChange.bind(this)}
                 type="text"/>
        </td>
        <td>
          <MoneyInput amount={this.props.income.amount}
                      change={this.handleAmountChange.bind(this)}/>
        </td>
      </tr>
    )
  }
}

IncomeRow.propTypes = {
  income: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired
}