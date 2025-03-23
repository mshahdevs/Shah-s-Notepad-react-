import React from 'react';
import { Button } from './Button';

export const ProjectSidebar = ({
  onAddStartProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl '>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
        Your Notes
      </h2>
      <div>
        <Button
          onClick={onAddStartProject}
          className='px-4 py-2 text-xs md:text-base rounded-xl bg-stone-600 text-stone-400  hover:bg-stone-500 hover:text-stone-100'
        >
          + Add Project
        </Button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => {
          let cssClasses =
            'w-full  text-left px-2 py-1 rounded-[2px] hover:bg-stone-800 text-stone-200 ';
          if (project.id === selectedProjectId) {
            if (project.id === selectedProjectId) {
              console.log('yes done');
            }
            cssClasses += ' bg-stone-500 text-stone-200';
          } else {
            cssClasses += ' text-stone-200 ';
          }

          return (
            <li key={project?.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
