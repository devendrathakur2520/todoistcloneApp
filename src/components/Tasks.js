import React, { useEffect } from 'react'
import { useTasks } from '../hooks';
import { Checkbox } from './Checkbox';
import { collatedTasks } from '../constant';
import { useSelectedProjectsValue,useProjectsValue } from '../context';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';


export const Tasks = () => {
    const {setSelectedprojects}=useSelectedProjectsValue();
    const {projects}=useProjectsValue()
    const { tasks } = useTasks(setSelectedprojects)
    console.log("tasks ", tasks);
    let projectName = '';
    
    if (collatedTasksExist(setSelectedprojects) && setSelectedprojects) {
        projectName = getCollatedTitle(collatedTasks, setSelectedprojects).name;
        console.log('project1',projectName);
      }


  if (
    projects &&
    projects.length > 0 &&
    setSelectedprojects &&
    !collatedTasksExist(setSelectedprojects)
  ) {
    
    projectName = getTitle(projects, setSelectedprojects).name;
    //console.log('project2',projectName)
    
  } ;
  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });
    
    return (
        <div className='tasks' data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>

            <ul className="tasks__list">

                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}</ul>
        </div>
    )
}
