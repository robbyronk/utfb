import * as ActionTypes from '../actions'
import { routeReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import incomes from './incomes'
import expenses from './expenses'
import categories from './categories'
import periods from './periods'

const rootReducer = combineReducers({
  routing: routeReducer,
  incomes,
  expenses,
  categories,
  periods
})

export default rootReducer
