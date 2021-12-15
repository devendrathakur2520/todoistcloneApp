import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useProjectsValue,useSelectedProjectsValue } from '../context'
import { firebase } from '../firebase'
import { useSelector,useDispatch } from 'react-redux'
import { selectedProjects, setProjects, setShowConfirm } from '../action'

export const IndividualProject=({project})=>{
  const dispatch=useDispatch();
  const showConfirm=useSelector((state)=>state.showConfirm.showconfirm)
  const {projects}=useProjectsValue();
  const {setSelectedProjects}=useSelectedProjectsValue();
  
  const deleteProject=docId =>{
    firebase
    .firestore()
    .collection('projects')
    .doc(docId)
    .delete()
    .then(()=>{
        dispatch(setProjects([...projects]));
        dispatch(selectedProjects('INBOX'))
  
    })
  }

  return(
    <>
    <span className="sidebar__dot">•</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => dispatch(setShowConfirm(!showConfirm))}
        onKeyDown={(e) => {
          if (e.key === 'Enter') dispatch(setShowConfirm(!showConfirm));
        }}
        tabIndex={0}
        role="button"
        aria-label="Confirm deletion of project"
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure you want to delete this project?</p>
              <button
                type="button"
                onClick={() => deleteProject(project.docId)}
              >
                Delete
              </button>
              <span
                onClick={() => dispatch(setShowConfirm(!showConfirm))}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') dispatch(setShowConfirm(!showConfirm)) ;
                }}
                tabIndex={0}
                role="button"
                aria-label="Cancel adding project, do not delete"
              >
                Cancel
              </span>
            </div>
          </div>
        )}
      </span>
    </>
  )
}
