import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { AuthContext } from "../context/AuthContext.jsx";
import { addToCart } from "../rtk/slices/items-slice";
import updateProductFetch from "../utils/updateProductFetch.js";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await login({ email, password });
    if (data.token) {
      const guestCart = JSON.parse(localStorage.getItem("cart"));
      if (guestCart) {
        guestCart.forEach((item) => {
          dispatch(addToCart({ id: item.productID, quantity: item.quantity }));
          updateProductFetch(
            "increaseProduct",
            item.productID,
            data.token,
            data.userId
          );
        });
        localStorage.removeItem("cart");
      }
      navigate("/");
    } else {
      setError(data.message || "Failed to login");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded cursor-pointer"
      >
        Login
      </button>
      <div className="mx-auto mt-2">Don't have an account? <Link className="text-primary" to='/signup'>Register Now!</Link></div>
    </form>
  );
};

export default LoginForm;
