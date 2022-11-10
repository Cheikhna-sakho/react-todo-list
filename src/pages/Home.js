
import Page from '../template/Page'
import TodoItem from '../components/TodoItem';
import HomeTop from '../components/home/HomeTop';
import { TaskDataContext } from '../contexts/TaskContext';
import Pagination from '../components/Pagination';
const Home = () => {
  const { task } = TaskDataContext();

  return (
    <Page>
      <div className="home-content grid">
        <HomeTop />
        <ul className="task grid">
          {task && task.map((item) => (
            <TodoItem key={item?._id} item={item} />
          ))}
        </ul>
        <div >
            <Pagination limit={10}/>
        </div>
      </div>
    </Page>
  )
}

export default Home