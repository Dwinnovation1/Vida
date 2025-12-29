import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Layers, Microscope, Cpu, ArrowUpRight } from 'lucide-react';

const Infrastructure = () => {

  // --- ANIMATION VARIANTS ---
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full py-24 bg-slate-900 text-white overflow-hidden relative">
      
      {/* Background Tech Mesh (Subtle) */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-2 mb-4"
             >
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-sky-400 font-mono text-xs tracking-widest uppercase">Manufacturing Unit: Online</span>
             </motion.div>
             
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl lg:text-6xl font-bold leading-tight"
             >
               The Core of <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                 Precision.
               </span>
             </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 max-w-sm mt-6 md:mt-0 text-lg leading-relaxed"
          >
            A 7,000+ sq. ft. advanced fabrication facility dedicated to creating medical-grade sterilization infrastructure.
          </motion.p>
        </div>


        {/* --- BENTO GRID LAYOUT --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-4 lg:gap-6 h-auto lg:h-[600px]"
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* BLOCK 1: MAIN FACTORY VISUAL (Large) */}
          <motion.div 
            variants={itemVars}
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 group relative rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-800"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-80"></div>
            <img 
              src="/images/factoryfloor infrastructure.avif" 
              alt="Factory Floor" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/20 inline-block mb-3">
                Main Assembly
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">In-House Fabrication</h3>
              <p className="text-slate-300 text-sm">CNC cutting, bending, and TIG welding stations.</p>
            </div>
          </motion.div>


          {/* BLOCK 2: STATISTIC (Tall) */}
          <motion.div 
            variants={itemVars}
            className="md:col-span-1 lg:col-span-1 lg:row-span-2 group relative rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-800 p-8 flex flex-col justify-between hover:border-sky-500/50 transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-sky-600 transition-colors duration-300">
               <Layers className="text-white" size={24} />
            </div>
            
            <div className="mt-12">
               <div className="text-6xl font-bold text-white tracking-tighter mb-2">
                 7k<span className="text-sky-500 text-4xl">+</span>
               </div>
               <div className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Square Feet</div>
               <p className="text-slate-400 text-sm leading-relaxed">
                 Dedicated manufacturing space ensuring complete control over production timelines and quality.
               </p>
            </div>
            
            {/* Hover Decor */}
            <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl group-hover:bg-sky-500/30 transition-all"></div>
          </motion.div>


          {/* BLOCK 3: MATERIALS (Wide) */}
          <motion.div 
            variants={itemVars}
            className="md:col-span-3 lg:col-span-1 group relative rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-800 p-8 hover:bg-slate-750 transition-colors"
          >
             <div className="flex justify-between items-start mb-6">
               <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
                 <Settings className="text-sky-400" size={20} />
               </div>
               <ArrowUpRight className="text-slate-500 group-hover:text-white transition-colors" size={20} />
             </div>
             
             <h3 className="text-xl font-bold text-white mb-2">SS 304 / 316L</h3>
             <p className="text-slate-400 text-sm">
               We use only certified, medical-grade stainless steel for corrosion resistance and longevity.
             </p>
          </motion.div>


          {/* BLOCK 4: TECHNOLOGY (Wide) */}
          <motion.div 
            variants={itemVars}
            className="md:col-span-3 lg:col-span-1 group relative rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-800 p-8 hover:bg-slate-750 transition-colors"
          >
             <div className="flex justify-between items-start mb-6">
               <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
                 <Cpu className="text-sky-400" size={20} />
               </div>
               <ArrowUpRight className="text-slate-500 group-hover:text-white transition-colors" size={20} />
             </div>
             
             <h3 className="text-xl font-bold text-white mb-2">Smart Automation</h3>
             <p className="text-slate-400 text-sm">
               PLC-based automation integration for precise sterilization cycles and data logging.
             </p>
          </motion.div>
          
          {/* BLOCK 5: QUALITY CONTROL (Wide) */}
          <motion.div 
            variants={itemVars}
            className="md:col-span-3 lg:col-span-4 lg:row-span-1 group relative rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-800 flex flex-col md:flex-row items-center"
          >
             <div className="p-8 md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sky-900/50 rounded-lg">
                    <Microscope className="text-sky-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Quality Assurance Lab</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Every unit undergoes rigorous pressure testing, leak detection, and thermal calibration before leaving our facility. We ensure ISO 13485 compliance at every step.
                </p>
                
             </div>
             
             {/* Decorative Image Strip */}
             <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden">
                <img 
                  src="/images/qualitylab infrastructure img.avif" 
                  alt="Quality Lab" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-transparent to-transparent"></div>
             </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Infrastructure;