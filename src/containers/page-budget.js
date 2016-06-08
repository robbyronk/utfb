import React, {Component} from "react";
import {connect} from "react-redux";
import BudgetRow from "../components/budget-row"

class PageBudget extends Component {

  // components
  //  table component

  render() {
    return (
      <div>
        <table>
          <thead>
          <tr>
            <td>Category</td>
            <td>Amount Left</td>
          </tr>
          </thead>
          <tbody>
          <BudgetRow/>
          <BudgetRow/>
          <BudgetRow/>
          <BudgetRow/>
          <BudgetRow/>
          <BudgetRow/>
          </tbody>
        </table>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, {})(PageBudget)
