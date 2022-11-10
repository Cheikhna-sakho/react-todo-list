import API from "./todolist.api";

export const createUser = (data) => API.post("/user/register",data);
export const login = (data) => API.post("/user/login",data);
export const logout = () => API("/user/logout");
export const logged = () => API("/user/me");
// export const e = () => API("/user/")
// export const e = () => API("/user/")



export const uploadImage = (avatar) => API("/user/me/avatar",avatar);
export const getAvatar = (avatar) => API("/user/me/avatar",avatar);
// export const e = () => API("/user/")