import React from 'react';
import { motion } from 'framer-motion';
import HomeImg from '../assets/Home.jpg';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -40,
  },
};

const pageTransition = {
  duration: 0.6,
  ease: 'easeInOut',
};

export default function Home() {
  return (
    <motion.div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-800 px-6 py-12 gap-8"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Welcome to <span className="text-indigo-500">E-Learn</span>
        </h1>

        <p className="text-lg text-gray-400 mb-6">
          A smarter way to learn technology — roadmaps, playlists, practice, and hands-on knowledge.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition duration-300">
          Get Started
        </button>
      </motion.div>

      <motion.div
        className="md:w-1/2"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src={HomeImg}
          alt="Home"
          className="w-full max-w-md mx-auto rounded-xl shadow-xl"
        />
      </motion.div>
    </motion.div>
  );
}
