import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-semibold text-center my-8">Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;