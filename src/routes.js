import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import App from './containers/app'
import Budget from './containers/page-budget'
import Expenses from './containers/page-expenses'
import Income from './containers/page-income'
import Start from './containers/page-start'
import Dashboard from './containers/page-dashboard'
import NotFound from './containers/page-not-found'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard}/>
    <Route path="/income" component={Income} />
    <Route path="/expenses" component={Expenses} />
    <Route path="/budget" component={Budget} />
    <Route path="/start" component={Start} />
    <Route path="*" component={NotFound} />
  </Route>
)
