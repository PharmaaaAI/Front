import React from "react";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-semibold text-center my-8">Sign Up</h1>
      <SignupForm />
    </div>
  );
};

export default SignupPage;