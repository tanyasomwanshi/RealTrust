import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Newsletter from './components/Newsletter';
import AdminPanel from './pages/AdminPanel';

// Simple Landing Page layout
const LandingPage = () => (
  <div>
    <nav className="bg-primary p-4 text-white flex justify-between items-center">
      <div className="font-bold text-xl">RealTrust</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/admin" className="bg-white text-primary px-3 py-1 rounded font-bold">Admin</Link>
      </div>
    </nav>
    <Hero />
    <Projects />
    <Clients />
    <Newsletter />
    <footer className="bg-dark text-white p-8 text-center">
      &copy; 2025 Real Estate Project. All rights reserved.
    </footer>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;