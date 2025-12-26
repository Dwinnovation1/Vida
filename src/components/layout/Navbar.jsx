import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Lock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // 1. Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Dropdown Menu Data
  const aboutSublinks = [
    { name: "Corporate Profile", path: "/about" }, // Changed 'href' to 'path' for clarity
    { name: "Certificates & Quality", path: "/certificates" },
    { name: "Board of Directors", path: "/directors" },
    { name: "Our History", path: "/history" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-slate-200' 
            : 'bg-white py-6 border-b border-slate-100'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* A. LOGO */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer z-50">
            <div className={`w-8 h-8 rounded bg-sky-600 flex items-center justify-center text-white font-bold text-xl`}>
              V
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Vida<span className="text-sky-600">Life</span>
            </span>
          </Link>

          {/* B. DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            
            {/* 1. ABOUT DROPDOWN */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-sky-600 py-4">
                About Us
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>

              {/* The Dropdown Panel */}
              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg border border-slate-100 overflow-hidden"
                  >
                    <div className="py-2">
                      {aboutSublinks.map((link) => (
                        <Link 
                          key={link.name} 
                          to={link.path} // <--- CORRECTED: Using 'to' with 'link.path'
                          onClick={() => setActiveDropdown(null)} // <--- CRITICAL: Closes menu on click
                          className="block px-6 py-3 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Links (Converted to Link for speed) */}
            <Link to="/services" className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors">Services</Link>
            <Link to="/process" className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors">Process</Link>
            <Link to="/contact" className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors">Contact</Link>
          </div>

          {/* C. RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-sky-600">
              <Lock size={14} />
              <span>Client Portal</span>
            </button>
            <Link to="/contact" className="px-5 py-2.5 bg-sky-600 text-white text-sm font-medium rounded-sm hover:bg-sky-700 transition-colors shadow-lg shadow-sky-900/10">
              Get in Touch
            </Link>
          </div>

          {/* D. MOBILE TOGGLE */}
          <button 
            className="lg:hidden z-50 text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;