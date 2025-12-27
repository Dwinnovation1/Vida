import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (2.5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 1200); // Wait for exit animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center">
      <AnimatePresence mode="wait">
        
        {loading ? (
          /* --- PHASE 1: LOADING CONTENT --- */
          <motion.div
            key="loader"
            className="absolute inset-0 bg-white flex flex-col items-center justify-center z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background Grid (Very subtle slate) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-60"></div>

            <div className="relative z-10 flex flex-col items-center">
               
               {/* Pulsing Glow Container (Red Glow for 'Life') */}
               <div className="relative mb-8">
                 {/* Ripple Circles - Red/Rose tint */}
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.05, 0.2] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute inset-0 -m-8 bg-red-500/10 rounded-full blur-2xl"
                 />
                 
                 {/* Main Logo Image */}
                 <motion.div 
                   initial={{ scale: 0.8, opacity: 0, y: 10 }}
                   animate={{ scale: 1, opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   className="relative w-64 md:w-80 h-auto flex items-center justify-center" 
                 >
                   {/* Mix-blend-multiply helps hide white background of JPG if needed */}
                   <img 
                     src="/logo-removebg-preview.png" 
                     alt="Vida Life Sciences" 
                     className="w-full h-full object-contain drop-shadow-lg mix-blend-multiply" 
                   />
                 </motion.div>
               </div>

               {/* Loading Bar Container */}
               <div className="w-64 h-1.5 bg-slate-100 rounded-full overflow-hidden relative mt-6 shadow-inner border border-slate-200">
                 {/* Loading Fill - Gradient from Red to Navy */}
                 <motion.div 
                   className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 via-red-500 to-blue-900"
                   initial={{ width: "0%" }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 2.5, ease: "easeInOut" }}
                 />
               </div>

               {/* Text - Navy Blue for Professionalism */}
               <div className="mt-5 flex flex-col items-center gap-1">
                 <p className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.3em]">
                   Vida Life Sciences
                 </p>
                 <p className="text-[9px] font-medium text-red-500 uppercase tracking-widest animate-pulse">
                   Loading...
                 </p>
               </div>
            </div>
          </motion.div>
        ) : (
          /* --- PHASE 2: THE SPLIT REVEAL (Exit Animation) --- */
          <>
            {/* Top Curtain (Navy Blue) */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="absolute top-0 left-0 w-full h-1/2 bg-[#0B1120] z-40 shadow-xl"
            >
               {/* Red Line Border */}
               <div className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600"></div>
            </motion.div>

            {/* Bottom Curtain (Navy Blue) */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0B1120] z-40 shadow-xl"
            >
               {/* Red Line Border */}
               <div className="absolute top-0 left-0 w-full h-[3px] bg-red-600"></div>
            </motion.div>
            
            {/* Flash Effect */}
            <motion.div
               initial={{ opacity: 1 }}
               animate={{ opacity: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="absolute inset-0 bg-white z-30 pointer-events-none"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Preloader;