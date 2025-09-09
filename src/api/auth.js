import { API_BASE_URL } from "../utils/api-url";

export const signup = async (userData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return { message: "Server error" };
  }
};

export const login = async (credentials) => {
  try {
    const res = await fetch(`${API_BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return { message: "Server error" };
  }
};
