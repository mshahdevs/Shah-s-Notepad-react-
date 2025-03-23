import { forwardRef } from 'react';
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    'w-full p-1 focus:outline-none border-b-2 resize-none focus:border-stone-600 bg-stone-300 rounded-[2px] border-stone-300';

  return (
    <p className='flex items-start flex-col gap-1 my-4'>
      <label className='uppercase text-sm font-bold text-stone-600' htmlFor=''>
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
