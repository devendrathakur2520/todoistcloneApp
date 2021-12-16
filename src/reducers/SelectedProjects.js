import { SELECTED_PROJECTS } from "../action";

const initialState = {
  selectedprojects: 'INBOX'
}

export default function SelectedProjects(state = initialState, action) {
  console.log("selectedProject",state);
  switch (action.type) {
    case SELECTED_PROJECTS:
      return {
        ...state,
        selectedprojects: action.payload,
      }

    default:
      return state;
  }
}