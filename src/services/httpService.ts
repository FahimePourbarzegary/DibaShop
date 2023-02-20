import axios from "axios";

axios.defaults.baseURL = "https://restful-api-vercel-main.vercel.app/";
const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
export default http;
