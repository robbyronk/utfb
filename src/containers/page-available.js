import React, {Component} from "react";
import {connect} from "react-redux";
import AvailableRow from "../components/available-row"

class PageAvailable extends Component {

  render() {
    return (
      <div>
        <table>
          <thead>
          <tr>
            <td>Category</td>
            <td>Amount Left</td>
          </tr>
          </thead>
          <tbody>
          {
            _.values(this.props.categories)
              .map((category) =>
                <AvailableRow key={category.id}
                              category={category}/>
              )
          }
          </tbody>
        </table>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, {})(PageAvailable)
