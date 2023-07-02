// ✨ implement axiosWithAuth
import React from "react";
import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      authorization: token,
    },
  });
};
