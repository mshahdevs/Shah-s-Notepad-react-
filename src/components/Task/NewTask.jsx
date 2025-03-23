import React, { useState } from 'react';

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState();
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === '') {
      return;
    }
    setEnteredTask(' ');
    onAdd(enteredTask);
  }
  return (
    <div className='flex gap-3'>
      <input
        type='text'
        onChange={handleChange}
        value={enteredTask}
        className='p-1 bg-stone-200 my-1 outline-none focus:border-b-[2px] focus:border-stone-500'
        name=''
        id='task'
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
}
