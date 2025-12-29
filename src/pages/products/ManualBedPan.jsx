import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ShieldCheck, Settings } from "lucide-react";

/* ===========================
   PRODUCT DATA - MANUAL BED PAN WASHER
=========================== */
const products = [
  {
    id: 1,
    images: [
      "/Screenshot 2025-12-29 232514.png",
    ],
    name: "Vida-SS 304 DU sink with platform & flush tank",
    subtitle: null,
    desc: "Manual Bed Pan Washer Disinfector featuring a conical DU sink with platform and high-quality flush tank system.",
    // Key highlights moved to specs
    specs: ["SS 304 16G", "Matt Finish", "Flush Tank", "Conical DU Sink"],
    details: [
      {
        title: "Dimensions",
        points: [
          "Conical DU sink size: 450mm dia X 600mm(D)",
          "Overall size: 3 feet Length & 5 feet length available"
        ]
      },
      {
        title: "Specification",
        points: [
          "SS 304 16G, Matt Finish sheet",
          "SS square pipe 40x40mm 16G frame with support",
          "Three side half close SS panel",
          "6” back panel SS304",
          "CPVC good quality flush tank with required plumbing and attachments.",
          "Flush tank will be attached with DU unit with proper support"
        ]
      }
    ]
  }
];

/* ===========================
   COMPONENT
=========================== */
const ManualBedPan = () => {
  const containerRef = useRef(null);
  const [activeId, setActiveId] = useState(null);

  // GSAP – PAGE ENTRANCE
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".product-row", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.06,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleItem = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div ref={containerRef} className="relative bg-slate-50 pt-24 pb-32 overflow-hidden min-h-screen">
      
      {/* --- BACKGROUND IMAGE WITH ANIMATION --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <motion.div
           initial={{ scale: 1 }}
           animate={{ scale: 1.08, x: ["0%", "2%", "0%"] }} // Smooth zoom & pan loop
           transition={{
             duration: 25,
             repeat: Infinity,
             repeatType: "reverse",
             ease: "easeInOut",
           }}
           className="absolute inset-0 w-full h-full bg-cover bg-center"
           style={{
               // UPDATED IMAGE PATH
               backgroundImage: "url('/Manual Bed Pan Washer Disinfector.png')", 
               // Fixed opacity value (0.2 instead of 200)
               opacity: 0.2, 
           }}
         />
         {/* OVERLAY GRADIENT */}
         <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/80 to-slate-50/95"></div>
      </div>

      <div className="relative z-10">
        {/* INTRO */}
        <section className="container mx-auto px-6 max-w-4xl text-center mb-16">
          <span className="inline-block mb-6 px-3 py-1 text-xs font-bold uppercase tracking-widest bg-blue-100 text-blue-800 rounded">
            Infection Control
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Manual <span className="text-sky-600"> Bed Pan Washer Disinfector</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Reliable manual washing solutions designed for effective cleaning of bed pans and urine bottles in healthcare facilities.
          </p>
        </section>

        {/* ACCORDION */}
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col gap-4">
            {products.map((product) => {
              const isOpen = activeId === product.id;

              // === SMART IMAGE LOGIC ===
              // Detects if 'img' or 'images' is used, and handles arrays or strings
              let productImages = [];
              if (product.images && product.images.length > 0) {
                productImages = product.images;
              } else if (Array.isArray(product.img)) {
                productImages = product.img;
              } else if (typeof product.img === "string") {
                productImages = [product.img];
              }

              return (
                <motion.div
                  key={product.id}
                  layout
                  className={`product-row bg-white rounded-2xl border ${
                    isOpen ? "border-sky-500 shadow-lg shadow-sky-100" : "border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(product.id)}
                    className="w-full flex justify-between items-center p-6 lg:p-8 text-left"
                  >
                    <div>
                      {/* CONDITIONAL SUBTITLE */}
                      {product.subtitle && (
                        <span className="text-xs uppercase tracking-widest text-slate-400 block mb-1">
                            {product.subtitle}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-slate-900">
                        {product.name}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-3 rounded-full bg-slate-50 text-slate-500 flex-shrink-0 ml-4"
                    >
                      <ChevronDown size={22} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 lg:px-10 pb-10 border-t"
                      >
                        {/* FOR PRODUCTS (DETAILED VIEW) */}
                        {product.details ? (
                          <div className="mt-8">
                             <div className="grid lg:grid-cols-3 gap-10">
                                {/* Left Column: Image & Highlights */}
                                <div className="lg:col-span-1">
                                    <div className="bg-slate-100 rounded-xl aspect-[4/3] flex items-center justify-center sticky top-6 overflow-hidden relative group">
                                        
                                        {/* === IMAGE RENDERING START === */}
                                        {productImages.length > 0 ? (
                                           <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                                               {productImages.map((src, idx) => (
                                                   <img 
                                                     key={idx}
                                                     src={src} 
                                                     alt={`${product.name} ${idx + 1}`} 
                                                     className="w-full h-full object-contain flex-shrink-0 snap-center p-4"
                                                   />
                                               ))}
                                               {productImages.length > 1 && (
                                                 <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full opacity-70 pointer-events-none">
                                                     Swipe ↔
                                                 </div>
                                               )}
                                           </div>
                                        ) : (
                                           <div className="flex flex-col items-center justify-center text-slate-400">
                                               <span className="text-4xl mb-2">📷</span>
                                               <span className="text-sm">No Image</span>
                                           </div>
                                        )}
                                        {/* === IMAGE RENDERING END === */}

                                    </div>
                                    
                                    <div className="mt-6">
                                        <h4 className="flex items-center gap-2 font-bold mb-3 text-sm uppercase tracking-wide text-sky-700">
                                            <ShieldCheck size={16} /> Highlights
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.specs.map((spec, i) => (
                                                <span key={i} className="bg-sky-50 text-sky-800 text-xs font-semibold px-2.5 py-1 rounded border border-sky-100">
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Detailed Text */}
                                <div className="lg:col-span-2 space-y-8">
                                    
                                    {product.details.map((section, idx) => (
                                        <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                            <h4 className="flex items-center gap-2 font-bold mb-4 text-slate-900 border-b pb-2 border-slate-200">
                                                <Settings size={18} className="text-sky-500" />
                                                {section.title}
                                            </h4>
                                            <ul className="space-y-2">
                                                {section.points.map((point, pIdx) => (
                                                    <li key={pIdx} className="text-sm text-slate-600 flex items-start gap-2">
                                                        <span className="text-sky-400 mt-1.5 font-bold">•</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                             </div>
                          </div>
                        ) : (
                          /* FALLBACK */
                          <div className="grid lg:grid-cols-3 gap-10 mt-8">
                            <div className="bg-slate-100 rounded-xl aspect-[4/3] flex items-center justify-center">
                              <span className="text-slate-400 text-sm">Image Placeholder</span>
                            </div>
                            <div className="lg:col-span-2">
                              <p className="text-slate-600 mb-6">{product.desc}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-24">
          <h2 className="text-2xl font-bold mb-6">
            Discuss Your Requirements
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-sky-700 text-white rounded-full font-bold hover:bg-sky-800 transition-colors"
          >
            Get a Quote <ArrowRight size={18} />
          </a>
        </section>
      </div>
    </div>
  );
};

export default ManualBedPan;