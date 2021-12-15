import { SET_SHOW_PROJECTS} from "../action";

const initialState = {
  showprojects: true,
}

export default function showProjects(state = initialState, action) {
  switch (action.type) {
    case SET_SHOW_PROJECTS:
      return {
        ...state,
        showprojects: action.payload,
      }

    default:
      return state;
  }
}