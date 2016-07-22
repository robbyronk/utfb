import {SET_CATEGORIES} from "../actions/index";

const initialState = {
}

function categories(state = initialState, {type, payload}) {
  switch (type) {
    case SET_CATEGORIES:
      return payload
  }
  return state
}

export default categories