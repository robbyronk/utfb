import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {available} from "../selectors";

class AvailableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.category.name}
        </td>
        <td>
          {this.props.available}
        </td>
      </tr>
    )
  }
}

AvailableRow.propTypes = {
  category: PropTypes.object.isRequired
}


function mapStateToProps(state, props) {
  return {
    available: available(state, props)
  }
}

export default connect(mapStateToProps, {})(AvailableRow)