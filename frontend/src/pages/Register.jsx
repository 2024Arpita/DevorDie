import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const[name, setName]=useState("");

  const submitHandle=(event)=>{
      event.preventDefault(); //page reload na ho
      // make API call to login user
      // handle success or failure
      console.log(name,email, password);
    }
  return (
    <div className="flex items-center justify-center h-screen  max-h-screen">
      <div className="bg-black text-white p-8 rounded-lg shadow-lg  max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Register To tunes
        </h2>
        <form className="mt-7" onSubmit={submitHandle}>
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="auth-input"
              value={name}
              onChange={(event)=>setName(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Email or Username
            </label>
            <input
              type="email"
              placeholder="Email or Username"
              className="auth-input"
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              required
            />
          </div>
          <button className="auth-btn">Register</button>
        </form>
        <div className="text-center mt-7">
          <Link
            to="/login"
            className="text-sm text-gray-500 hover:text-gray-400"
          >
            Already have an Account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
