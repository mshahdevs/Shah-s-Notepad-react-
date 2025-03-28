import React from 'react';
import Tasks from './Task/Tasks';
import { AiOutlineDelete } from 'react-icons/ai';
export const SelectedProject = ({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <div className='w-[35%] '>
      <header className='w-full flex justify-between flex-col'>
        <div className=' flex justify-between'>
          <h2 className='font-medium text-xl'>{project?.title}</h2>

          <button
            className='text-red-600 shadow-md rounded-xl p-1'
            onClick={() => onDeleteProject(project?.id)}
          >
            <AiOutlineDelete size={23} />
          </button>
        </div>
        <span className='text-left text-gray-400 text-sm my-2'>
          {formattedDate}
        </span>
        <p className='text-left text-sm text-stone-700'>
          {project?.description}
        </p>
      </header>
      <div className='w-full h-[1px] my-2 bg-stone-400'></div>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
};
