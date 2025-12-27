import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

const FoundationSection = () => {
  
  // Data Points
  const highlights = [
    "Market Leadership in Sterile Processing",
    "ISO Class 8 Cleanroom Infrastructure",
    "Partner to 150+ Hospitals & Surgical Centers",
    "End-to-End Digital Traceability"
  ];

  return (
    <section className="w-full py-24 lg:py-32 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT: NARRATIVE (About Us) --- */}
          <div className="order-2 lg:order-1">
            
            {/* Tag */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
               <span className="h-[2px] w-8 bg-sky-600"></span>
               <span className="text-sky-600 font-bold uppercase tracking-[0.2em] text-xs">
                 Who We Are
               </span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[1.1]"
            >
              The Gold Standard for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">
                Medical Safety.
              </span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-600 leading-relaxed mb-10 font-medium max-w-lg"
            >
              Vida Life Science is not just a sterilization service; we are a critical extension of your hospital’s infection control protocol. 
              <br/><br/>
              We operate India's most advanced centralized sterilization hubs, ensuring that every surgical instrument entering your OT is biologically safe, legally compliant, and functionally perfect.
            </motion.p>

            {/* Feature List */}
            <div className="space-y-5 mb-12">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-semibold group-hover:text-sky-700 transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button 
              whileHover={{ x: 10 }}
              className="flex items-center gap-3 text-slate-900 font-bold uppercase tracking-widest text-sm group"
            >
              Read Corporate Profile
              <span className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-full group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
                 <ArrowRight size={16} />
              </span>
            </motion.button>
          </div>

          {/* --- RIGHT: VISUAL (Shutter Animation & Image) --- */}
          <div className="order-1 lg:order-2">
            <div className="relative pl-0 lg:pl-10">
               
               {/* 1. Image Container */}
               <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square shadow-2xl shadow-slate-200">
                  
                  {/* MAIN IMAGE: Sterile Processing / Lab Context */}
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format" 
                    alt="Sterile Facility Medical Equipment" 
                    className="w-full h-full object-cover"
                  />

                  {/* 2. Shutter Reveal (Parda) */}
                  {/* Ye white layer image ke upar hai aur load hone par hat jayegi */}
                  <motion.div 
                    initial={{ height: "100%" }}
                    whileInView={{ height: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} 
                    className="absolute top-0 left-0 w-full bg-white z-20"
                  />

                  {/* Overlay Gradient for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />
               </div>

               {/* 3. Floating Stats Badge (3D Feel) */}
               <motion.div 
                 initial={{ opacity: 0, y: 50, x: -20 }}
                 whileInView={{ opacity: 1, y: 0, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.8, duration: 0.8 }}
                 className="absolute -bottom-8 -left-4 lg:-bottom-10 lg:left-0 z-30"
               >
                  <div className="bg-white p-6 lg:p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-l-4 border-sky-600 flex items-center gap-5 max-w-xs">
                     <div className="bg-sky-50 p-4 rounded-full text-sky-600">
                        <Activity size={28} />
                     </div>
                     <div>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Daily Throughput</p>
                        <p className="text-slate-900 text-3xl font-bold leading-none">50k+</p>
                        <p className="text-slate-500 text-xs mt-1 font-medium">Surgical Instruments</p>
                     </div>
                  </div>
               </motion.div>

               {/* Decorative Background Dots */}
               <div className="absolute -top-12 -right-12 z-0 opacity-30">
                  <div className="w-40 h-40 bg-[radial-gradient(circle,_#0ea5e9_2px,_transparent_2px)] bg-[size:12px_12px]" />
               </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoundationSection;