import React from 'react';
import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';

const NetworkMap = () => {
  
  // Locations Data (Coordinates kept exactly as you requested)
  const cities = [
    { name: "Mumbai", top: "30%", left: "22%" },
    { name: "Pune", top: "35%", left: "26%" },
    { name: "Satara", top: "40%", left: "24%" },
    { name: "Hyderabad", top: "45%", left: "42%" },
    { name: "Bangalore", top: "58%", left: "35%" },
    { name: "Chennai", top: "60%", left: "45%" },
  ];

  return (
    <section className="w-full py-24 bg-slate-50 overflow-hidden relative border-t border-slate-200 flex flex-col items-center justify-center">
      
      {/* --- LIGHT BACKGROUND PATTERN (Clean White Theme) --- */}
      <div className="absolute inset-0 opacity-[0.6]" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* --- HEADING (Dark Text for Visibility) --- */}
        <div className="text-center mb-16">
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
           >
             <Radio size={14} className="animate-pulse text-red-500" />
             <span>Pan-India Presence</span>
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
               Across the Nation.
             </span>
           </motion.h2>
        </div>

        {/* --- REALISTIC BLUE GLOBE (High Visibility) --- */}
        <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] perspective-1000">
          
          {/* Orbit Rings (Subtle Grey) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-dashed border-slate-300 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-200 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

          {/* THE GLOBE SPHERE */}
          <div className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100 shadow-[0_20px_60px_rgba(14,165,233,0.3)] border border-white/50">
            
            {/* Map Texture (Dark Blue for Contrast on White) */}
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              className="absolute top-0 left-0 h-full flex opacity-80 mix-blend-multiply"
              style={{ width: "200%" }} 
            >
               {/* Using standard map with filters to make it look "Blueprint Blue" */}
               <div className="w-1/2 h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center filter grayscale contrast-125 brightness-90" />
               <div className="w-1/2 h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center filter grayscale contrast-125 brightness-90" />
            </motion.div>
            
            {/* Realistic 3D Shadows & Shine */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),transparent_60%)]" /> {/* Highlight */}
            <div className="absolute inset-0 rounded-full shadow-[inset_-10px_-10px_40px_rgba(30,58,138,0.2)]" /> {/* Shadow */}
            
            {/* Radar Scan Line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent h-[20%] w-full animate-[scan_3s_ease-in-out_infinite]" style={{ top: '50%' }} />
          </div>

          {/* --- MARKERS (Dark Blue for visibility) --- */}
          {cities.map((city, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
              className="absolute z-20 flex flex-col items-center group cursor-pointer"
              style={{ top: city.top, left: city.left }}
            >
              {/* Pulsing Dot (Red for Alert/Active status) */}
              <div className="relative">
                 <div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute inset-0 opacity-75"></div>
                 <div className="w-3 h-3 bg-blue-700 border-2 border-white rounded-full relative shadow-md hover:scale-125 transition-transform"></div>
              </div>
              
              {/* Label (White Box with Shadow) */}
              <div className="mt-2 px-2 py-1 bg-white/90 backdrop-blur border border-slate-200 rounded text-[10px] text-slate-800 font-bold whitespace-nowrap shadow-lg group-hover:scale-110 transition-transform">
                {city.name}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
      
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-200%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default NetworkMap;