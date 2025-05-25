import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../assets/Login.jpg';

export default function Login() {
  return (
    <div className="grid h-screen w-full grid-cols-1 sm:grid-cols-2">
      <div className="relative hidden h-full sm:block">
        <img src={loginImg} alt="Login" className="h-full w-full object-cover" />

        <div className="absolute top-1/2 right-4 -translate-y-1/2 text-right text-white">
          <h2 className="text-6xl font-bold">Welcome</h2>
          <p className="mt-2 text-lg">Log in to continue...</p>
        </div>
      </div>

      <div className="flex flex-col justify-center bg-gray-800">
        <form className="mx-auto w-full max-w-[400px] rounded-lg bg-gray-900 p-8">
          <h2 className="mb-6 text-center text-4xl font-bold text-white">Login</h2>

          <div className="flex flex-col py-2 text-gray-400">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>

          <div className="flex flex-col py-2 text-gray-400">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-2 rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>

          <div className="flex justify-between py-2 text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember Me
            </label>
            <button type="button" className="font-medium text-teal-400 underline hover:text-teal-300">
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="my-5 w-full rounded-lg bg-teal-500 py-2 font-semibold text-white shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-400">
            Don’t have an account?{' '}
            <Link to="/signup" className="font-medium text-teal-400 underline hover:text-teal-300">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
} 