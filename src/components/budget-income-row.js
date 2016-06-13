import React, {Component, PropTypes} from "react";
import MoneyInput from "../components/money-input";

export default class BudgetIncomeRow extends Component {
  handleCategoryChange(event) {
    const changedIncome = Object.assign(
      {},
      this.props.budget,
      {category: event.target.value}
    )
    this.props.change(changedIncome)
  }

  handleAmountChange(event) {
    const changedIncome = Object.assign(
      {},
      this.props.budget,
      {amount: event.target.value}
    )
    this.props.change(changedIncome)
  }

  render() {
    return (
      <tr>
        <td>
          <input onChange={this.handleCategoryChange.bind(this)}
                 type="text"
                 value={this.props.budget.name}
          />
        </td>
        <td>
          <MoneyInput amount={this.props.budget.amount}
                      change={this.handleAmountChange.bind(this)}
          />
        </td>
      </tr>
    )
  }
}

BudgetIncomeRow.propTypes = {
  budget: PropTypes.object.isRequired,
  change: PropTypes.func
}
