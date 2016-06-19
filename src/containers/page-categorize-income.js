import React, {Component} from "react";
import {connect} from "react-redux";
import {createCategory, updateCategory} from "../actions";
import CategorizeIncomeTable from "../components/categorize-income-table";
import {amountToCategorize, totalIncome, totalCategories, incomes, categories} from "../selectors";

class PageCategorizeIncome extends Component {
  // todo disable finish button unless the amount left to categorize is zero
  // todo finish button should go to available screen

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
        <p>Amount left to categorize: {this.props.amountToCategorize}</p>
        <CategorizeIncomeTable categories={this.props.categories}
                           updateCategory={this.props.updateCategory}/>
        <button className="success button expanded">Finish</button>
      </div>
    )
  }

}

const mapStateToProps = function(state) {
  return {
    amountToCategorize: amountToCategorize(state),
    totalIncomes: totalIncome(state),
    totalCategories: totalCategories(state),
    incomes: incomes(state),
    categories: categories(state)
  }
};

export default connect(mapStateToProps, {
  createCategory,
  updateCategory
})(PageCategorizeIncome)
