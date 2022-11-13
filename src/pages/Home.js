
import Page from '../template/Page'
import TodoItem from '../components/TodoItem';
import HomeTop from '../components/home/HomeTop';
import { TaskDataContext } from '../contexts/TaskContext';
import { PageItem } from '../components/Pagination';
// import { useState } from 'react';
import { UserDataContext } from '../contexts/UserContext';
import Register from './Register';
const Home = () => {
  const { task,showTask,setShowTask } = TaskDataContext();
  const { user } = UserDataContext();
  // const [taskShow,setTaskShow] = useState(null);
  // console.log(taskShow);
  return (
    user ? (
      <Page>
        <div className="home-content grid">
          <HomeTop />
          <ul className="task grid">
            {showTask && showTask.map((item) => (
              <TodoItem key={item?._id} item={item} />
            ))}
          </ul>
          <div >
            <PageItem/>
          </div>
        </div>
      </Page>
    ) : <Register />
  )
}

export default Home