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
        </tr>
        </thead>
        <tbody>
        {
          _.values(this.props.categories)
            .map((category) =>
              <CategorizeIncomeRow change={this.props.updateCategory}
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
  updateCategory: PropTypes.func.isRequired
}