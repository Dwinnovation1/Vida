import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/layout/Preloader';
import ScrollToTop from './components/layout/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Certificates from './pages/Certificates';
import Directors from './pages/Directors';
import History from './pages/History';
import Contact from './pages/Contact';

// Sub-Pages
import DirectorProfileDrYadav from './pages/DirectorProfileDrYadav';

// Product Categories

import WhatsAppBtn from './components/common/WhatsAppBtn';
import CSSDFurniture from './pages/products/CSSDFurniture';
import AutomatedBedPan from './pages/products/AutomatedBedPan';
import ManualBedPan from './pages/products/ManualBedPan';
import HospitalUtility from './pages/products/HospitalUtility';
import Cssdequipment from './pages/products/Cssdequipment';

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
      {/* 1. Preloader (Visible initially) */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. Main Website (Visible after loading) */}
      {!isLoading && (
        <Router>
          <ScrollToTop />
          <div className="App flex flex-col min-h-screen bg-slate-50">
            <Navbar />
            <WhatsAppBtn/>
            <div className="flex-grow">
              <Routes>
                {/* Core Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/directors" element={<Directors />} />
                <Route path="/history" element={<History />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Sub-Pages */}
                <Route path="/directors/dr-onkar-yadav" element={<DirectorProfileDrYadav />} />
                
                {/* Product Routes */}
                <Route path="/products/Cssdequipment" element={<Cssdequipment/>} />
                <Route path="/products/CSSDFurniture" element={< CSSDFurniture/>} />
                <Route path="/products/AutomatedBedPan" element={<AutomatedBedPan />} />
                <Route path="/products/ManualBedPan" element={<ManualBedPan />} />
                <Route path="/products/HospitalUtility" element={<HospitalUtility />} />
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