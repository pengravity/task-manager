import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { MdDone } from 'react-icons/md';

const Task = ({ name, date, id, complete }) => {
  return (
    <div key={id} className={complete ? 'task complete' : 'task'}>
      <span>
        <p>
          <b>Task: </b> {name}
        </p>
        <p>
          <b>Date: </b> {date}
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
