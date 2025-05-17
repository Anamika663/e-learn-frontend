import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile dropdown on any route change
  useEffect(() => setOpen(false), [location]);

  // Stick after first scroll pixel
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`${
        sticky ? 'fixed top-0 bg-black shadow-md' : 'bg-gray-900'
      } w-full z-50 transition-all duration-300`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-white">
        <Link to="/" className="text-2xl font-bold">
          🌐 MySite
        </Link>

        {/* ---------- SEARCH BAR (desktop) ---------- */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className= "flex-1 md:w-72 rounded bg-gray-800 px-3 py-1 text-sm placefolder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        
          />
        </div>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link className="hover:text-gray-300" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-300" to="/about">
            About
          </Link>
          <Link className="hover:text-gray-300" to="/login">
            Login
          </Link>
          <Link className="hover:text-gray-300" to="/signup">
            Signup
          </Link>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 pt-2 space-y-3 text-white">
          {/* Search in mobile dropdown */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2
                       text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none"
          />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </header>
  );
}
