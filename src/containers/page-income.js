import React, {Component} from "react";
import {connect} from "react-redux";
import {newIncome, updateIncomeRequest, deleteIncome} from "../actions";
import IncomeTable from "../components/income-table";
import {browserHistory} from "react-router";

class PageIncome extends Component {
  gotoCategorizeIncome() {
    browserHistory.push('/categorize-income')
  }

  render() {
    return (
      <div>
        <h3>Paydays</h3>
        <button className="button expanded"
                onClick={this.props.newIncome}>
        Add an Income
        </button>
        <IncomeTable incomes={this.props.incomes}
                     deleteIncome={this.props.deleteIncome}
                     updateIncome={this.props.updateIncomeRequest}/>
        <button className="success button expanded"
                onClick={this.gotoCategorizeIncome}>Next
        </button>
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
  newIncome,
  deleteIncome,
  updateIncomeRequest
})(PageIncome)
