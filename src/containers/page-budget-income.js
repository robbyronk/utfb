import React, {Component} from 'react'
import {connect} from 'react-redux'

class PageBudgetIncome extends Component {

  render() {
    const deleteSwitchStyle = {
      'display': 'flex',
      'flexDirection': 'row',
      'justifyContent': 'space-around',
      'alignItems': 'center'
    }

    return (
      <div>
        <h3>Budget Income</h3>
        <p>Put the amount you need in each category
          to cover expenses until your next paycheck.</p>
        <p>Left over money builds up in "overflow".</p>
        <button className="button expanded">Add Category</button>
        <button className="alert hollow button expanded">Delete Categories</button>
        <table>
          <thead>
          <tr>
            <td>Category</td>
            <td>Budgeted</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <input type="text" defaultValue="aoeu"/>
            </td>
            <td>
              <input type="text" defaultValue="100"/>
            </td>
          </tr>
          <tr>
            <td>
              Fun Money
            </td>
            <td>
              <div style={deleteSwitchStyle}>
                <div>$100</div>
                <div className="switch tiny">
                  <input className="switch-input"
                         id="tinySwitch"
                         name="exampleSwitch"
                         type="checkbox"/>
                  <label className="switch-paddle"
                         htmlFor="tinySwitch">
                                <span className="show-for-sr">
                                  Deleting Fun Money
                                </span>
                  </label>
                </div>
              </div>
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

export default connect(mapStateToProps, {})(PageBudgetIncome)
