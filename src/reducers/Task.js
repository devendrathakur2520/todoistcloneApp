import { SET_TASKS } from "../action";

const initialState = {
    settask: [],
}

export default function Task(state = initialState, action) {
console.log("dsfdsgds",action.payload);
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                settask: action.payload,
            }

        default:
            return state;
    }
}