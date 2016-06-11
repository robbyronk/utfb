import update from 'react-addons-update'
import { CREATE_CATEGORY, UPDATE_CATEGORY } from '../actions'

const initialState = {
  0: {
    id: 0,
    name: 'Uncategorized'
  },
  1: {
    id: 1,
    name: 'Rent'
  },
  2: {
    id: 2,
    name: 'Food'
  },
  3: {
    id: 3,
    name: 'Cats'
  }
}

function categories(state = initialState, {type, payload}) {
  switch (type) {
    case CREATE_CATEGORY:
      return Object.assign({}, state, {[payload.id]: payload})
    case UPDATE_CATEGORY:
      return update(state, {[payload.id]: {$set: payload}})
  }
  return state
}

export default categories