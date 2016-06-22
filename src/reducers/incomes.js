import update from "react-addons-update";
import {CREATE_INCOME, UPDATE_INCOME} from "../actions";

const initialState = {
  0: {
    id: 0,
    date: '2016-01-01',
    payer: 'Acme Co',
    amount: 100.05
  }
}

function incomes(state = initialState, {type, payload}) {
  switch (type) {
    case CREATE_INCOME:
      return {...state, [payload.id]: payload}
    case UPDATE_INCOME:
      return update(state, {[payload.id]: {$set: payload}})
  }
  return state
}

export default incomes