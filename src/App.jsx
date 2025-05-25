import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import ProblemPractice from './pages/ProblemPractice';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dsa from './roadmapPages/Dsa';
import Fronendwebdev from './roadmapPages/fronendwebdev';
import Backendwebdev from './roadmapPages/backendwebdev';
import Html from './roadmapPages/html';
import CSS from './roadmapPages/CSS';
import DSA from './PPpages/Dsa';
import Sql from './PPpages/Sql.';


// Component to wrap and conditionally render layout
function LayoutWrapper() {
  const location = useLocation();
  const hideLayout = location.pathname === '/' || location.pathname === '/about' || location.pathname === '/roadmap' || location.pathname === '/problemPractice';

  return (
    <>
      <ScrollToTop />

      {hideLayout && <NavBar />}

      <main className={`pt-[64px] min-h-screen bg-gray-900 text-white`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/problemPractice" element={<ProblemPractice />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
             {/* Roadmap Routes */}

            <Route path="/roadmap/html" element={<Html />} />
            <Route path="/roadmap/css" element={<CSS />} />
            <Route path="/roadmap/DSA" element={<Dsa />} />
            <Route path="/roadmap/fronend" element={<Fronendwebdev/>} />
            <Route path="/roadmap/backend" element={<Backendwebdev />} />

            {/* Practice Problem Routes */}

            <Route path="/problems/DSA" element={<DSA />} />
            <Route path="/problems/SQL" element={<Sql />} />
          
            


          </Routes>
        </AnimatePresence>
      </main>

      {hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}
