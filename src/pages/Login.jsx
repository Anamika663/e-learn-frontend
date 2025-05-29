import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../assets/Login.jpg';
import axios from 'axios'



export default function Login() {
   const navigate = useNavigate();
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const handleLogin = async () => {
    const user = {
      email,
      password
    }

    axios.post('http://localhost:8000/api/v1/user/login',user)
    .then((res)=>{

       localStorage.setItem("username",user)
      alert("login successfull")
     
      navigate('/')
    })
    .catch((err)=>{
      alert("Invalid credentials")
      console.log(err);
    })
    }

  return (
    <div className="grid h-screen w-full grid-cols-1 sm:grid-cols-2 bg-gray-800">
      <div className="relative hidden h-full sm:block">
        <img src={loginImg} alt="Login" className="h-full w-full object-cover" />
        <div className="absolute top-1/2 right-4 -translate-y-1/2 text-right text-white">
          <h2 className="text-6xl font-bold">Welcome</h2>
          <p className="mt-2 text-lg">Log in to continue...</p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="mx-auto w-full max-w-[400px] rounded-lg bg-gray-900 p-8 shadow-md shadow-indigo-800/20">
          <h2 className="mb-6 text-center text-4xl font-bold text-white">Login</h2>

          <div className="flex flex-col py-2 text-gray-300">
            <label>Email</label>
            <input
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              type="email"
              placeholder="Enter your email"
              className="mt-2 rounded-lg bg-gray-700 p-2 text-white focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col py-2 text-gray-300">
            <label>Password</label>
            <input
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              // type="password"
              placeholder="Enter your password"
              className="mt-2 rounded-lg bg-gray-700 p-2 text-white focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-between py-2 text-gray-400 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember Me
            </label>
            <button type="button" className="text-indigo-400 underline hover:text-indigo-300">
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="my-5 w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white hover:bg-indigo-700 transition duration-200"
            onClick={handleLogin}
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-400">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-indigo-400 underline hover:text-indigo-300 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
