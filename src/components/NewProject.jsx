import React, { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export const NewProject = ({ onAdd, onCancelProject }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();
  function handleSave() {
    const enterTitle = title.current.value;
    const enterDescription = description.current.value;
    const enterDuedate = dueDate.current.value;

    if (
      enterTitle.trim() === '' ||
      enterDescription.trim() === '' ||
      enterDuedate.trim() === ''
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enterTitle,
      description: enterDescription,
      dueDate: enterDuedate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className='text-stone-700 my-3 font-semibold text-xl'>
          Invalid Input
        </h2>
        <p className=' text-sm mb-2'>
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className=' text-sm mb-4'>
          Please make sure to enter a valid value.
        </p>
      </Modal>
      <div className='w-[35rem] mt-16 '>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button
              className='text-stone-800 hover:text-stone-950'
              onClick={onCancelProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className='bg-stone-800 px-2 py-1 rounded-xl text-stone-50 hover:bg-stone-950'
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} type='text' label='Title' />
          <Input ref={description} label='Description' textarea />
          <Input type='date' ref={dueDate} label='Due Date' />
        </div>
      </div>
    </>
  );
};
