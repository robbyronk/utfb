import React, {Component, PropTypes} from "react";

export default class DeleteRow extends Component {
  render() {
    // todo take in change callback and delete boolean
    return (
      <tr>
        <td>
          {this.props.label}
        </td>
        <td>
          <div className="switch tiny">
            <input className="switch-input"
                   id="tinySwitch"
                   name="exampleSwitch"
                   type="checkbox"/>
            <label className="switch-paddle"
                   htmlFor="tinySwitch">
              <span className="show-for-sr"> Deleting </span>
            </label>
          </div>
        </td>
      </tr>
    )
  }
}

DeleteRow.propTypes = {
  label: PropTypes.string.isRequired,
}