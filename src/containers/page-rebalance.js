import React, {Component} from "react";
import {connect} from "react-redux";
import RebalanceRow from "../components/rebalance-row";
import {rebalanceCategories, amountToCategorize} from "../selectors";
import {updateCategory} from "../actions";

class PageRebalance extends Component {
  // 
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
        <button className="success button expanded">Finish</button>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    categories: rebalanceCategories(state),
    amountToCategorize: amountToCategorize(state),
  }
}

export default connect(mapStateToProps, {
  updateCategory
})(PageRebalance)
