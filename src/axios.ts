import axios from "axios";

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: "https://vote.encoder-test-vpn.space/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
