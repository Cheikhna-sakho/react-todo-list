import React, { useRef, useState } from 'react'
import { MdAdd } from "react-icons/md";
import { createTask } from '../../api/task.api';
import { activeClass, disableClass } from '../../utils/activeClass';
import { TaskDataContext } from '../../contexts/TaskContext';

const AddTask = () => {
    const { setTask } = TaskDataContext();
    const [description, setDescription] = useState(null);
    const inputBox = useRef();

    const addTask = () => {
        createTask({ description })
            .then(res => {
                setTask(data => [...data, res.data.data]);
                console.log(res)
            }
            )
            .catch(error => console.log(error));
        disableClass(inputBox);
    }
    return (
        <div className="add-todo" >
            <div className="add-title flex" onClick={() => activeClass(inputBox)}>
                <span><MdAdd /></span> Ajouter une tache
            </div>
            <div ref={inputBox} className="add-input-box">
                <p>
                    <input onChange={e => setDescription(e.target.value)} type="text" placeholder='ajouter la description' />
                </p>
                <button onClick={addTask}>
                    ok
                </button>
            </div>
        </div>

    )
}

export default AddTask