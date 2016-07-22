import {SET_EXPENSES} from "../actions/index";

const initialState = {
}

function expenses(state = initialState, {type, payload}) {
  switch (type) {
    case SET_EXPENSES:
      return payload
  }
  return state
}

export default expenses