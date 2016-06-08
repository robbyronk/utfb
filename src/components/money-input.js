import React, {Component, PropTypes} from "react";

export default class MoneyInput extends Component {
  render() {
    const inputGroupLabelStyle = {
      'padding': '0 0.3rem'
    }
    // TODO take in value, change callback
    return (
      <div className="input-group">
                <span className="input-group-label"
                      style={inputGroupLabelStyle}>$</span>
        <input className="input-group-field"
               defaultValue="550"
               type="number"/>
      </div>
    )
  }
}
