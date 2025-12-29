import React from 'react';
import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';

const NetworkMap = () => {
  
  // Updated Locations Data
  // Coordinates (top/left) are adjusted to distribute labels visually across the globe
  const locations = [
    { name: "North Region", top: "25%", left: "45%" },
    { name: "Muscat", top: "38%", left: "20%" },
    { name: "Gujarat", top: "42%", left: "32%" },
    { name: "Madhya Pradesh", top: "45%", left: "55%" },
    { name: "Maharashtra State", top: "55%", left: "35%" },
    { name: "Telangana", top: "58%", left: "52%" },
    { name: "Malaysia", top: "60%", left: "78%" },
    { name: "Karnataka", top: "70%", left: "42%" },
  ];

  // A high contrast map image URL
  const mapUrl = "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg";

  return (
    <section className="w-full py-24 bg-slate-50 overflow-hidden relative border-t border-slate-200 flex flex-col items-center justify-center">
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* --- HEADING --- */}
        <div className="text-center mb-16">
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
           >
             <Radio size={14} className="animate-pulse text-red-500" />
             <span>Global & Pan-India Presence</span>
           </motion.div>

           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
           >
             Sterility Delivered <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
               Across Borders.
             </span>
           </motion.h2>
        </div>

        {/* --- REALISTIC EARTH GLOBE --- */}
        <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] perspective-1000">
          
          {/* Outer Glow/Atmosphere */}
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-2xl transform scale-110" />

          {/* THE GLOBE SPHERE (Ocean Blue) */}
          <div className="absolute inset-0 rounded-full overflow-hidden bg-blue-600 shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.5)] border-4 border-blue-400/30">
            
            {/* --- SPINNING MAP TEXTURE (Green Land) --- */}
            <motion.div 
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              className="absolute top-0 left-0 h-full flex items-center opacity-90"
              style={{ width: "200%" }} 
            >
               {/* Map 1 - Applying filters to make it look like Green Land */}
               <div 
                 className="w-1/2 h-full bg-repeat-x bg-center" 
                 style={{ 
                   backgroundImage: `url(${mapUrl})`, 
                   backgroundSize: 'auto 80%', // Map size
                   // Filter to turn the black SVG map into a Green color
                   filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)'
                 }} 
               />
               {/* Map 2 (Repeated for seamless loop) */}
               <div 
                 className="w-1/2 h-full bg-repeat-x bg-center" 
                 style={{ 
                   backgroundImage: `url(${mapUrl})`, 
                   backgroundSize: 'auto 80%',
                   filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)'
                 }} 
               />
            </motion.div>
            
            {/* Glossy Shine Effect (Top Left) */}
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_50%)] pointer-events-none" />
            
          </div>

          {/* --- LOCATION MARKERS --- */}
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
              className="absolute z-20 flex flex-col items-center group cursor-pointer hover:z-30"
              style={{ top: loc.top, left: loc.left }}
            >
              {/* Dot */}
              <div className="relative flex items-center justify-center">
                 <div className="w-3 h-3 bg-white rounded-full animate-ping absolute opacity-75"></div>
                 <div className="w-3 h-3 bg-red-500 border-2 border-white rounded-full relative shadow-lg"></div>
              </div>
              
              {/* Label */}
              <div className="mt-2 px-3 py-1 bg-white/90 backdrop-blur-md border border-slate-200 rounded-md text-[10px] sm:text-xs text-slate-900 font-bold shadow-xl whitespace-nowrap hover:scale-110 transition-transform">
                {loc.name}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default NetworkMap;