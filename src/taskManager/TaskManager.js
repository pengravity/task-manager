import { useState } from 'react';

import Task from './Task';
import './TaskManager.css';

const TaskManager = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, date);
  };

  return (
    <div className='--bg-primary '>
      <h1 className='--text-center --text-light'>Task Manager</h1>
      <div className='--flex-center --p'>
        <div className='--card -bg-light --width-500px --p --flex-center'>
          <form onSubmit={handleSubmit} className='form --form-control'>
            <div>
              <label htmlFor='name'>Task:</label>
              <input
                type='text'
                placeholder='Task name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='date'>Date:</label>
              <input
                type='date'
                placeholder='Task name'
                name='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button className='--btn --btn-success --btn-block'>Save</button>
          </form>{' '}
        </div>
      </div>
      {/* Display task */}
      <article className='--flex-center --my2'>
        <div className='--width-500px --p'>
          <h2 className='--text-light'>Task List</h2>
          <hr style={{ background: '#fff' }} />
          <Task />
        </div>
      </article>
    </div>
  );
};

export default TaskManager;
