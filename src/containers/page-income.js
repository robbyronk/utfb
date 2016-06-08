import React, {Component} from "react";
import {connect} from "react-redux";

class PageIncome extends Component {
  // todo datepicker
  // components:
  //  income table component
  //  income row component
  //  delete mode row component

  render() {
    const deleteSwitchStyle = {
      'display': 'flex',
      'flexDirection': 'row',
      'justifyContent': 'space-around',
      'alignItems': 'center'
    }

    return (
      <div>
        <h3>Paydays for 1/1/2016 - 8/1/2016</h3>
        <button className="button expanded">Add an Income</button>
        <button className="alert hollow button expanded">Delete Incomes</button>
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
            <td>
              <input defaultValue="1/1/2016"
                     type="text"/>
            </td>
            <td>
              <input defaultValue="Acme Co"
                     type="text"/>
            </td>
            <td>
              <input defaultValue="100"
                     type="text"/>
            </td>
          </tr>
          <tr>
            <td>
              <input defaultValue="1/1/2016"
                     type="text"/>
            </td>
            <td>
              <input defaultValue="Acme Co"
                     type="text"/>
            </td>
            <td>
              <input defaultValue="200"
                     type="text"/>
            </td>
          </tr>
          <tr>
            <td>1/1/2016</td>
            <td>Acme Co</td>
            <td>
              <div style={deleteSwitchStyle}>
                <div>$200</div>
                <div className="switch tiny">
                  <input className="switch-input"
                         id="tinySwitch"
                         name="exampleSwitch"
                         type="checkbox"/>
                  <label className="switch-paddle"
                         htmlFor="tinySwitch">
                                <span className="show-for-sr">
                                  Deleting
                                </span>
                  </label>
                </div>
              </div>
            </td>
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
        <button className="success button expanded">Finish</button>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, {})(PageIncome)
