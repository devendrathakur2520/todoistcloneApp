import React, { createContext, useContext } from 'react'
import { useSelector } from 'react-redux';

export const SelectedProjectsContext = createContext();
export const SelectedProjectsProvider = ({ children }) => {
  const setSelectedprojects = useSelector((state) => state.SelectedProjects.selectedprojects)
  return (
    <SelectedProjectsContext.Provider value={{ setSelectedprojects }}>
      {children}
    </SelectedProjectsContext.Provider>
  )
};

export const useSelectedProjectsValue = () => useContext(SelectedProjectsContext)