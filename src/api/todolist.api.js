import axios from "axios";

const API = axios.create({
    baseURL:"https://api-nodejs-todolist.herokuapp.com",
    headers: {
        "Content-Type": "application/json",
    },
})
API.interceptors.request.use((req) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
        // console.log("yes token", token);
        req.headers.Authorization = `Bearer ${token}`
    };
    return req;
});
export default API;