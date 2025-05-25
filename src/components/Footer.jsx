import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brand / Intro */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">📚 E-Learn</h2>
          <p className="text-sm leading-relaxed">
            Learn from the best, anytime and anywhere.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" aria-label="GitHub"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Legal</h3>
          <ul className="space-y-1">
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:text-white">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <span>© {new Date().getFullYear()} MySite. All rights reserved.</span>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
