import { SELECTED_PROJECTS } from "../action";

const initialState = {
  selectedprojects: 'INBOX'
}

export default function SelectedProjects(state = initialState, action) {
  switch (action.type) {
    case SELECTED_PROJECTS:
      return {
        ...state,
        setprojects: action.payload,
      }

    default:
      return state;
  }
}