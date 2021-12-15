import { combineReducers } from 'redux';
import Task from './Task';
import setArchived from './Archived';
import Projects from './Projects';
import SelectedProjects from './SelectedProjects';
import showConfirm from './ShowConfirm';
import showProjects from './ShowProjects';
const reducer = combineReducers({
  Task,
  setArchived,
  Projects,
  SelectedProjects,
  showConfirm,
  showProjects

});
export default reducer;