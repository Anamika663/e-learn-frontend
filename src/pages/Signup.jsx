import axios from 'axios';
import React, { use, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const[email,setEmail] = useState("");
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("");
  const[confpass,setconfPass] = useState("");

  const navigate = useNavigate();

  const login =  (email,password)=>{
    const user = {
      email,
      password
    }

    axios.post('http://localhost:8000/api/v1/user/login',user)
    .then((e)=>{
       navigate('/')
       localStorage.setItem('user',user)
    })
    .catch((e)=>{
      alert("user is registered but not fail to login")
    })
  }

  const handleSignup = ()=>{
    if(confpass !== password){
    alert("password and confirmPassword does not match");
    console.log("please Enter the same password");
  }

    const user = {
      email,
      username,
      password,
    }
    const user1 = {
      email,
      password
    }
     axios.post('http://localhost:8000/api/v1/user/register',user)
     .then((res)=>{
        console.log(res);
        login(email,password)
     })
     .catch((err)=>{
        alert("user with username or emial already exist")
        console.log(err);
     })
  }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8 shadow-md shadow-indigo-800/20">
        <h2 className="text-4xl text-white font-bold text-center mb-6">Sign Up</h2>

        <div className="flex flex-col text-gray-300 py-2">
          <label>Username</label>
          <input
             onChange={(e)=>{
              setUsername(e.target.value)
             }}
            type="text"
            placeholder="Enter username"
            className="mt-2 p-2 rounded-lg bg-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col text-gray-300 py-2">
          <label>Email</label>
          <input
             onChange={(e)=>{
               setEmail(e.target.value);
             }}
            type="email"
            placeholder="Enter email"
            className="mt-2 p-2 rounded-lg bg-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col text-gray-300 py-2">
          <label>Password</label>
          <input
            onChange={(e)=>{
               setPassword(e.target.value);
             }}
            type="password"
            placeholder="Create password"
            className="mt-2 p-2 rounded-lg bg-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col text-gray-300 py-2">
          <label>Confirm Password</label>
          <input
             
             onChange={(e)=>{
               setconfPass(e.target.value);
             }}

            type="password"
            placeholder="Confirm password"
            className="mt-2 p-2 rounded-lg bg-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <button 
         onClick={handleSignup}
        className="w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200">
          Sign Up
        </button>

        <p className="text-gray-400 text-sm text-center">
          Already have an account?{' '}
          <Link to="/" className="text-indigo-400 hover:text-indigo-300 underline font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
