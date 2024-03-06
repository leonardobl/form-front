import axios from "axios";

export const ApiUsuarios = axios.create({
  baseURL: process.env.REACT_APP_USUARIOS_API_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

ApiUsuarios.interceptors.request.use(
  (config) => {
    let token;
    if (typeof window !== "undefined") {
      const localToken = sessionStorage.getItem("@token");

      if (localToken) {
        token = localToken.replaceAll('"', "");
      }

      if (token && config.headers !== undefined) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },

  (error) => Promise.reject(error)
);
