import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  // 1. Simulate Loading Progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Wait a bit before finishing
          return 100;
        }
        return prev + 2; // Adjust speed here
      });
    }, 30); // Speed of the counter

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Fades out the whole wrapper at the end
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      
      {/* A. Background Grid (Sterile Feel) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* B. The Logo Icon (Pulsing) */}
        <div className="relative mb-8">
           {/* Ripple Effect */}
           <motion.div 
             animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="absolute inset-0 rounded-full bg-sky-100 blur-md"
           />
           
           {/* Static Logo Box */}
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.5 }}
             className="w-16 h-16 bg-sky-600 rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-sky-200"
           >
             V
           </motion.div>

           {/* Medical Crosshairs (Corner Brackets) */}
           <div className="absolute -top-4 -left-4 w-4 h-4 border-t-2 border-l-2 border-slate-300"></div>
           <div className="absolute -top-4 -right-4 w-4 h-4 border-t-2 border-r-2 border-slate-300"></div>
           <div className="absolute -bottom-4 -left-4 w-4 h-4 border-b-2 border-l-2 border-slate-300"></div>
           <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b-2 border-r-2 border-slate-300"></div>
        </div>

        {/* C. Typography & Status */}
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Vida<span className="text-sky-600">Life</span>
        </h1>
        
        <div className="flex items-center gap-3 text-xs font-mono text-slate-400 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>System Initializing... {progress}%</span>
        </div>

        {/* D. The "Life Line" Progress Bar */}
        <div className="w-64 h-[2px] bg-slate-100 mt-6 relative overflow-hidden rounded-full">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-sky-600"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
          />
        </div>

      </div>

      {/* E. The "Curtain" Reveal Effect (The Split) */}
      {/* Top Half */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 bg-white z-20"
        initial={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      />
      {/* Bottom Half */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-white z-20"
        initial={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      />

    </motion.div>
  );
};

export default Preloader;