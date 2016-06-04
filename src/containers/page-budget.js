import React, {Component} from 'react'
import {connect} from 'react-redux'

import Table from '../components/table'

class PageBudget extends Component {

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <td>Category</td>
                        <td>Budgeted</td>
                        <td>Spent</td>
                        <td>Left</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <input type="text" defaultValue="aoeu"/>
                        </td>
                        <td>
                            <input type="text" defaultValue="100"/>
                        </td>
                        <td>
                            <input type="text" defaultValue="60"/>
                        </td>
                        <td>
                            $40
                        </td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>Overflow</td>
                        <td>$100</td>
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

export default connect(mapStateToProps, {})(PageBudget)
