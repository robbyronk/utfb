import React, {Component, PropTypes} from "react";

export default class MoneyInput extends Component {
  render() {
    const inputGroupLabelStyle = {
      'padding': '0 0.3rem'
    }
    return (
      <div className="input-group">
        <span className="input-group-label" style={inputGroupLabelStyle}>$</span>
        <input className="input-group-field"
               value={this.props.amount}
               onChange={this.props.change}
               type="number"/>
      </div>
    )
  }
}

MoneyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  change: PropTypes.func
}