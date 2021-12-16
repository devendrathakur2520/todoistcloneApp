import { combineReducers } from 'redux';
import Task from './Task';
import setArchived from './Archived';
import Projects from './Projects';
import SelectedProjects from './SelectedProjects';
import showConfirm from './ShowConfirm';
import showProjects from './ShowProjects';
import Show from './Show';
import ProjectsName from './ProjectsName';
const reducer = combineReducers({
  Task,
  setArchived,
  Projects,
  SelectedProjects,
  showConfirm,
  showProjects,
  Show,
  ProjectsName

});
export default reducer;