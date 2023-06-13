import React from "react";
import axiosApi from "./axios";
import { useDispatch } from "react-redux";

const OnLogout = () => {
  const dispatch = useDispatch();
  axiosApi.interceptors.response.use(
    response => {
      return response;
    },
   error => {
        if (error.response.status == 401) {
            console.log(error.response.data.message);
            console.log('gog');
        }
        console.log(error.response.data.message);
        return error;
    }
  );
  return null;
};

export default OnLogout;
