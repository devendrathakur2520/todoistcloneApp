import { SET_PROJECTS_NAME } from "../action";

const initialState = {
  setprojectsname: null,
}

export default function ProjectsName(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS_NAME:
      return {
        ...state,
        setprojectsname: action.payload,
      }

    default:
      return state;
  }
}