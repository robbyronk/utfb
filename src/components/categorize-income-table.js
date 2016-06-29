import React, {Component, PropTypes} from "react";
import CategorizeIncomeRow from "../components/categorize-income-row";

export default class CategorizeIncomeTable extends Component {
  render() {
    return (
      <table>
        <thead>
        <tr>
          <td>Category</td>
          <td width="50%">Amount Allocated</td>
          <td>Delete</td>
        </tr>
        </thead>
        <tbody>
        {
          _.values(this.props.categories)
            .map((category) =>
              <CategorizeIncomeRow delete={this.props.deleteCategory}
                                   change={this.props.updateCategory}
                                   key={category.id}
                                   category={category}/>
            )
        }
        </tbody>
        <tfoot>
        <tr>
          <td>Going into Overflow</td>
          <td>$100</td>
        </tr>
        </tfoot>
      </table>
    )
  }
}

CategorizeIncomeTable.propTypes = {
  categories: PropTypes.object.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired
}