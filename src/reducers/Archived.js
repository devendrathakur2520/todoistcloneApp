import { SET_ARCHIVED_TASKS } from "../action";

const initialState = {
  setarchived: [],
}

export default function setArchived(state = initialState, action) {
  switch (action.type) {
    case SET_ARCHIVED_TASKS:
      return {
        ...state,
        setarchived: action.payload,
      }

    default:
      return state;
  }
}