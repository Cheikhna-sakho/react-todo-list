import { createContext, useContext, useEffect, useState } from "react";
import { getAllTask, getTaskByComplted } from "../api/task.api";

const TaskContext = createContext(null);
export const TaskContextProvider = ({ children }) => {
    const [task, setTask] = useState(null);
    const [taskCompleted, setTaskCompleted] = useState(null);
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState(null);
    const filterByDate = () => {
        const dataByDate = task?.sort((a, b) => (new Date(a?.createdAt).getTime()) > (new Date(b?.createdAt).getTime()) ? -1 : 1);
        setTask([...dataByDate]);

    }

    const filterByDesc = () => {
        const dataByDesc = task?.sort((a, b) => a?.description.toLowerCase() < b?.description.toLowerCase() ? -1 : 1);
        setTask([...dataByDesc]);
    }

    useEffect(() => {
        getAllTask()
            .then(res => {
                console.log(res);
                setTask(res.data.data);
            })
    }, []);
    useEffect(() => {
        task && setCount(task.length);
    }, [task])
    useEffect(() => {
        (async () => {
            try {
                if (taskCompleted != null && taskCompleted !== "null") {
                    const res = await getTaskByComplted(taskCompleted);
                    setTask(res.data.data);

                } else {
                    const res = await getAllTask();
                    setTask(res.data.data);
                }
            } catch (error) {
                console.log(error);
            }

        })()

    }, [taskCompleted]);
    useEffect(() => {
        (async () => {
            try {
                if (search) {
                    setTask(data => data.filter(todo => {
                        return todo?.description.toLowerCase().includes(search.toLowerCase());
                    }));

                } else if (search === "") {
                    const res = await getAllTask();
                    setTask(res.data.data);
                }
            } catch (error) {
                console.log(error);
            }

        })()
    }, [search]);
    const data = {
        taskDataContext: { task, setTask,count },
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