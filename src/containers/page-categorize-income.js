import React, {Component} from "react";
import {connect} from "react-redux";
import {createCategory, updateCategory} from "../actions";
import CategorizeIncomeTable from "../components/categorize-income-table";

class PageCategorizeIncome extends Component {

  render() {
    return (
      <div>
        <h3>Categorize Income</h3>
        <p>Put the amount you need in each category
          to cover expenses until your next paycheck.</p>
        <p>Left over money builds up in "overflow".</p>
        <button className="button expanded"
                onClick={this.props.createCategory}>Add Category
        </button>
        <button className="alert hollow button expanded">Delete Categories</button>
        <CategorizeIncomeTable categories={this.props.categories}
                           updateCategory={this.props.updateCategory}/>
        <button className="success button expanded">Finish</button>
      </div>
    )
  }

}

const mapStateToProps = function(state) {
  return {
    categories: state.categories
  }
};

export default connect(mapStateToProps, {
  createCategory,
  updateCategory
})(PageCategorizeIncome)
