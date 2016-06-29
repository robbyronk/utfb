import update from "react-addons-update";
import {CREATE_CATEGORY, UPDATE_CATEGORY} from "../actions";
import {DELETE_CATEGORY} from "../actions/index";

const initialState = {
  0: {
    id: 0,
    name: 'Uncategorized',
    amount: 20
  },
  1: {
    id: 1,
    name: 'Rent',
    amount: 580
  },
  2: {
    id: 2,
    name: 'Food',
    amount: 400
  },
  3: {
    id: 3,
    name: 'Cats',
    amount: 100
  }
}

function emptyAmountToZero(category) {
  return update(category, {amount: {$apply: (amount) => amount || 0}})
}

function categories(state = initialState, {type, payload}) {
  switch (type) {
    case CREATE_CATEGORY:
      return {...state, [payload.id]: payload}
    case UPDATE_CATEGORY:
      return update(state, {[payload.id]: {$set: emptyAmountToZero(payload)}})
    case DELETE_CATEGORY:
      return _.omitBy(state, {id: payload.id})
  }
  return state
}

export default categories