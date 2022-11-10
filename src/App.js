import { Route, Routes } from 'react-router-dom';
import { TaskContextProvider } from './contexts/TaskContext';
import { UserContextProvider } from './contexts/UserContext';
import routes from './data/routes';

function App() {
  return (
    <UserContextProvider>
      <TaskContextProvider>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Routes>
      </TaskContextProvider>
    </UserContextProvider>
  );
}

export default App;
