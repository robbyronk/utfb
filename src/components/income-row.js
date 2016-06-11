import React, {Component, PropTypes} from "react";
import MoneyInput from "../components/money-input";

export default class IncomeRow extends Component {
  handleDateChange(event) {
    const changedIncome = Object.assign({}, this.props.income, {date: event.target.value})
    this.props.change(changedIncome)
  }

  // todo payer change
  // todo amount change

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
  income: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired
}