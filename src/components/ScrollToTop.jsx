import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Whenever the route (pathname) changes, this tiny component
 * scrolls the viewport back to the top-left corner (0, 0).
 * Because it returns `null`, it renders nothing on screen
 * but still runs its side-effect every navigation.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();   // current route

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    //  ↓ If you prefer smooth scrolling, swap the previous line with:
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);                        // run after every route change

  return null;                           // no visual output
}
