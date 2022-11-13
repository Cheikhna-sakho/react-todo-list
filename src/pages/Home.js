
import Page from '../template/Page'
import TodoItem from '../components/TodoItem';
import HomeTop from '../components/home/HomeTop';
import { TaskDataContext } from '../contexts/TaskContext';
import { PageItem } from '../components/Pagination';

import { UserDataContext } from '../contexts/UserContext';
import Register from './Register';
const Home = () => {
  const { showTask } = TaskDataContext();
  const { user } = UserDataContext();

  return (
    user ? (
      <Page>
        <div className="home-content grid">
          <HomeTop />
          <ul className="task grid">
            {showTask && showTask.map((item) => (
              <TodoItem key={item?._id} item={item} />
            ))}
            {showTask?.length == 0  && <p style={{textAlign:"center"}}>Aucune tache</p>}
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