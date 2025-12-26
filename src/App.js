import React, { useState, useEffect } from 'react'; // Add useState, useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence

// Layouts
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/layout/Preloader'; // Import Preloader

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Certificates from './pages/Certificates';
import Directors from './pages/Directors';
import History from './pages/History';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Optional: Scroll to top when loading starts
  useEffect(() => {
    if (isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  return (
    <>
      {/* 1. The Preloader Wrapper (Handles Exit Animation) */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. The Main Website (Visible but covered initially) */}
      {!isLoading && (
        <Router>
          <div className="App flex flex-col min-h-screen bg-slate-50">
            <Navbar />

            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/directors" element={<Directors />} />
                <Route path="/history" element={<History />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;