import { API_BASE_URL } from "../utils/api-url";

export const signup = async (userData) => {
  try {
    console.log("Here");
    console.log("userData", {...userData})
    
    const res = await fetch(`${API_BASE_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    console.log("res: ", res)
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("error => ", err);
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
