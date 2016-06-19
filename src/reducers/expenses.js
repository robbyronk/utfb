import update from 'react-addons-update'
import { CREATE_EXPENSE, UPDATE_EXPENSE } from '../actions'

const initialState = {
  0: {
    id: 0,
    amount: 10,
    date: '2016-01-01',
    category: 0,
    payee: 'Acme Co'
  }
}

function expenses(state = initialState, {type, payload}) {
  switch (type) {
    case CREATE_EXPENSE:
      return Object.assign({}, state, {[payload.id]: payload})
    case UPDATE_EXPENSE:
      return update(state, {[payload.id]: {$set: payload}})
  }
  return state
}

export default expenses