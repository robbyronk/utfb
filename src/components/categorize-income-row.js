import React, {Component, PropTypes} from "react";
import MoneyInput from "../components/money-input";

export default class CategorizeIncomeRow extends Component {
  handleCategoryChange(event) {
    const changedIncome = Object.assign(
      {},
      this.props.category,
      {category: event.target.value}
    )
    this.props.changeCategory(changedIncome)
  }

  handleAmountChange(event) {
    const changedIncome = Object.assign(
      {},
      this.props.category,
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
                 value={this.props.category.name}
          />
        </td>
        <td>
          <MoneyInput amount={this.props.category.amount}
                      change={this.handleAmountChange.bind(this)}
          />
        </td>
      </tr>
    )
  }
}

CategorizeIncomeRow.propTypes = {
  category: PropTypes.object.isRequired,
  change: PropTypes.func,
  changeCategory: PropTypes.func
}
