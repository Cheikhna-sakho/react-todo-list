import API from "./todolist.api";

export const createTask = (data) => API.post("/task", data);
export const getTask = (id) => API.get("/task/" + id);
export const getAllTask = () => API.get("/task");
export const pngTask = (limit,skip) => API.get(`/task?limit=${limit}&skip=${skip}`);
export const getTaskByComplted = (completed = true) => API.get("/task?completed=" + completed);
export const removeTask = (id) => API.delete("/task/" + id);
export const updateTask = (id, data) => API.put("/task/" + id, data);
// export const e = () => API("/user/")
// export const e = () => API("/user/")