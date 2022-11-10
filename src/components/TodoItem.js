import React, { useRef, useState } from 'react'
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { BsPencilSquare } from "react-icons/bs";
// import { TiDelete } from "react-icons/ti";
import { FcCancel } from "react-icons/fc";
import { IoTrashBin } from "react-icons/io5";
import { removeTask, updateTask } from '../api/task.api';
import { activeClass, disableClass } from '../utils/activeClass';
import { TaskDataContext } from '../contexts/TaskContext';
const TodoItem = ({ item }) => {
  const { description = "", completed = "", _id = "" } = item;
  const [checked,setChecked] = useState(completed);
  const { task, setTask } = TaskDataContext();
  const taskIndex = task.indexOf(item);
  const [upTask, setUpTask] = useState(description);
  const modify = useRef(null);
  const completedTask = () => {
    setChecked(!checked);
    if (!completed) {
      onUpdateTask({ completed: true })
      return;
    }
    return onUpdateTask({ completed: false });
  }
  const deleteTask = async (id) => {

    try {
      delete task[taskIndex];
      setTask(taskData => [...taskData.filter(todo => todo && todo)]);
      await removeTask(id);
    } catch (error) {
      console.log(error);
    }
  }
  const onUpdateTask = async (data) => {
    try {
      await updateTask(_id, data);
      if (data?.description) {
        task[taskIndex].description = data.description;
        setTask(taskData => [...taskData.filter(todo => todo && todo)]);
      }
    } catch (error) {
      console.log(error);
    }


  }
  return (
    <li className='todo-item grid'>
      <div className="desc-task flex">
        <p className='flex'>
          <span onClick={completedTask}>
            {checked ? <ImCheckboxChecked color='green' /> : <ImCheckboxUnchecked />}
          </span>
          {description}
        </p>
        <p className='flex'>
          <span onClick={deleteTask}><IoTrashBin color='red' /></span>
          <span onClick={() => activeClass(modify)}>
            <BsPencilSquare color='blue' />
          </span>
        </p>
      </div>
      <div ref={modify} className="task-modify flex">
        <span onClick={() => disableClass(modify)}>
          <FcCancel width={"10"} />
        </span>
        <input type="text" onChange={e => setUpTask(e.target.value)} value={upTask} />
        <button onClick={() => { onUpdateTask({ description: upTask }); disableClass(modify) }}>
          modifier
        </button>
      </div>
    </li>
  )
}

export default TodoItem