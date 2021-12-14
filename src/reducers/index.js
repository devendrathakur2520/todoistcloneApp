import { combineReducers } from 'redux';
import Task from './Task';
import setArchived from './Archived';
import Projects from './Projects';
import SelectedProjects from './SelectedProjects';
const reducer = combineReducers({
  Task,
  setArchived,
  Projects,
  SelectedProjects,

});
export default reducer;