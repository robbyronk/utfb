import React, {Component} from "react";
import {connect} from "react-redux";
import {createIncome, updateIncome} from "../actions";
import IncomeTable from "../components/income-table";

class PageIncome extends Component {
  // todo datepicker
  // todo total incomes

  render() {
    return (
      <div>
        <h3>Paydays for 1/1/2016 - 8/1/2016</h3>
        <button className="button expanded"
                onClick={this.props.createIncome}>
        Add an Income
        </button>
        <button className="alert hollow button expanded">Delete Incomes</button>
        <IncomeTable incomes={this.props.incomes}
                     updateIncome={this.props.updateIncome}/>
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
  createIncome,
  updateIncome
})(PageIncome)
