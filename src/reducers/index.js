import {routeReducer} from "react-router-redux";
import {combineReducers} from "redux";
import incomes from "./incomes";
import expenses from "./expenses";
import categories from "./categories";

const rootReducer = combineReducers({
  routing: routeReducer,
  incomes,
  expenses,
  categories,
})

export default rootReducer
