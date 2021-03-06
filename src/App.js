import { React } from 'react'
import { Content } from './components/layout/Content';
import Header from './components/layout/Header';
import { ProjectsProvider, SelectedProjectsProvider } from './context';
export const App = () => (
  <SelectedProjectsProvider>
    <ProjectsProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ProjectsProvider>
  </SelectedProjectsProvider>
);


