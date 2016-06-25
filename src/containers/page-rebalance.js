import React, {Component} from "react";
import {connect} from "react-redux";
import RebalanceRow from "../components/rebalance-row";
import {rebalanceCategories, amountToCategorize} from "../selectors";
import {updateCategory} from "../actions";
import {isBalanced} from "../selectors/index";
import {browserHistory} from "react-router";

class PageRebalance extends Component {
  gotoAvailable() {
    browserHistory.push('/available')
  }

  render() {
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
          {
            this.props.categories.map((category) =>
              <RebalanceRow change={this.props.updateCategory}
                            key={category.id}
                            category={category}/>
            )
          }
          </tbody>
          <tfoot>
          <tr>
            <td>Overflow</td>
            <td>${this.props.amountToCategorize}</td>
          </tr>
          </tfoot>
        </table>
        { this.props.isBalanced
          ? <button className="success button expanded" onClick={this.gotoAvailable}>Finish</button>
          : <button className="disabled success button expanded" disabled="true">Finish</button>
        }
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    categories: rebalanceCategories(state),
    amountToCategorize: amountToCategorize(state),
    isBalanced: isBalanced(state),
  }
}

export default connect(mapStateToProps, {
  updateCategory
})(PageRebalance)
