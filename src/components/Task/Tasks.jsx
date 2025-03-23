import NewTask from './NewTask';

const Tasks = ({ onAdd, onDelete, tasks }) => {
  function handleDelete(id) {
    if (window.confirm('Are you sure to delete this task?')) {
      onDelete(id);
    }
  }
  console.log('tasks', tasks);
  return (
    <>
      <section className='w-full flex flex-col items-start'>
        <h2 className='text-2xl mb-4 font-bold text-stone-700'>Tasks</h2>
        <NewTask onAdd={onAdd} />
        {tasks.length === 0 && (
          <p className='my-4 text-stone-800'>
            This assignment does not have any tasks yet.
          </p>
        )}
        {tasks.length > 0 && (
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
    </>
  );
};
export default Tasks;
