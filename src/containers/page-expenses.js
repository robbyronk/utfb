import React, {Component} from 'react'
import {connect} from 'react-redux'

import Table from '../components/table'

class PageExpenses extends Component {

    render() {
        return (
            <div>
                <h3>Restaurant Expenses for 1/1/2016 - 8/1/2016</h3>
                <button className="button expanded">Add an Restaurant Expense</button>
                <table>
                    <thead>
                    <tr>
                        <td>Date</td>
                        <td>Who</td>
                        <td>Amount</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1/1/2016</td>
                        <td>Thai Place</td>
                        <td>$25</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>&nbsp;</td>
                        <td>$25</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {})(PageExpenses)
