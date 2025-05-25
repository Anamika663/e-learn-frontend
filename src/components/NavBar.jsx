import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    `hover:text-indigo-400 transition-colors duration-200 ${
      isActive(path) ? 'text-indigo-400 font-semibold' : 'text-white'
    }`;

  return (
    <header
      className={`${
        sticky ? 'fixed top-0 bg-black shadow-md' : 'bg-gray-900'
      } w-full z-50 transition-all duration-300`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-white">

        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold">
            📚 E-Learn
          </Link>
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="md:w-64 rounded bg-gray-800 px-3 py-1 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 mx-auto">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link className={linkClasses('/')} to="/">Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link className={linkClasses('/about')} to="/about">About</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link className={linkClasses('/roadmap')} to="/roadmap">Roadmap</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link className={linkClasses('/problemPractice')} to="/problemPractice">Practice</Link>
          </motion.div>
        </nav>

  
        <div className="hidden md:flex items-center gap-4">
          <Link className={linkClasses('/login')} to="/login">Login</Link>
          <Link className={linkClasses('/signup')} to="/signup">Signup</Link>
          <button
            onClick={toggleTheme}
            className="ml-3 px-3 py-1 rounded bg-gray-700 text-sm hover:bg-gray-600"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 pt-2 space-y-3 text-white">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none"
          />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/roadmap">Roadmap</Link>
          <Link to="/playlist">Playlist</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <button onClick={toggleTheme} className="block w-full text-left text-sm text-gray-300 hover:text-white">{theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
        </div>
      )}
    </header>
  );
}
