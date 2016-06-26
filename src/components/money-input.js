import React, {Component, PropTypes} from "react";

export default class MoneyInput extends Component {
  handleChange(event) {
    const rawInput = event.target.value
    const withoutLeadingZero = _.dropWhile(rawInput, (s) => s === '0').join('')
    if (!withoutLeadingZero) {
      this.props.change('0')
      return
    }
    this.props.change(withoutLeadingZero)
  }

  render() {
    const inputGroupLabelStyle = {
      'padding': '0 0.3rem'
    }
    return (
      <div className="input-group">
        <span className="input-group-label" style={inputGroupLabelStyle}>$</span>
        <input className="input-group-field"
               value={this.props.amount}
               onChange={this.handleChange.bind(this)}
               type="number"/>
      </div>
    )
  }
}

MoneyInput.propTypes = {
  amount: PropTypes.any.isRequired,
  change: PropTypes.func
}