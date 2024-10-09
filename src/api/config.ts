"use client";

import { AxiosRequestConfig } from "axios";

export const getToken = () => {
  let accessToken = null;
  if (typeof window !== "undefined") {
    accessToken = window.localStorage.getItem("token")?.replace(/['"]+/g, "");
  }

  return accessToken;
};

export const headers: AxiosRequestConfig = {
  headers: {
    Authorization: "Bearer " + getToken(),
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

export const data = {
  grant_type: "client_credentials",
};
