import axios from "axios";

const api = axios.create({
  baseURL: "https://api.icndb.com",
});

export default api;
