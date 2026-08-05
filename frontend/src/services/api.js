import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-job-portal-xx67.onrender.com/api"
});

export default API;