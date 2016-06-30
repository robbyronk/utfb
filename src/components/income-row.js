import React, {Component, PropTypes} from "react";
import DatePicker from "react-datepicker";
import MoneyInput from "../components/money-input";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

export default class IncomeRow extends Component {
  handleDateChange(date) {
    this.props.change({...this.props.income, date: date.format('YYYY-MM-DD')})
  }

  handlePayerChange(event) {
    this.props.change({...this.props.income, payer: event.target.value})
  }

  handleAmountChange(amount) {
    this.props.change({...this.props.income, amount})
  }

  handleDelete() {
    this.props.delete(this.props.income.id)
  }

  render() {
    return (
      <tr>
        <td>
          <DatePicker selected={moment(this.props.income.date)}
                      onChange={this.handleDateChange.bind(this)}
                      dateFormat="ll"/>
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
        <td>
          <button className="alert button"
                  onClick={this.handleDelete.bind(this)}>Delete
          </button>
        </td>
      </tr>
    )
  }
}

IncomeRow.propTypes = {
  income: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired
}