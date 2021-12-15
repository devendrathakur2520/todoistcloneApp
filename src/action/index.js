export const SET_TASKS = 'SET_TASKS';
export const SET_ARCHIVED_TASKS = 'SET_ARCHIVED_TASKS';
export const SET_PROJECTS = 'SET_PROJECTS';
export const SELECTED_PROJECTS = 'SELECTED_PROJECTS';
export const SET_SHOW_CONFIRM = 'SET_SHOW_CONFIRM';
export const SET_SHOW_PROJECTS = 'SET_SHOW_PROJECTS';



export const setTasks = (payload) => ({ type: SET_TASKS, payload });
export const setArchivedTasks = (payload) => ({ type: SET_ARCHIVED_TASKS, payload });
export const setProjects = (payload) => ({ type: SET_PROJECTS, payload });
export const selectedProjects = (payload) => ({ type: SELECTED_PROJECTS, payload });
export const setShowConfirm = (payload) => ({ type: SET_SHOW_CONFIRM, payload });
export const setShowProjects = (payload) => ({ type: SET_SHOW_PROJECTS, payload });
