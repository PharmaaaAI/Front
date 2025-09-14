import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { AuthContext } from "../context/AuthContext.jsx";
import { API_BASE_URL } from "../utils/api-url.js";

const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
    <path 
      fill="#4285F4" 
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path 
      fill="#34A853" 
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path 
      fill="#FBBC05" 
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path 
      fill="#EA4335" 
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const GoogleSignInButton = ({ onClick, disabled = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="
        w-full flex items-center justify-center
        bg-white
        border border-gray-300
        rounded-lg
        px-4 py-2.5
        text-sm font-medium text-gray-700
        transition-all duration-200 ease-in-out
        cursor-pointer
        shadow-sm
        hover:bg-gray-50 hover:border-blue-300 hover:shadow-md
        active:bg-gray-100 active:shadow-sm
        disabled:opacity-50 disabled:cursor-not-allowed
        mb-4
      "
    >
      <GoogleIcon />
      Sign in with Google
    </button>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await login({ email, password });
    if (data.token) {
      const guestCart = JSON.parse(localStorage.getItem("cart"));
      if (guestCart) {
        guestCart.forEach((item) => {
          dispatch(addToCart({ id: item.productID, quantity: item.quantity }));
          updateProductFetch(
            "addProduct",
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
    setIsLoading(true);
    setError("");
    
    try {
      const token = await login({ email, password });
      if (token) {
        navigate("/");
      } else {
        setError("Failed to login");
      }
    } catch (err) {
      setError("Failed to login");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError("");
    
    try {
      window.location.href = `${API_BASE_URL}/users/google`;
    } catch (err) {
      setError("Failed to sign in with Google");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter your email"
            required
            disabled={isLoading}
          />
        </div>
        
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter your password"
            required
            disabled={isLoading}
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full p-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Signing in..." : "Login"}
        </button>
        
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <div className="px-4 text-sm text-gray-500">or</div>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        
        <GoogleSignInButton 
          onClick={handleGoogleSignIn} 
          disabled={isLoading}
        />
        
        <div className="text-center mt-4">
          <span className="text-gray-600">Don't have an account? </span>
          <Link className="text-blue-500 hover:text-blue-600 font-medium" to='/signup'>
            Register Now!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;