import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className='p-3 rounded-xl shadow-md backdrop:bg-stone-700/90 '
    >
      {children}
      <form method='dialog'>
        <button className='px-2 py-1 bg-stone-700 text-stone-200 rounded-xl'>
          Okay
        </button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
