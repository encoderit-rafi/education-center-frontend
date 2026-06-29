import axios from "axios";
import { API_BASE_URL } from "./consts";


// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
