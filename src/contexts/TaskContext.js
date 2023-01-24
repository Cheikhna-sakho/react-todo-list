import { createContext, useContext, useEffect, useState } from "react";
import { getAllTask, getTaskByComplted } from "../api/task.api";
import { TokenDataContext } from "./UserContext";

const TaskContext = createContext(null);
export const TaskContextProvider = ({ children }) => {
    const [task, setTask] = useState(null);
    const [showTask, setShowTask] = useState(null);
    const [taskCompleted, setTaskCompleted] = useState(null);
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState(null);
    //ajout hors temps donner
    const { token } = TokenDataContext();

    const filterByDate = () => {
        const dataByDate = task?.sort((a, b) => (new Date(a?.createdAt).getTime()) > (new Date(b?.createdAt).getTime()) ? -1 : 1);
        setTask([...dataByDate]);

    }

    const filterByDesc = () => {
        const dataByDesc = task?.sort((a, b) => a?.description.toLowerCase() < b?.description.toLowerCase() ? -1 : 1);
        setTask([...dataByDesc]);
    }

    useEffect(() => {
        //ajout de token pour le fetch data
        token && getAllTask()
            .then(res => {

                setTask(res.data.data);
            })
    }, [token]);
    useEffect(() => {

        task && setCount(task.length);
        // task && setShowTask(task)
    }, [task]);

    useEffect(() => {
        const filterTaskByCompleted = async () => {
            try {
                if (taskCompleted != null && taskCompleted !== "null") {
                    const res = await getTaskByComplted(taskCompleted);
                    console.log(res.data);
                    setTask(res.data.data);
                } else {
                    const res = await getAllTask();
                    setTask(res.data.data);
                }
            } catch (error) {
                console.log(error);
            }

        }
        filterTaskByCompleted();
    }, [taskCompleted]);
    useEffect(() => {
        const searchTaskByDescription = async () => {
            try {
                if (search) {
                    setShowTask(task.filter(todo => {
                        return todo?.description.toLowerCase().includes(search.toLowerCase());
                    }));

                } else if (search === "") {
                    setShowTask(task);
                }
            } catch (error) {
                console.log(error);
            }
        }
        searchTaskByDescription();
    }, [search, task]);

    const data = {
        taskDataContext: { task, setTask, count, showTask, setShowTask },
        taskCompletedDataContext: { taskCompleted, setTaskCompleted },
        searchDataContext: { search, setSearch },
        filterDataContext: { filterByDate, filterByDesc }
    }

    return (
        <TaskContext.Provider value={data}>
            {children}
        </TaskContext.Provider>
    )
}
export default TaskContext;
export const TaskUseContext = () => {
    const task = useContext(TaskContext);
    return task;
}
export const TaskDataContext = () => {
    const { taskDataContext } = TaskUseContext();
    return taskDataContext;
}
export const TaskCompletedDataContext = () => {
    const { taskCompletedDataContext } = TaskUseContext();
    return taskCompletedDataContext;
}
export const SearchDataContext = () => {
    const { searchDataContext } = TaskUseContext();
    return searchDataContext;
}
export const FilterDataContext = () => {
    const { filterDataContext } = TaskUseContext();
    return filterDataContext;
}