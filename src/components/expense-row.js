import React, {Component, PropTypes} from "react";
import MoneyInput from "../components/money-input";
import CategorySelect from '../components/category-select'

export default class ExpenseRow extends Component {
  handleDateChange(event) {
    const changedExpense = Object.assign({}, this.props.expense, {date: event.target.value})
    this.props.change(changedExpense)
  }

  handlePayeeChange(event) {
    const changedExpense = Object.assign({}, this.props.expense, {payee: event.target.value})
    this.props.change(changedExpense)
  }

  handleAmountChange(event) {
    const changedExpense = Object.assign({}, this.props.expense, {amount: event.target.value})
    this.props.change(changedExpense)
  }

  handleCategoryChange(chosenCategory) {
    const changedExpense = Object.assign({}, this.props.expense, {category: chosenCategory.id})
    this.props.change(changedExpense)
  }

  render() {
    return (
      <tr>
        <td>
          <input value={this.props.expense.date}
                 onChange={this.handleDateChange.bind(this)}
                 type="text"/>
        </td>
        <td>
          <input value={this.props.expense.payee}
                 onChange={this.handlePayeeChange.bind(this)}
                 type="text"/>
        </td>
        <td>
          <CategorySelect selected={this.props.expense.category}
                          change={this.handleCategoryChange.bind(this)}/>
        </td>
        <td>
          <MoneyInput amount={this.props.expense.amount}
                      change={this.handleAmountChange.bind(this)}/>
        </td>
      </tr>
    )
  }
}

ExpenseRow.propTypes = {
  expense: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired
}