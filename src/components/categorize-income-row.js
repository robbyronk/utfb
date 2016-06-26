import React, {Component, PropTypes} from "react";
import MoneyInput from "../components/money-input";

export default class CategorizeIncomeRow extends Component {
  handleCategoryChange(event) {
    this.props.changeCategory({...this.props.category, category: event.target.value})
  }

  handleAmountChange(amount) {
    this.props.change({...this.props.category, amount})
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
