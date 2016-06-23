import React, {Component} from "react";
import {connect} from "react-redux";
import {createCategory, updateCategory} from "../actions";
import CategorizeIncomeTable from "../components/categorize-income-table";
import {browserHistory} from "react-router";
import {amountToCategorize, categories, incomes, isBalanced, totalCategories, totalIncome} from "../selectors";

class PageCategorizeIncome extends Component {
  gotoAvailable() {
    browserHistory.push('/available')
  }

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
        { this.props.isBalanced
          ? <button className="success button expanded" onClick={this.gotoAvailable}>Finish</button>
          : <button className="disabled success button expanded" disabled="true">Finish</button>
        }

      </div>
    )
  }

}

const mapStateToProps = function(state) {
  return {
    amountToCategorize: amountToCategorize(state),
    categories: categories(state),
    incomes: incomes(state),
    isBalanced: isBalanced(state),
    totalCategories: totalCategories(state),
    totalIncomes: totalIncome(state),
  }
};

export default connect(mapStateToProps, {
  createCategory,
  updateCategory
})(PageCategorizeIncome)
