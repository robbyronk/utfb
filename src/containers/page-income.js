import React, {Component} from "react";
import {connect} from "react-redux";
import IncomeRow from '../components/income-row'
import DeleteRow from '../components/delete-row'

class PageIncome extends Component {
  // todo datepicker
  // components:
  //  income table component

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
            <td width="30%">Amount</td>
          </tr>
          </thead>
          <tbody>
          <IncomeRow/>
          <IncomeRow/>
          <IncomeRow/>
          </tbody>
          <tfoot>
          <tr>
            <td>Total</td>
            <td>&nbsp;</td>
            <td>$500</td>
          </tr>
          </tfoot>
        </table>
        <table>
          <thead>
          <tr>
            <td>_label_</td>
            <td>Delete?</td>
          </tr>
          </thead>
          <tbody>
          <DeleteRow label="1/1/2016 Acme Co $100"/>
          </tbody>
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
