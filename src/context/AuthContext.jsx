import React, { createContext, useState, useEffect } from "react";
import { isTokenValid } from "../utils/isTokenValid";
import { login as loginApi, signup as signupApi } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token && isTokenValid(token)) {
      // You might want to fetch user data from the backend here
      // For now, we'll just set a placeholder
      setUser({ token });
    } else {
      setUser(null);
    }
  }, [token]);

  const login = async (credentials) => {
    let token;
    if(credentials.email && credentials.password)
    {
      const data = await loginApi(credentials);
      token = data.token
    }
    else
    {
      token = credentials.token
    }

    if (token) {
      localStorage.setItem("token", token);
      setToken(token);
      setUser({ token: token });
    }
    return token;
  };

  const signup = async (userData) => {
    const data = await signupApi(userData);
    if (data.data && data.data.token) {
      localStorage.setItem("token", data.data.token);
      setToken(data.data.token);
      setUser({ token: data.data.token });
    }
    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};