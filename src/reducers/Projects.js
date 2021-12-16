import { SET_PROJECTS } from "../action";

const initialState = {
  setprojects: null,
}

export default function Projects(state = initialState, action) {
  console.log("setprojects",state);
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        setprojects: action.payload,
      }

    default:
      return state;
  }
}