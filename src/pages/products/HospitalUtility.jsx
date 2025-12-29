import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ShieldCheck, Settings } from "lucide-react";

/* ===========================
   PRODUCT DATA - HOSPITAL SS FURNITURE (9 ITEMS)
=========================== */
const products = [
  {
    id: 1,
    images: [
      "/Screenshot 2025-12-29 233040.png",
     
    ],
    name: "Endoscopy S.S. 304 Q Customized Endoscope Storage Cupboard",
    subtitle: null,
    desc: "Floor mounted customized endoscope storage cupboard designed for storing 6 endoscopes with UV sterilization and air circulation.",
    specs: ["SS 304", "For 6 Endoscopes", "UV Sterilization", "0.3 Micron Filter"],
    details: [
      {
        title: "Construction & Features",
        points: [
          "Floor mounted ; with inside Customized Hangers for hanging 6 Endoscopes, with Cushion at all sides",
          "S.S. Hooks at sides for handing Accessories",
          "3 sides Closed, Front with 2 transparent Doors with Handles",
          "Perforation at Left and Right side and with nylon adjustable levelling bullets for legs",
          "Air circulation will happen inside the cabinet. Air will get sterilize as it goes through 0.3 micron filter.",
          "2 No of U.V. lights provides U.V. sterilization inside the cabinet"
        ]
      },
      {
        title: "Dimensions",
        points: [
          "Size:- 1200 x 400 x 2100 mm LxWxH"
        ]
      }
    ]
  },
  {
    id: 2,
    images: [
      "/Screenshot 2025-12-29 233215.png"
    ],
    name: "Vida Make S.S. 304 Instrument cupboard",
    subtitle: null,
    desc: "SS 304 Instrument cupboard with visible two shutter openable laminated glass door, lock, handle, and adjustable shelves.",
    specs: ["SS 304 16g", "Laminated Glass Door", "5 Adjustable Shelves", "Jindal Make"],
    details: [
      {
        title: "Dimensions",
        points: [
          "Size: 900 x 450 x 1800mm (H)"
        ]
      },
      {
        title: "Material Specification",
        points: [
          "1) S.S.304 Quality Jindal Company make 16g thick pre coated sheet",
          "2) Plain 6mm visible laminated toughened glass",
          "3) Manual operated locking system with heavy accessories."
        ]
      }
    ]
  },
  {
    id: 3,
    images: [
      "/Screenshot 2025-12-29 233332.png"
    ],
    name: "VIDA S.S. 304 Deluxe Floor Mounted Scrub Station Elbow & Foot Operated",
    subtitle: null,
    desc: "Deluxe floor mounted scrub station featuring elbow and foot operation with SS 304 construction.",
    specs: ["SS 304 16g", "Elbow & Foot Operated", "Floor Mounted", "1 or 2 Port"],
    details: [
      {
        title: "Specification",
        points: [
          "S.S. 304 quality Sheet inner body 16 g.",
          "S.S. 304 quality Sheet outer body covering with three sides 16 g.",
          "Adjustable nylon bush."
        ]
      },
      {
        title: "Available Sizes",
        points: [
          "1) 36” (L) X 24” (D) X 52” (H) – 1 port",
          "2) 60” (L) x24” (W) x52” (H) – 2 port"
        ]
      }
    ]
  },
  {
    id: 4,
    name: "VIDA S.S. 304 Deluxe Floor Mounted Scrub Station with Sensor & as well as Foot Operated Cock",
    subtitle: null,
    desc: "Advanced floor mounted scrub station with sensor and foot operated cock options.",
    specs: ["SS 304 16g", "Sensor Operated", "Foot Operated", "Floor Mounted"],
    details: [
      {
        title: "Specification",
        points: [
          "S.S. 304 quality Sheet inner body 16 g.",
          "S.S. 304 quality Sheet outer body covering with three sides 16 g.",
          "Adjustable nylon bush."
        ]
      },
      {
        title: "Available Sizes",
        points: [
          "1) 36” (L) X 24” (D) X 52” (H) – 1 port",
          "2) 60” (L) x24” (W) x52” (H) – 2 port"
        ]
      }
    ]
  },
  {
    id: 5,
    images: [
      "/Screenshot 2025-12-29 233430.png"
    ],
    name: "VIDA S.S. 304 Wall mounted Scrub Station Elbow Operated",
    subtitle: null,
    desc: "Wall mounted scrub station with elbow operation and matt finishing.",
    specs: ["SS 304 16G", "Wall Mounted", "Elbow Operated", "Matt Finish"],
    details: [
      {
        title: "Material",
        points: [
          "Material: Inner S.S. 304, 16 G, Matt Finishing",
          "S.S. 304 quality Sheet inner body"
        ]
      },
      {
        title: "Available Sizes",
        points: [
          "1) 36” (L) X 24” (D) X 36” (H) – 1 port",
          "2) 60” (L) x24” (W) x36” (H)"
        ]
      }
    ]
  },
  {
    id: 6,
    images: [
      "/Screenshot 2025-12-29 233518.png"
    ],
    name: "Vida-SS 316 Anaesthesia Drug Trolley – Medicine Trolley",
    subtitle: null,
    desc: "Heavy gauge SS 316 medicine trolley with five drawers, partitions, and IV stand provision.",
    specs: ["SS 316", "5 Drawers", "IV Stand Provision", "6 Inch Wheels"],
    details: [
      {
        title: "Dimensions & Construction",
        points: [
          "Size: 1100mm(H) X 900mm(W) X 450mm(D)",
          "And 600mm max height for IV stand",
          "Made out of heavy gauge Stainless Steel sheet (316 grades) with five drawers.",
          "Bottom shelf with doors.",
          "Two shelves on top.",
          "Provision for Injection fuse breaker supporting various sizes",
          "Provision for catheter holder.",
          "Mounted on 6 inches wheels.",
          "Small racks on both side of trolley.",
          "16 G Sheet.",
          "20X20 sq. Pipe",
          "4” Castor Wheels with break"
        ]
      },
      {
        title: "Drawer Configuration",
        points: [
          "First drawer contains 21 partitions(plastic box)",
          "Second drawer contains 6 partitions",
          "Third and fourth drawer contains 4 partitions each",
          "1st drawer 100mm Height.",
          "2nd drawer 150mm Height.",
          "3rd drawer 200mm Height.",
          "4th & 5th drawer 198mm."
        ]
      }
    ]
  },
  {
    id: 7,
    images: [
      "/Screenshot 2025-12-29 233840.png"
    ],
    name: "VIDA SS304 quality swab count holder",
    subtitle: null,
    desc: "SS 304 swab count holder with removable tray at bottom.",
    specs: ["SS 304", "Removable Tray", "60” Height", "PVC Matt Sheet"],
    details: [
      {
        title: "Dimensions",
        points: [
          "Size: 60” (H) x 30” (L) x 12” (W)"
        ]
      },
      {
        title: "Material specification",
        points: [
          "25 round pipe 18g.",
          "SS Solid 8mm round bar",
          "PVC Matt 0.8mm sheet"
        ]
      }
    ]
  },
  {
    id: 8,
    images: [
      "/Screenshot 2025-12-29 234000.png"
    ],
    name: "Vida-SS 304 Lead Apron Stand",
    subtitle: null,
    desc: "Heavy duty SS 304 lead apron stand suitable for hanging 10 aprons safely.",
    specs: ["SS 304", "10 Aprons Capacity", "200-250 kg Load", "Heavy Duty"],
    details: [
      {
        title: "Dimensions & Capacity",
        points: [
          "Size: 900mm x 600mm x 1500mm (H)",
          "Heavy duty round and square pipe for bearing the weight of 200-250 kg.",
          "It’s suitable for hanging 10 aprons safely."
        ]
      },
      {
        title: "Mobility",
        points: [
          "4 no’s nylon castor wheels out of 4 no’s, 2 are with brake for moving easily."
        ]
      }
    ]
  },
  {
    id: 9,
    images: [
      "/Screenshot 2025-12-29 234105.png"
    ],
    name: "Vida-Crash Cart fully SS 304",
    subtitle: null,
    desc: "Fully SS 304 crash cart with 6 modular drawers, medicine containers, and IV rod.",
    specs: ["SS 304", "6 Modular Drawers", "IV Rod", "4'' PU Wheels"],
    details: [
      {
        title: "Dimensions",
        points: [
          "Approx. Size: - 27’’x 24’’ x 58’’",
          "Size of wheels : 4’’ Polyurethane wheels with break"
        ]
      },
      {
        title: "Features",
        points: [
          "six drawer modular system",
          "upper two drawer with medicine containers",
          "detachable SS 304 tray 3 nos (Size will be : 12’’x8’’x2.5’’(D))",
          "Both side SS Cylindrical pipe catheter storage",
          "SS I V rod behind the crash cart",
          "System mounted on 100 mm DIA castors two with brake",
          "2’’ collar on top and both side SS Hooks",
          "SS 304L Frame 16G sheet for tray & Top"
        ]
      }
    ]
  }
];

/* ===========================
   COMPONENT
=========================== */
const HospitalUtility = () => {
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
               backgroundImage: "url('/Hospital SS Furniture.png')", 
               opacity: 0.2, // Corrected opacity to 0.2
           }}
         />
         {/* OVERLAY GRADIENT */}
         <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/80 to-slate-50/95"></div>
      </div>

      <div className="relative z-10">
        {/* INTRO */}
        <section className="container mx-auto px-6 max-w-4xl text-center mb-16">
          <span className="inline-block mb-6 px-3 py-1 text-xs font-bold uppercase tracking-widest bg-blue-100 text-blue-800 rounded">
            Infrastructure
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Hospital <span className="text-sky-600">SS Furniture</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            High-quality, durable, and ergonomic stainless steel furniture solutions tailored for modern healthcare environments.
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
                      {/* CONDITIONAL SUBTITLE - Renders only if subtitle exists */}
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
            Equip Your Facility with the Best
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

export default HospitalUtility;