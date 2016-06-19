import React, {Component, PropTypes} from "react";
import Select from "react-select";
import {connect} from "react-redux";
import { categories } from '../selectors'

import 'react-select/dist/react-select.css'

class CategorySelect extends Component {
  render() {
    return (
      <Select onChange={this.props.change}
              value={this.props.selected}
              options={this.props.categories}
              valueKey="id"
              labelKey="name"/>
    )
  }
}

CategorySelect.propTypes = {
  selected: PropTypes.number.isRequired,
  change: PropTypes.func
}

function mapStateToProps(state) {
  return {
    categories: categories(state)
  }
}

export default connect(mapStateToProps, {})(CategorySelect)