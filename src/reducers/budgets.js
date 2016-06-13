import update from 'react-addons-update'
import { UPDATE_BUDGET } from '../actions'

const initialState = {
  0: {
    id: 0,
    category: 1,
    amount: 580
  },
  1: {
    id: 1,
    category: 2,
    amount: 200
  }
}

function budgets(state = initialState, {type, payload}) {
  switch (type) {
    case UPDATE_BUDGET:
      return update(state, {[payload.id]: {$set: payload}})
  }
  return state
}

export default budgets