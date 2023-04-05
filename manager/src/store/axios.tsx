import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "",

  withCredentials: true,
});

export default axiosApi;
