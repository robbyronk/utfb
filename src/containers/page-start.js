import React, {Component} from "react";
import {connect} from "react-redux";
import MoneyInput from '../components/money-input'

class PageIncome extends Component {

  render() {
    // todo date picker for paycheck
    // todo use flex instead of all these p tags
    return (
      <div>
        <h3>Begin a New Budget</h3>
        <p>How often do you get paid?</p>
        <p>If it varies, pick how often you pay most of your bills.</p>
        <p>
          <input type="radio" id="weekly" name="period"/>
          <label htmlFor="weekly">Weekly</label>
        </p>
        <p>
          <input type="radio" id="fortnightly" name="period"/>
          <label htmlFor="fortnightly">Fortnightly</label>
        </p>
        <p>
          <input type="radio" id="monthly" name="period"/>
          <label htmlFor="monthly">Monthly</label>
        </p>
        <p>When is your next paycheck coming in?</p>
        <p><input type="text"/></p>
        <p>How much do you have in your account right now?</p>
        <p>
          <MoneyInput/>
        </p>
        <p>
          <button className="button expanded"> Finish</button>
        </p>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, {})(PageIncome)
