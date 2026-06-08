import axios from "axios";

const API = axios.create({
  baseURL: "https://mini-social-app-oh75.onrender.com/api"
});

export default API;