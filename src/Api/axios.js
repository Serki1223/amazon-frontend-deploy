import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-2b0cf/us-central1/api",
  baseURL: "https://api-4xohf7yg6a-uc.a.run.app/",
});


export {axiosInstance}