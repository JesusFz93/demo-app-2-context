import React, { createContext, useState } from "react";
import { loginSerivce } from "../services/authServices";

export const AuthContext = createContext({});

const initialState = {
  id: null,
  email: null,
  username: null,
  password: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (form) => {
    const data = await loginSerivce(form);
    setAuth({
      id: data.data.id,
      email: data.data.email,
      username: data.data.username,
      password: data.data.password,
    });

    localStorage.setItem("token", data.token);
  };

  return (
    <AuthContext.Provider value={{ auth, login }}>
      {children}
    </AuthContext.Provider>
  );
};
