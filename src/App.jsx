import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';   // ⬅️ add this line
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login  from './components/Login';
import Signup from './components/Signup';

export default function App() {
  return (
    <BrowserRouter>
      {/* ───────── Ensures every new page loads at the top ───────── */}
      <ScrollToTop />

      {/* ───────── Global Navigation ───────── */}
      <NavBar />

      {/* ───────── Main Content ───────── */}
      <main className="pt-[64px] flex flex-col min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/login"   element={<Login   />} />
          <Route path="/signup"  element={<Signup  />} />
        </Routes>

        {/* pushes footer down on short pages */}
        <div className="flex-grow" />
      </main>

      {/* ───────── Footer ───────── */}
      <Footer />
    </BrowserRouter>
  );
}
