import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Linkedin, Facebook, 
  ArrowRight, Activity, Package // ShieldCheck hata diya gaya hai
} from 'lucide-react';

const Footer = () => {
  
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 overflow-hidden pt-20 pb-10">
      
      {/* --- 1. THE "STERILE SCAN" BORDER ANIMATION --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-800">
        <motion.div 
          className="h-[2px] w-32 bg-gradient-to-r from-transparent via-sky-500 to-transparent absolute top-0"
          animate={{ left: ["-10%", "110%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* --- 2. BACKGROUND DECORATION --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: BRAND & STATUS */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img 
                src="/logo-removebg-preview.png" 
                alt="Vida Life Sciences" 
                className="h-12 w-auto object-contain mix-blend-screen drop-shadow-md" 
              />
            </Link>
            <p className="text-slate-500 leading-relaxed mb-8 text-sm">
              Precision-engineered CSSD solutions and medical sterilization systems. 
              Partnering with 300+ institutions to ensure patient safety through certified technology.
            </p>
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider">
                Systems Operational
              </span>
            </div>
          </motion.div>

          {/* COLUMN 2: NAVIGATION */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <Activity size={18} className="text-sky-600" /> Navigation
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Corporate Profile", path: "/about" },
                { name: "Our Products", path: "/products/cssd-equipment" },
                { name: "Board of Directors", path: "/directors" },
                { name: "Contact Us", path: "/contact" }
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center gap-2 hover:text-sky-500 transition-colors duration-300"
                  >
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sky-500" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: PRODUCTS LIST */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <Package size={18} className="text-sky-600" /> Product Range
            </h3>
            <ul className="space-y-4">
              {[
                { name: "CSSD Equipment’s", path: "/products/cssd-equipment" },
                { name: "CSSD SS Furniture", path: "/products/cssd-furniture" },
                { name: "Automatic Bed Pan Washer", path: "/products/automatic-bedpan-washer" },
                { name: "Manual Bed Pan Washer", path: "/products/manual-bedpan-washer" },
                { name: "Hospital SS Furniture", path: "/products/hospital-furniture" }
              ].map((prod, i) => (
                <li key={i}>
                  <Link 
                    to={prod.path} 
                    className="group flex items-center gap-2 hover:text-sky-500 transition-colors duration-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-500 transition-colors shrink-0"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{prod.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 4: CONTACT */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-sky-600 shrink-0" size={20} />
                <span className="text-sm leading-relaxed">
                  
                  
                  Office Address - Bunglow No.4, 2nd Floor, 'Shriyash', Attrey Society, Gokhalenagar Road Opp. Hotel Sapna, Maharashtra 411016
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-sky-600 shrink-0" size={20} />
                <span className="text-sm hover:text-white cursor-pointer transition-colors">+91 9689491632</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-sky-600 shrink-0" size={20} />
                <span className="text-sm hover:text-white cursor-pointer transition-colors">info@vidalife.com</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* COPYRIGHT SECTION */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-xs text-slate-600">
            <span>&copy; {new Date().getFullYear()} Vida Life Sciences Pvt. Ltd. All rights reserved.</span>
            <span className="hidden md:block text-slate-800">|</span>
            <span className="flex items-center gap-1">
               Designed by <span className="font-bold text-sky-600 cursor-pointer hover:text-white transition-colors">DW Innovation Pvt. Ltd</span>
            </span>
          </div>
          
          <div className="flex gap-6">
            <button className="p-2 bg-slate-900 rounded-lg hover:bg-sky-600 hover:text-white transition-all duration-300">
              <Linkedin size={18} />
            </button>
            <button className="p-2 bg-slate-900 rounded-lg hover:bg-sky-600 hover:text-white transition-all duration-300">
              <Facebook size={18} />
            </button>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default Footer;