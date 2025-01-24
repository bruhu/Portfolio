import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="bg-blue-600 p-4 shadow-md">
          <ul className="flex space-x-4 text-white">
            <li>
              <a href="/" className="hover:text-gray-200">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-200">About</a>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
