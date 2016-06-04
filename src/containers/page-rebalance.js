import React, {Component} from "react";
import {connect} from "react-redux";

class PageRebalance extends Component {

  render() {
    const inputGroupLabelStyle = {
      'padding': '0 0.3rem'
    }

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
          <tr>
            <td>
              Rent
            </td>
            <td>
              <div className="input-group">
                <span className="input-group-label"
                      style={inputGroupLabelStyle}>$</span>
                <input className="input-group-field"
                       defaultValue="500"
                       type="number"/>
              </div>
            </td>
            <td>
              $500
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
              <div className="input-group">
                <span className="input-group-label"
                      style={inputGroupLabelStyle}>$</span>
                <input className="input-group-field"
                       defaultValue="100"
                       type="number"/>
              </div>
            </td>
            <td>
              $60
            </td>
            <td>
              $40
            </td>
          </tr>
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

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, {})(PageRebalance)
