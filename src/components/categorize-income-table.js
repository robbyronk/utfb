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
          this.props.categories.map((category) =>
            <CategorizeIncomeRow delete={this.props.deleteCategory}
                                 change={this.props.updateCategory}
                                 key={category.id}
                                 category={category}/>
          )
        }
        </tbody>
      </table>
    )
  }
}

CategorizeIncomeTable.propTypes = {
  categories: PropTypes.array.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired
}