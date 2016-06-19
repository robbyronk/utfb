import React, {Component} from "react";
import {connect} from "react-redux";
import RebalanceRow from '../components/rebalance-row'

class PageRebalance extends Component {

  render() {
    return (
      <div>
        <table>
          <thead>
          <tr>
            <td>Category</td>
            <td>Budgeted</td>
            <td>Spent</td>
            <td>Left</td>
          </tr>
          </thead>
          <tbody>
          <RebalanceRow/>
          <RebalanceRow/>
          <RebalanceRow/>
          </tbody>
          <tfoot>
          <tr>
            <td>Overflow</td>
            <td>$100</td>
          </tr>
          </tfoot>
        </table>
        <button className="success button expanded">Finish</button>
      </div>
    )
  }

}

// todo selector that adds spent and available to category
function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, {})(PageRebalance)
