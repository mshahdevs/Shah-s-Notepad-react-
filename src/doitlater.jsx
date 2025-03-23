function handleAddTask(text) {  
    const newTask = {  
      text: text,  
      id: Math.random(),  
    };  
  
    setProjectState((prevState) => {  
      const updatedProjects = prevState.projects.map((project) => {  
        if (project.id === prevState.selectedProjectId) {  
          return {  
            ...project,  
            tasks: [newTask, ...project.tasks],  
          };  
        }  
        return project;  
      });  
      localStorage.setItem('projects', JSON.stringify(updatedProjects)); // Save updated projects to local storage  
      return {  
        ...prevState,  
        projects: updatedProjects,  
      };  
    });  
  }  


//   Modify Your Tasks Component:

// When rendering tasks for the selected project, ensure that the Tasks component receives only the relevant tasks.
// Instead of passing all tasks to the Tasks component, filter tasks based on the selected project ID.
// In your App component:

const selectedProject = projectState.projects.find(  
    (project) => project.id === projectState.selectedProjectId  
  );  
  let tasksToShow = selectedProject ? selectedProject.tasks : [];  
  
  let content = (  
    <SelectedProject  
      project={selectedProject}  
      onDeleteProject={handleDeleteProject}  
      onAddTask={handleAddTask} // Here we pass the modified add task function  
      onDeleteTask={handleDeleteTask}  
      tasks={tasksToShow} // Pass filtered tasks to Tasks component  
    />  
  );  

  //Modify Task Deletion:

Similarly, you need to update how tasks are deleted. Instead of operating on a global array of tasks, you’ll need to filter tasks within the selected project.
Update the handleDeleteTask function:

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
      localStorage.setItem('projects', JSON.stringify(updatedProjects)); // Save changes to local storage  
      return {  
        ...prevState,  
        projects: updatedProjects,  
      };  
    });  
  }  


  ///


  import NewTask from './NewTask';  

const Tasks = ({ onAdd, onDelete, tasks }) => {  
  function handleDelete(id) {  
    if (window.confirm('Are you sure to delete this task?')) {  
      onDelete(id);  
    }  
  }  

  return (  
    <section className='w-full flex flex-col items-start'>  
      <h2 className='text-2xl mb-4 font-bold text-stone-700'>Tasks</h2>  
      <NewTask onAdd={onAdd} />  
      {tasks.length === 0 ? (  
        <p className='my-4 text-stone-800'>This assignment does not have any tasks yet.</p>  
      ) : (  
        <ul className='p-4 mt-8 rounded-[4px] w-full bg-stone-100'>  
          {tasks.map((task) => (  
            <li key={task.id} className='flex justify-between my-4'>  
              <span>{task.text}</span>  
              <button  
                onClick={() => handleDelete(task.id)}  
                className='text-stone-700 hover:text-red-500'  
              >  
                Clear  
              </button>  
            </li>  
          ))}  
        </ul>  
      )}  
    </section>  
  );  
}  

export default Tasks;  