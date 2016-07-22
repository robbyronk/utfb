import {SET_INCOMES} from "../actions/index";

const initialState = {
}

function incomes(state = initialState, {type, payload}) {
  switch (type) {
    case SET_INCOMES:
      return payload
  }
  return state
}

export default incomes