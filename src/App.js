import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <div className="overflow-hidden">
        {/* Navigation */}
        <nav className="bg-blue-600 p-4 fixed top-0 left-0 right-0 z-10 shadow-md">
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="#home" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="#about" className="hover:text-gray-200">
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main content with scrolling sections */}
        <div className="scroll-smooth">
          <div id="home" className="h-screen flex items-center justify-center bg-gray-100">
            <Home />
          </div>

          <div id="about" className="h-screen flex items-center justify-center bg-gray-200">
            <About />
          </div>
        </div>

        {/* Not Found page (optional) */}
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
