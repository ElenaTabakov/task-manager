import React from 'react'
import axios from 'axios';

export const axiosApi = axios.create({
    baseURL: "http://142.93.224.186:3000/",
  
    withCredentials: true,
  });

export default axiosApi;