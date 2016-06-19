import React, {Component} from "react";
import {connect} from "react-redux";
import RebalanceRow from "../components/rebalance-row";
import {rebalanceCategories} from "../selectors";
import {updateCategory} from "../actions";

class PageRebalance extends Component {

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
            <td>$100</td>
          </tr>
          </tfoot>
        </table>
        <button className="success button expanded">Finish</button>
      </div>
    )
  }

}

// todo selector that adds spent and available to category
function mapStateToProps(state) {
  return {
    categories: rebalanceCategories(state)
  }
}

export default connect(mapStateToProps, {
  updateCategory
})(PageRebalance)
