import axios from "axios";
import API, { FormDataAPI } from "./todolist.api";

export const createUser = (data) => API.post("/user/register", data);
export const login = (data) => API.post("/user/login", data);
export const logout = () => API.post("/user/logout");
export const logged = () => API.get("/user/me");
export const deleteUser = () => API.delete("/user/me");
export const updateUser = (data) => API.put("/user/me",data);
// export const e = () => API("/user/")
// export const e = () => API("/user/")

const token = localStorage.getItem("token")

export const uploadImage = (avatar) => FormDataAPI.post("user/me/avatar",avatar);
// 'Authorization': 'Bearer '+token,
export const getAvatar = () => API.get(`/user/me/avatar`);
export const deleteAvatar = () => API.delete("/user/me/avatar")
// export const e = () => API("/user/")