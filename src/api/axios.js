import axios from "axios";

const api = axios.create({
  baseURL: "https://hrms-lite-backend-ir8x.onrender.com/api/",
});

export default api;
