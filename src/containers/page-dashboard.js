import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

class PageDashboard extends Component {

  render() {
    return (
      <ul>
        <li><Link to='/start' title="Start">Start</Link></li>
        <li><Link to='/income'>Payday</Link></li>
        <li><Link to='/categorize-income'>Categorize Income</Link></li>
        <li><Link to='/budget'>Budget</Link></li>
        <li><Link to='/expenses'>Expense</Link></li>
        <li><Link to='/rebalance'>Rebalance</Link></li>
      </ul>
    )
  }
}

PageDashboard.propTypes = {
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {
})(PageDashboard)
