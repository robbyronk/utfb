import React, {Component} from "react";
import {connect} from "react-redux";

class PageIncome extends Component {

  render() {
    // todo figure out how to best choose period (buttons? radio?)
    // todo date picker for paycheck
    // todo dollar sign on left of input box
    // todo use flex instead of all these p tags
    return (
      <div>
        <h3>Begin a New Budget</h3>
        <p>How often do you get paid?</p>
        <p>If it varies, pick how often you pay most of your bills.</p>
        <p><input type="radio"/> Weekly</p>
        <p><input type="radio"/> Fortnightly</p>
        <p><input type="radio"/> Monthly</p>
        <p>When is your next paycheck coming in?</p>
        <p><input type="text"/></p>
        <p>How much do you have in your account right now?</p>
        <p><input type="text"/></p>
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
