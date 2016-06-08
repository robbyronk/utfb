import * as ActionTypes from '../actions'
import { routeReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import incomes from './incomes'
import expenses from './expenses'
import categories from './categories'
import budgets from './budgets'
import periods from './periods'

const rootReducer = combineReducers({
  routing: routeReducer,
  incomes,
  expenses,
  categories,
  budgets,
  periods
})

export default rootReducer
