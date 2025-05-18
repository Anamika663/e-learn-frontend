import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

function LayoutWrapper() {
  const location = useLocation();
  const hideLayout = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      <ScrollToTop />

      {!hideLayout && <NavBar />}

      <main className={`flex flex-col min-h-screen bg-gray-900 text-white ${!hideLayout ? 'pt-[64px]' : ''}`}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<div className="p-6">Home Page</div>} />
          <Route path="/about" element={<div className="p-6">About Page</div>} />
        </Routes>

        {!hideLayout && <div className="flex-grow" />}
      </main>

      {!hideLayout && <Footer />}
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
