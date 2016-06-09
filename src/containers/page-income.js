import React, {Component} from "react";
import {connect} from "react-redux";
import IncomeRow from "../components/income-row";
import {updateIncome} from "../actions";
import _ from "lodash";

class PageIncome extends Component {
  // todo datepicker
  // todo total incomes
  // components:
  //  income table component

  render() {
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
          {
            _.values(this.props.incomes)
              .map((income) =>
                <IncomeRow change={this.props.updateIncome}
                           key={income.id}
                           income={income}
                />)
          }
          </tbody>
          <tfoot>
          <tr>
          </tr>
          </tfoot>
        </table>
        <button className="success button expanded">Finish</button>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    incomes: state.incomes
  }
}

export default connect(mapStateToProps, {
  updateIncome
})(PageIncome)
