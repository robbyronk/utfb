import update from 'react-addons-update'
import { UPDATE_INCOME } from '../actions'

const initialState = {
  0: {
    id: 0,
    date: '2016-01-01',
    payer: 'Acme Co',
    amount: 100.05
  }
}

function incomes(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INCOME:
      return update(state, {[action.payload.id]: {$set: action.payload}})
  }
  return state
}

export default incomes