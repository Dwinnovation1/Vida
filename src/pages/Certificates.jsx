import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { X, ZoomIn, Shield, Globe, Award, CheckCircle } from 'lucide-react';

// --- 3D TILT CERTIFICATE CARD (Unchanged) ---
const CertificateCard = ({ src, title, issuer, onClick }) => {
  const ref = useRef(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer group flex-shrink-0 w-[280px] md:w-[320px] mx-4"
      onClick={onClick}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative aspect-[3/4] w-full bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200"
      >
        {/* Shutter Reveal Effect */}
        <motion.div
          initial={{ height: "100%" }}
          whileInView={{ height: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 w-full bg-slate-900 z-30 pointer-events-none"
        />

        {/* Image */}
        <div className="h-full w-full overflow-hidden bg-slate-100 relative">
          <motion.img
            src={src}
            alt={title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            onError={(e) => { e.target.src = "https://via.placeholder.com/600x800?text=Certificate"; }}
          />
          
          {/* Glossy Shine */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-10 pointer-events-none" />
          
          {/* Hover Info */}
          <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
             <div className="bg-white/10 p-3 rounded-full mb-3 backdrop-blur-sm border border-white/20">
                <ZoomIn className="text-white" size={24} />
             </div>
             <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
             <p className="text-sky-400 text-xs uppercase tracking-widest">{issuer}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---
const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // --- DATA: 17 Certificates ---
  const allCertificates = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    src: `/certificate${i + 1}.jpeg`, 
    title: i === 0 ? "Manufacturing License" : 
           i === 1 ? "ISO 13485:2016" : 
           i === 2 ? "ISO 9001:2015" : 
           i === 3 ? "WHO-GMP Certified" :
           i === 4 ? "CE Conformity" :
           `Regulatory Document ${i + 1}`,
    issuer: i === 0 ? "Govt. of India (CDSCO)" : 
            i < 3 ? "International Standards" : 
            "Compliance Authority"
  }));

  const row1 = allCertificates.slice(0, 9);
  const row2 = allCertificates.slice(9, 17);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-32 relative">
      
      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              src={selectedImage} 
              alt="Full Certificate" 
              className="max-h-[90vh] max-w-full rounded-lg shadow-2xl border border-white/10" 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- NEW: CINEMATIC HERO SECTION --- */}
      <div className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden mb-20">
         {/* Background Image with Parallax-like scale */}
         <div className="absolute inset-0 z-0">
            <img 
               src="/images/certificatebgimg.avif" 
               alt="Quality Assurance Lab" 
               className="w-full h-full object-cover"
            />
            {/* Dark Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 "></div>
         </div>

         {/* Hero Content */}
         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
            >
               <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-400 text-sm font-bold uppercase tracking-widest backdrop-blur-md mb-6">
                  <Shield size={16} /> World-Class Compliance
               </span>
               <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                  Certified for <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                     Global Excellence
                  </span>
               </h1>
               <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                  Our manufacturing facilities adhere to the strictest international standards, holding valid certifications from global regulatory bodies.
               </p>
            </motion.div>
         </div>
      </div>

      <div className="container-fluid relative z-10">
        
        {/* --- ROW 1: Slides LEFT --- */}
        <div className="w-full overflow-hidden mb-12 relative">
           <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
           <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
           
           <motion.div 
             className="flex w-max"
             animate={{ x: [0, -2000] }} 
             transition={{ repeat: Infinity, ease: "linear", duration: 40 }} 
             style={{ x: 0 }}
           >
             {[...row1, ...row1, ...row1].map((cert, idx) => (
                <CertificateCard 
                   key={`r1-${idx}`} 
                   {...cert} 
                   onClick={() => setSelectedImage(cert.src)} 
                />
             ))}
           </motion.div>
        </div>

        {/* --- ROW 2: Slides RIGHT --- */}
        <div className="w-full overflow-hidden relative">
           <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
           <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

           <motion.div 
             className="flex w-max"
             animate={{ x: [-2000, 0] }} 
             transition={{ repeat: Infinity, ease: "linear", duration: 45 }} 
           >
             {[...row2, ...row2, ...row2].map((cert, idx) => (
                <CertificateCard 
                   key={`r2-${idx}`} 
                   {...cert} 
                   onClick={() => setSelectedImage(cert.src)} 
                />
             ))}
           </motion.div>
        </div>

        {/* --- BOTTOM TRUST STRIP --- */}
        <div className="container mx-auto px-6 mt-20 border-t border-slate-200 pt-10">
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 font-bold text-slate-400 text-xl">
                    <Globe size={24} /> ISO Certified
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-400 text-xl">
                    <Award size={24} /> GMP Compliant
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-400 text-xl">
                    <CheckCircle size={24} /> CE Marked
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Certificates;