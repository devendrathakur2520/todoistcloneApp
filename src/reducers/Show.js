import { SHOW } from "../action";

const initialState = {
  shouldShow: false
}

export default function Show(state = initialState, action) {
  switch (action.type) {
    case SHOW:
      return {
        ...state,
        shouldShow: action.payload,
      }

    default:
      return state;
  }
}