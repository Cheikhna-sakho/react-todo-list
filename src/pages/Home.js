import React, { useEffect, useRef, useState } from 'react'
import { UserDataContext } from '../contexts/UserContext'
import Page from '../template/Page'
import { BsFilter } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";

import { MdAdd } from "react-icons/md";
import { createTask, getAllTask } from '../api/task.api';
import TodoItem from '../components/TodoItem';
import { activeClass, disableClass } from '../utils/activeClass';
const Home = () => {
  const { user } = UserDataContext();
  const [search, setSearch] = useState();

  const [task, setTask] = useState(null);
  const [description, setDescription] = useState(null);
  const inputBox = useRef();

  const addTask = () => {
    createTask({ description })
      .then(res => console.log(res))
      .catch(error => console.log(error));
    disableClass(inputBox);

  }
  useEffect(() => {
    getAllTask()
      .then(res => {
        console.log(res);
        setTask(res.data.data);
      })
  }, [])
  // console.log(user);

  return (
    <Page>
      <div className="home-content grid">
        <div className="top-home grid-col">
          <h2>Ma Liste des Taches</h2>
          <div className="search-bar flex">
            <span><FcSearch /></span> <input type="search" onChange={e => setSearch(e.target.value)} placeholder='chercher une tache' />
          </div>
          <div className="todo-option flex">
            <p className="filter flex"><span><BsFilter /></span> Trier</p>
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
          </div>
        </div>
        <div >
          <ul className="task grid">

            {task && task.map((item) => (
              <TodoItem key={item?._id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </Page>
  )
}

export default Home