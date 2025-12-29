import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, PlayCircle } from 'lucide-react';

const HeroSection = () => {
  // Advanced Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Har element 0.2s ke baad aayega
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* --- LAYER 1: VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover" 
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Cinematic Overlay (Video ko clear dikhane ke liye lekin text readable rakhne ke liye) */}
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40" />
      </div>

      {/* --- LAYER 2: CONTENT --- */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
            
            {/* 1. Small Badge */}
            <motion.div variants={itemVariants} className="mb-6">
               <span className="px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                 Licensed Manufacturer • MFG/MD/2023
               </span>
            </motion.div>

            {/* 2. Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl"
            >
              Sterility is not a Service.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 animate-gradient-x">
                It is a Precision.
              </span>
            </motion.h1>

            {/* 3. Subtext */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-200 font-light max-w-2xl leading-relaxed mb-10 drop-shadow-md"
            >
              Regulated by <strong className="text-white font-semibold">Indian Medical Devices Rules</strong>. 
              We don't just clean instruments; we manufacture safety standards for 300+ hospitals across India.
            </motion.p>

            

        </motion.div>

      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-slate-300/60 text-[10px] tracking-[0.3em] uppercase font-bold z-20"
      >
        <span>Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-sky-400 to-transparent"></div>
      </motion.div>

    </section>
  );
};

export default HeroSection;