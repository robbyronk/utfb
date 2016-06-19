import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Navigation extends Component {
  render() {
    const instance = this
    return (
      <div>
        <div className="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle></button>
          <div className="title-bar-title">Menu</div>
        </div>

        <div className="top-bar" id="example-menu">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu ref={(elem) => {console.log(instance)}}>
              <li className="menu-text-name">
                <Link to='/' title="Start"><i className="fa fa-th-large"></i></Link>
              </li>
              <li><Link to='/income'>Payday</Link></li>
              <li><Link to='/expenses'>Expense</Link></li>
              <li><Link to='/available'>Available</Link></li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

Navigation.propTypes = {
}
