import React, {Component} from "react";
import {connect} from "react-redux";

class PageIncome extends Component {

  render() {
    return (
      <div>
        <h3>Income for 1/1/2016 - 8/1/2016</h3>
        <button className="button expanded">Add an Income</button>
        <table>
          <thead>
          <tr>
            <td>Date</td>
            <td>Who</td>
            <td>Amount</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1/1/2016</td>
            <td>Acme Co</td>
            <td>$500</td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <td>Total</td>
            <td>&nbsp;</td>
            <td>$500</td>
          </tr>
          </tfoot>
        </table>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, {})(PageIncome)
