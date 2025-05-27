import React from 'react';

export default function Roadmap() {
  return (
    <div className="flex min-h-screen">
      
      {/* Side Navbar */}
      <aside className="w-64 bg-gray-800 text-gray-200 p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Roadmap</h2>
        <ul className="space-y-2">
          <li><a href="/roadmap/html" className="hover:text-white">HTML Basics</a></li>
          <li><a href="/roadmap/css" className="hover:text-white">CSS Basics</a></li>
          <li><a href="/roadmap/frontend" className="hover:text-white">frontend web dev</a></li>
          <li><a href="/roadmap/backend" className="hover:text-white">Backend web dev</a></li>
          <li><a href="/roadmap/DSA" className="hover:text-white">DSA</a></li>
          <li><a href="/roadmap/gate" className="hover:text-white">GATE</a></li>
           <li><a href="/roadmap/Webdev" className="hover:text-white">Webdev</a></li>
        </ul>
      </aside>

      <main className="flex-1 bg-gray-900 text-white p-6">
        <section id="html">
          <h2 className="text-2xl font-semibold">HTML Basics</h2>
          <p className="mt-2 text-gray-400">Learn the structure of web pages...</p>
        </section>
        
        <section id="CSS Essentials">
          <h2 className="text-2xl font-semibold">CSS Essentials</h2>
          <p className="mt-2 text-gray-400">Learn the structure of web pages...</p>
        </section>

         <section id="JavaScript">
          <h2 className="text-2xl font-semibold">JavaScript</h2>
          <p className="mt-2 text-gray-400">Learn the structure of web pages...</p>
        </section>

         <section id="React">
          <h2 className="text-2xl font-semibold">React</h2>
          <p className="mt-2 text-gray-400">Learn the structure of web pages...</p>
        </section>
      </main>
    </div>
  );
}
