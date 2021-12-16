import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectedProjects } from "../action";
import { useSelectedProjectsValue, useProjectsValue } from "../context";
import { IndividualProject } from "./IndividualProject";

export const Projects = ({ activeValue = null }) => {

  const dispatch = useDispatch()
  const [active, setActive] = useState(activeValue);
  const { setSelectedProjects } = useSelectedProjectsValue();
  const { projects } = useProjectsValue();
  return (
    <div>{
      projects &&
      projects.map((project) => (
        <li
          key={project.projectId}
          data-testid="project-action-parent"
          data-doc-id={project.docId}
          className={
            active === project.projectId
              ? 'active sidebar__project'
              : 'sidebar__project'
          }
        >
          <div
            role="button"
            data-testid="project-action"
            tabIndex={0}
            aria-label={`Select ${project.name} as the task project`}
            onClick={() => {
              setActive(project.projectId);
              dispatch(selectedProjects(project.projectId));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive(project.projectId);
                dispatch(selectedProjects(project.projectId));
              }
            }}
          >
            { <IndividualProject project={project} /> }
          </div>
        </li>
      ))
    }
    </div>
  );
};




