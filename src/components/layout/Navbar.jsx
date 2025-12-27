import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // 1. Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // --- DATA ---
  
  // 1. About Dropdown Data
  const aboutSublinks = [
    { name: "Corporate Profile", path: "/about" },
    { name: "Certificates & Quality", path: "/certificates" },
    { name: "Board of Directors", path: "/directors" },
    { name: "Our History", path: "/history" },
  ];

  // 2. Product Dropdown Data
  const productSublinks = [
    { name: "CSSD Equipment’s", path: "/products/cssd-equipment" },
    { name: "CSSD SS Furniture", path: "/products/cssd-furniture" },
    { name: "Automatic Bed Pan Washer", path: "/products/automatic-bedpan-washer" },
    { name: "Manual Bed Pan Washer", path: "/products/manual-bedpan-washer" },
    { name: "Hospital SS Furniture", path: "/products/hospital-furniture" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "circOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3 border-b border-white/20' 
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* A. LOGO */}
          <Link to="/" className="flex items-center z-50">
             {/* EDIT: 'mix-blend-multiply' class add ki hai jo White Background ko invisible kar degi */}
             <img 
               src="/logo-removebg-preview.png" 
               alt="Vida Life Sciences" 
               className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm mix-blend-multiply" 
             />
          </Link>

          {/* B. DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-2 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-slate-200/50 shadow-sm">
            
            {/* 1. ABOUT DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="relative px-5 py-2 text-sm font-medium text-slate-700 hover:text-sky-700 transition-colors z-10 flex items-center gap-1 group">
                About
                <ChevronDown size={14} className={`transition-transform duration-300 group-hover:text-sky-600 ${activeDropdown === 'about' ? 'rotate-180 text-sky-600' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-64 bg-white shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100 overflow-hidden p-2"
                  >
                    {aboutSublinks.map((link, idx) => (
                      <Link 
                        key={idx} 
                        to={link.path} 
                        className="block px-4 py-3 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-700 rounded-xl transition-all duration-200 font-medium"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. PRODUCT DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('product')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="relative px-5 py-2 text-sm font-medium text-slate-700 hover:text-sky-700 transition-colors z-10 flex items-center gap-1 group">
                Products
                <ChevronDown size={14} className={`transition-transform duration-300 group-hover:text-sky-600 ${activeDropdown === 'product' ? 'rotate-180 text-sky-600' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'product' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-72 bg-white shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100 overflow-hidden p-2"
                  >
                    {productSublinks.map((link, idx) => (
                      <Link 
                        key={idx} 
                        to={link.path} 
                        className="block px-4 py-3 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-700 rounded-xl transition-all duration-200 font-medium border-b border-slate-50 last:border-0"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. CONTACT LINK */}
            <Link 
              to="/contact"
              className="relative px-5 py-2 text-sm font-medium text-slate-700 hover:text-sky-700 transition-colors z-10"
            >
              Contact
            </Link>

          </div>

          {/* C. RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
                to="/contact" 
                className="relative px-6 py-2.5 bg-gradient-to-r from-sky-600 to-blue-600 text-white text-sm font-medium rounded-full hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.5)] transition-all duration-300 flex items-center gap-2 group overflow-hidden"
            >
                <span className="relative z-10">Get in Touch</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out" />
            </Link>
          </div>

          {/* D. MOBILE TOGGLE */}
          <button 
            className="lg:hidden z-50 p-2 text-slate-800 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 overflow-y-auto"
          >
             <div className="flex flex-col gap-6 pb-10">
                
                {/* Mobile About Section */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Company</h3>
                    {aboutSublinks.map((link, idx) => (
                        <Link key={idx} to={link.path} className="text-xl font-semibold text-slate-800 hover:text-sky-600 py-2 border-b border-slate-100">
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Product Section */}
                <div className="flex flex-col gap-2 mt-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Products</h3>
                    {productSublinks.map((link, idx) => (
                        <Link key={idx} to={link.path} className="text-lg font-medium text-slate-700 hover:text-sky-600 py-2 border-b border-slate-100">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Link to="/contact" className="text-xl font-semibold text-slate-800 hover:text-sky-600 py-2">
                    Contact
                </Link>

                {/* Mobile Actions */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 flex flex-col gap-4"
                >
                    <Link to="/contact" className="w-full py-4 bg-sky-600 text-white rounded-xl text-center font-bold text-lg shadow-lg shadow-sky-200">
                        Contact Us Now
                    </Link>
                </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;