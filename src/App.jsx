import { useState } from 'react';
import './App.css';
import { NewProject } from './components/NewProject';
import { NoProjectSelect } from './components/NoProjectSelect';
import { ProjectSidebar } from './components/ProjectSidebar';
import { SelectedProject } from './components/SelectedProject';

function App() {
  const savedProjects = localStorage.getItem('projects');
  const savedTasks = localStorage.getItem('tasks');
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: savedProjects ? JSON.parse(savedProjects) : [],
  });

  function handleAddTask(text) {
    const newTask = {
      text: text,
      id: Math.random(),
    };

    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === projectState.selectedProjectId) {
          return {
            ...project,
            tasks: [newTask, ...(project.tasks || [])],
          };
        }
        return project;
      });

      // const updateTasks = [newTask, ...prevState.tasks];
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleAddNewProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
      tasks: savedTasks ? JSON.parse(savedTasks) : [],
    };
    setProjectState((prevState) => {
      const updateProjects = [...prevState.projects, newProject];
      localStorage.setItem('projects', JSON.stringify(updateProjects));

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updateProjects,
      };
    });
  }
  function handleSelectId(id) {
    console.log(id);
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== id),
          };
        }
        return project;
      });
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }
  function handleDeleteProject(id) {
    const updateProjects = projectState.projects.filter(
      (project) => project.id !== id
    );
    localStorage.setItem('projects', JSON.stringify(updateProjects));
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: updateProjects,
    }));
  }
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let tasksToShow = selectedProject ? selectedProject.tasks : [];
  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={tasksToShow}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddNewProject}
        onCancelProject={handleCancelProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelect onAddStartProject={handleStartAddProject} />;
  }
  return (
    <>
      <main className='h-screen my-8 flex gap-8'>
        <ProjectSidebar
          onAddStartProject={handleStartAddProject}
          projects={projectState.projects}
          Project={handleSelectId}
          onSelectProject={handleSelectId}
          selectedProjectId={projectState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
