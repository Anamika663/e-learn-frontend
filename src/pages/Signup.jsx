import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8 shadow-md shadow-indigo-800/20">
        <h2 className="text-4xl text-white font-bold text-center mb-6">Sign Up</h2>

        <div className="flex flex-col text-gray-300 py-2">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            className="mt-2 p-2 rounded-lg bg-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col text-gray-300 py-2">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="mt-2 p-2 rounded-lg bg-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col text-gray-300 py-2">
          <label>Password</label>
          <input
            type="password"
            placeholder="Create password"
            className="mt-2 p-2 rounded-lg bg-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col text-gray-300 py-2">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="mt-2 p-2 rounded-lg bg-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <button className="w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200">
          Sign Up
        </button>

        <p className="text-gray-400 text-sm text-center">
          Already have an account?{' '}
          <Link to="/" className="text-indigo-400 hover:text-indigo-300 underline font-medium">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
