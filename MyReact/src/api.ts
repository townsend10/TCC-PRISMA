import axios from "axios";

const api = axios.create({
  baseURL: "http://lcaolhost:3000",
});

export default api;