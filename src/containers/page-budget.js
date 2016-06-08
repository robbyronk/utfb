import React, {Component} from "react";
import {connect} from "react-redux";

class PageBudget extends Component {

  // components
  //  table component
  //  row component

  render() {
    return (
      <div>
        <table>
          <thead>
          <tr>
            <td>Category</td>
            <td>Amount Left</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              Rent
            </td>
            <td>
              $0
            </td>
          </tr>
          <tr>
            <td>
              Restaurants
            </td>
            <td>
              $40
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, {})(PageBudget)
