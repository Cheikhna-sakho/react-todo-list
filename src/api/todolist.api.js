import axios from "axios";

const interceptorsToken = (req) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
        // console.log("yes token", token);
        req.headers.Authorization = `Bearer ${token}`
    };
    return req;
}
const baseURL = "https://api-nodejs-todolist.herokuapp.com"
const API = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },

})
export const FormDataAPI = axios.create({
    baseURL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
})
FormDataAPI.interceptors.request.use(interceptorsToken)
API.interceptors.request.use(interceptorsToken);
export default API;