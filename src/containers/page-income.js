import React, {Component} from "react";
import {connect} from "react-redux";
import {createIncome, updateIncome} from "../actions";
import IncomeTable from "../components/income-table";

class PageIncome extends Component {
  // todo datepicker
  // todo next button goes to categorize income

  render() {
    return (
      <div>
        <h3>Paydays</h3>
        <button className="button expanded"
                onClick={this.props.createIncome}>
        Add an Income
        </button>
        <button className="alert hollow button expanded">Delete Incomes</button>
        <IncomeTable incomes={this.props.incomes}
                     updateIncome={this.props.updateIncome}/>
        <button className="success button expanded">Next</button>
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
