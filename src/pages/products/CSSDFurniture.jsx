import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ShieldCheck, Settings } from "lucide-react";

/* ===========================
   PRODUCT DATA - CSSD FURNITURE (15 ITEMS)
=========================== */
const products = [
  {
    id: 1,
    img: ["/Vida Double Sink with Platform.png"],
    name: "Vida Double Sink with Platform/ SS Clean Up Counter (Wash Station Close Type)",
    subtitle: null,
    desc: "Stainless steel clean up counter with double sink platform, featuring pre-polished sheets and tubular stand pipe.",
    specs: ["Total length: 5 x 2 feet", "16g pre-polished sheet", "SS 304", "Double Sink"],
    details: [
      {
        title: "Salient Features",
        points: [
          "16g pre-polished sheet on both sides",
          "Tubular stand pipe 16g SS",
          "Three side half closed SS panel",
          "6” (150 mm) back panel on the top of the sink",
          "Sink Size: 18” (L) x 16” (W) x 10” (D)",
          "First sink is for water gun, second sink is for air gun."
        ]
      }
    ]
  },
  {
    id: 2,
    img: null,
    name: "Vida SS304 Single Sink with Platform /S.S. Clean Up Counter (Single Wash Station Close Type)",
    subtitle: null,
    desc: "Single wash station clean up counter made of SS304 with back panel and pre-polished finish.",
    specs: ["Size: 900 x 600 x 825 mm", "16g pre-polished sheet", "SS 304", "Single Sink"],
    details: [
      {
        title: "Salient Features",
        points: [
          "16g pre-polished sheet on both sides",
          "Tubular stand pipe 16g SS",
          "Three side half closed SS panel",
          "12” (300 mm) back panel on the top of the sink"
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Air Gun & Water Gun Unit- without Compressor",
    subtitle: null,
    desc: "Unit designed to wash hollow instruments with jet of Water followed by Air supplied with 2 Pistol Gun wash.",
    specs: ["2 Pistol Gun wash", "0.5HP Pressure pump", "SS 304 Stand", "Pneumatic tube"],
    details: [
      {
        title: "Description",
        points: [
          "To wash hollow instruments with jet of Water followed by Air supplied with 2 Nos. supplied with 2 Pistol Gun wash, one for water jet and one for air jet"
        ]
      },
      {
        title: "Included Accessories",
        points: [
          "0.5HP Pressure pump",
          "SS 304 Stand",
          "SS 304 Cabinet for pump",
          "Flexible 5mtr Pneumatic tube for air gun",
          "Flexible 5mtr Pneumatic tube for water gun with fixing assemblies.",
          "On/off wall with necessary plumbing & connection."
        ]
      }
    ]
  },
  {
    id: 4,
    img: ["/tabel.png"],
    name: "Work Table – Receiving Area with under self MOC- SS304",
    subtitle: null,
    desc: "Heavy duty work table for receiving area with argon arc welded frame and machine pressed top.",
    specs: ["Size: 3’ X 5’", "Vida Make", "16 gauge SS pipe", "SS 304"],
    details: [
      {
        title: "Construction Details",
        points: [
          "Frame in 18mm dia, 16 gauge hollow SS pipe with rigid configuration, argon arc welded, and ground smooth and polished.",
          "Machine pressed top in 18 gauge 304 grade SS bent twice at edges to form 25mm thick edges with 12mm projection inside, fully reinforced against bending and treated for sound deadening.",
          "Rubberized, adjustable SS feet."
        ]
      }
    ]
  },
  {
    id: 5,
     img: ["/jhaal.png"],
    name: "Floor Mounted Storage Rack",
    subtitle: null,
    desc: "Floor mounted SS storage rack with 5 shelves and heavy duty mounting bushes.",
    specs: ["Size: 900 x 450 x 1800mm", "S.S. shelf – 5 Nos", "Vida Make", "SS Frame"],
    details: [
      {
        title: "Specifications",
        points: [
          "S.S. frame and body.",
          "S.S. shelf – 5 Nos.",
          "Pre-polished 18 gauge sheet",
          "Argon arc welding",
          "Size: 900mm (L) X 450mm (W) X 1800mm (H)",
          "Mounting will be on heavy duty rubber / nylon / bush."
        ]
      }
    ]
  },
  {
    id: 6,

    name: "Vida-SS 304 Equipment Placement Table",
    subtitle: null,
    desc: "Heavy duty equipment placement table with 400kg weight bearing capacity.",
    specs: ["Size: 2.5 X 2ft", "SS 304 16G", "Capacity: 400kg", "Heavy Duty"],
    details: [
      {
        title: "Specifications",
        points: [
          "SS 304,16G with Heavy Duty support for TOP.",
          "Material: SS304 16g Matt PVC Sheet.",
          "Legs 40x40mm Sq. pipe.",
          "Weight bearing capacity 400kg."
        ]
      }
    ]
  },
  {
    id: 7,
    img: ["/table.png"],
     
    name: "Vida-SS 304 Control Packing Table & Two Side Drawers With Two Shelf Rack On Top",
    subtitle: null,
    desc: "Control packing table with two side drawers, shelf rack, and rigid configuration.",
    specs: ["Size : 3’ X 5’", "SS 304", "Two Side Drawers", "Under Shelf"],
    details: [
      {
        title: "Construction Details",
        points: [
          "Frame in 18mm dia, 16 gauge hollow SS pipe with rigid configuration, argon arc welded, and ground smooth and polished.",
          "Machine pressed top in 18 gauge 304 grade SS bent twice at edges to form 25mm thick edges with 12mm projection inside, fully reinforced against bending and treated for sound deadening.",
          "One no. SS under shelf with round edges also in 18 gauge SS with 25mm thick edges as above.",
          "Rubberized, adjustable SS feet."
        ]
      }
    ]
  },
  {
    id: 8,
    img: ["/bed.png"],
    name: "Linen Folding (Inspection) Table",
    subtitle: null,
    desc: "Specially designed table for sorting, inspection, and folding of surgical dressings with illuminated surface plate.",
    specs: ["Size: 4’ x 7’feet", "Illuminated Inspection Panel", "SS 304 Frame", "2 Electrical Outlets"],
    details: [
      {
        title: "Design & Usage",
        points: [
          "The table should be specially designed for sorting; inspection (each piece of linen can be moved over an illuminated inspection panel) and folding of surgical dressing sets and individually packaged towels/gowns.",
          "The extended width also facilitates work with large dressing sheets.",
          "Work can be carried out comfortably, either sitting or standing."
        ]
      },
      {
        title: "Construction & Features",
        points: [
          "The worktop should be made of a robust wood-based core material, surfaced with plastic laminate in a soft white colour that enhances the lighting for inspection of linen.",
          "All edges of the worktop are smooth.",
          "The top has a built-in opalescent (milky) plastic surface plate, 4’ x 7’, illuminated from underneath by two 25W fluorescent tubes located beneath the top in a laminated recess.",
          "The table has two electrical outlets (one on each side).",
          "The rigid frame should be made of stainless steel (304).",
          "There should be unobstructed access to the working space, since the only supports needed along the front of the table are the corner legs. This also facilitates cleaning of floors."
        ]
      }
    ]
  },
  {
    id: 9,
    img: ["/Screenshot 2025-12-29 231151.png"],
    name: "Vida SS 304 Pass Box mechanical interlock and UV light",
    subtitle: null,
    desc: "SS 304 Pass Box with mechanical interlock and automatic UV light safety feature.",
    specs: ["Size: 600 x 600 x 600mm", "SS 304", "UV Lights", "Mechanical Interlock"],
    details: [
      {
        title: "Material of Construction",
        points: [
          "The Pass Box will be fabricated from S.S. 304 sheets.",
          "All welding will be full argon welding for superior hygiene."
        ]
      },
      {
        title: "Accessories and Fittings",
        points: [
          "UV Lights.",
          "As an additional safety to the operator the UV Light will be automatically switched off when any one door is opened.",
          "Door interlocking to prevent simultaneous Opening of both doors.",
          "Toughened glass paneling for easy visibility."
        ]
      }
    ]
  },
  {
    id: 10,
    img: ["/Screenshot 2025-12-29 231239.png"],
    name: "Vida-SS 304 Closed Transport Trolley – Green Strips for Sterile goods / Red Strips for Non Sterile Goods",
    subtitle: null,
    desc: "Fully SS closed transport trolley with color strips for sterile and non-sterile goods identification.",
    specs: ["Size: 900 x 600 x 1200mm", "SS 304", "Capacity: 200kg", "Air Tight Lock"],
    details: [
      {
        title: "Dimensions",
        points: [
          "Size: 900 x 600 x 1200mm (H)",
          "Size: 3’ (Length) X 2’ (Width) X 4’ (Height)"
        ]
      },
      {
        title: "Features",
        points: [
          "With removable and adjustable shelf 2 no’s",
          "Fully S.S. with Robust Handles & Side Railing with 6” dia Castors, with 2 compartments and color strips at 4 side, for unsterile material red strips and for sterile material green strips.",
          "16g. pre-polished sheet on both side.",
          "6” P.U wheel with brakes.",
          "Door locking system with air tight locking system.",
          "Trolley structure will be mounted on heavy duty pipe structure.",
          "Loading bearing capacity will be 200kg.",
          "On both side pushing handle for easy movement of trolley."
        ]
      }
    ]
  },
  {
    id: 11,
    name: "Instrument Trolley",
    subtitle: null,
    desc: "SS 304 Instrument Trolley with heavy duty frame and locking castors.",
    specs: ["SS 304 16 gauge", "50 x 50mm Pipe Frame", "5 Inch Castors", "Locking System"],
    details: [
      {
        title: "Specifications",
        points: [
          "SS 304 16 gauge 50 X 50mm pipe frame",
          "Heavy duty caster wheel 5 Inch with locking system 3 side reeling.",
          "1 no’s under shelf heavy duty top & self with stiffener support."
        ]
      }
    ]
  },
  {
    id: 12,
    img: ["/Screenshot 2025-12-29 231332.png"],
    name: "SS 202 Flush Mounting",
    subtitle: null,
    desc: "SS 202 Flush Mounting unit.",
    specs: ["SS 202", "Flush Mounting"],
    details: [
        {
            title: "Details",
            points: ["SS 202 Flush Mounting"]
        }
    ]
  },
  {
    id: 13,
    img: ["/Screenshot 2025-12-29 231418.png"],
    name: "SS 304 CSSD tray (Perforated Tray) For Instrument sterilization",
    subtitle: null,
    desc: "Perforated SS 304 tray for instrument sterilization available in multiple sizes.",
    specs: ["SS 304", "1mm Thick", "Perforated Sheet", "Various Sizes"],
    details: [
      {
        title: "Specifications",
        points: [
          "SS304 1mm thick perforated sheet."
        ]
      },
      {
        title: "Sizes Available",
        points: [
          "1) 12 x 6 x 4",
          "2) 16 x 11 x 4",
          "3) 18 x 10 x 4",
          "4) 24 x 12 x 4"
        ]
      }
    ]
  },
  {
    id: 14,
    img: ["/Screenshot 2025-12-29 231454.png"],
    name: "Sterilizing Box, Perforated, with lid & lock",
    subtitle: null,
    desc: "Joint-less perforated sterilizing box with lid and lock, made from SS 304.",
    specs: ["SS 304 1.0mm", "Laser Cutting", "Joint Less", "With Lid & Lock"],
    details: [
      {
        title: "Material",
        points: [
          "Material: SS 304, 1.0 mm thick perforated sheet, nitrogen laser cutting and joint less box."
        ]
      },
      {
        title: "Sizes Available",
        points: [
          "1) 12 x 6 x 4",
          "2) 16 x 11 x 4",
          "3) 18 x 12 x 4",
          "4) 24 x 12 x 4"
        ]
      }
    ]
  },
  {
    id: 15,
    img: ["/Screenshot 2025-12-29 231538.png"],
    name: "SS 304 CSSD Tray -Grid Tray (Linen Basket Tray)",
    subtitle: null,
    desc: "SS 304 Grid Tray / Linen Basket Tray available in various sizes.",
    specs: ["SS 304", "Grid Tray", "Linen Basket", "Multiple Sizes"],
    details: [
      {
        title: "Sizes Available",
        points: [
          "1) 10 x 6 x 4",
          "2) 16 x 10 x 4",
          "3) 18 x 12 x 4",
          "4) 24 x 12 x 4"
        ]
      }
    ]
  }
];

/* ===========================
   COMPONENT
=========================== */
const CSSDFurniture = () => {
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
               backgroundImage: "url('/CSSD SS Furniture.png')",
               opacity: 0.15, // Corrected opacity (0.15 instead of 150 which is invalid)
           }}
         />
         {/* OVERLAY GRADIENT - Improves text readability */}
         <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/80 to-slate-50/95"></div>
      </div>

      <div className="relative z-10">
        {/* INTRO */}
        <section className="container mx-auto px-6 max-w-4xl text-center mb-16">
          <span className="inline-block mb-6 px-3 py-1 text-xs font-bold uppercase tracking-widest bg-blue-100 text-blue-800 rounded">
            Infection Control
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            CSSD <span className="text-sky-600">SS Furniture</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            High-grade Stainless Steel Furniture designed specifically for the sterile environment of CSSD, ensuring hygiene and durability.
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
                      {/* Subtitle logic kept just in case, but data sends null now */}
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
            Need Custom Furniture Solutions?
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

export default CSSDFurniture;