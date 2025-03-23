import React from 'react';
import { Button } from './Button';

export const NoProjectSelect = ({ onAddStartProject }) => {
  return (
    <div className=' mt-24 w-2/3'>
      <h2 className='text-xl font-bold text-stone-600 my-4'>
        No Project Selected
      </h2>
      <p className='mb-4'>Select a project or get started with new one</p>
      <p className='mt-8'>
        <Button onClick={onAddStartProject}>Create a Project</Button>
      </p>
    </div>
  );
};
