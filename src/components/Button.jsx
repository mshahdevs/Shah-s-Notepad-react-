import React from 'react';

export const Button = ({ children, ...props }) => {
  return (
    <button
      className='px-4 py-2 text-xs md:text-base rounded-xl bg-stone-700 text-stone-100 hover:bg-stone-95000 hover:text-stone-100'
      {...props}
    >
      {children}
    </button>
  );
};
