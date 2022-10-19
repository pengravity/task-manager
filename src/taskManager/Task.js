import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { MdDone } from 'react-icons/md';

const Task = () => {
  return (
    <div className='task'>
      <span>
        <p>
          <b>Task: </b> Task one
        </p>
        <p>
          <b>Date: </b> 21/4/2022
        </p>
      </span>
      <span>
        <button>
          <AiFillEdit color='blue' size={20} />
        </button>
        <button>
          <RiDeleteBin5Fill color='red' size={20} />
        </button>
        <button>
          <MdDone color='green' size={20} />
        </button>
      </span>
    </div>
  );
};

export default Task;
