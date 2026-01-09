import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowRight, ShieldCheck, Settings, Download, CheckCircle2 } from "lucide-react";

/* ===========================
   1. PRODUCT DATA
=========================== */
const productData = {
  id: 1,
  // I added a second image here so you can see the gallery effect
  images: [
    "/Screenshot 2025-12-29 231910.png",
    "/certificate16.jpeg" // Placeholder for 2nd image
  ], 
  name: "Fully Automatic Bed Pan Washer Disinfector (Patented)",
  subtitle: "Compact Automatic Bed pan washer/Disinfector with Auto door.",
  desc: "Bed Pan Washer process is maintain A0.Value. Elegance Cabinet which acts as fully auto bed pan washer. The bed pan is put on to the door on one of the side of the cabinet and is located into the house and automatic jet pressure of water cleanses the feral matter and washes the bed pan washer. This dirty water is drained out. The heater fitted into the bed pan washer gets started at 80 to 90 degree steam temperature it disinfect the bed pan on set required time.",
  specs: ["SS 304 Body", "PLC Controller", "Auto Door", "80-90°C Disinfection", "Fast Cycle Time"],
  details: [
    {
      title: "FEATURES",
      points: [
        "PLC Controller Box",
        "30L Hot water Tank with instant integrant steam generator",
        "Steamer tank 20 L",
        "Motor 0.5 Hp for hot & cold water",
        "Soap & disinfectant solution tank",
        "At 80 to 90 degree Celsius disinfection",
        "Fast Cycle Time.",
        "Single phase operation 15 Amp supply."
      ]
    },
    {
      title: "TECHNICAL SPECIFICATION",
      points: [
        "Dimension (overall): Height – 1680 MM, Width – 750 MM, Depth – 570 MM",
        "Cycle Time: 12 Minutes (overall)",
        "FABRICATION : Complete SS 304 body , with Internal SS plumbing, SS Boiler tank ,Liquid soap tank & frame",
        "OPERATION : Automatic Press to start. With complete indication in front. Process temperature controlled.",
        "DOOR: Automatic Foot Operated switch to open and close the door. With additional safety Lock.",
        "MOUNTING : On Screwed 4 Legs (Adjustable).",
        "LOADING : Front.",
        "CAPACITY : 1 Bed Pan / 2 Urine Bottles.",
        "GROUND CLEARANCE : 140 – 150 MM (Adjustable)."
      ]
    },
    {
      title: "Cycle Process",
      points: [
        "1. Washing with cold water.",
        "2. Washing with Hot water",
        "3. Disinfectant rinsing (Disinfection)",
        "4. Steam Penetration",
        "5. Rinse with cold water"
      ]
    },
    {
      title: "Models Available",
      points: [
        "1) With capacity of 1 bed pan & 2 urine pot",
        "2) With capacity of 2 bed pan & 2 urine pot"
      ]
    }
  ]
};

/* ===========================
   2. HELPER FUNCTIONS
=========================== */
const getProductImages = (product) => {
  if (!product) return [];
  if (product.images && product.images.length > 0) return product.images;
  if (Array.isArray(product.img)) return product.img;
  if (typeof product.img === "string") return [product.img];
  return [];
};

/* ===========================
   3. MAIN COMPONENT
=========================== */
const AutomatedBedPan = () => {
  const containerRef = useRef(null);
  // NEW STATE: Tracks which image is currently selected (0 = first image)
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  
  const imgs = productData ? getProductImages(productData) : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-enter", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  if (!productData) return <div className="p-10 text-center">Loading Product...</div>;

  return (
    <div ref={containerRef} className="relative bg-white min-h-screen font-sans text-slate-800 pb-24">
      
      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 w-2/3 h-[600px] bg-sky-50/50 rounded-bl-[100px] -z-0 pointer-events-none" />

      <div className="relative z-10 pt-32 container mx-auto px-6 max-w-7xl">
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          
          {/* =========================================================
              LEFT COLUMN: IMAGE GALLERY (AMAZON STYLE)
             ========================================================= */}
          <div className="animate-enter relative">
            
            {/* 1. Main Large Image Display */}
            <div className="bg-white rounded-3xl p-4 border border-slate-100 shadow-xl shadow-slate-200/50 mb-6 relative overflow-hidden group">
               <div className="aspect-[4/3] flex items-center justify-center bg-white rounded-2xl">
                 {imgs.length > 0 ? (
                    <img 
                      // Shows the image based on the active index
                      src={imgs[activeImgIndex]} 
                      alt={productData.name} 
                      className="w-full h-full object-contain drop-shadow-lg transition-all duration-500 transform group-hover:scale-105" 
                    />
                 ) : (
                    <div className="text-slate-300 flex flex-col items-center">
                        <span className="text-4xl mb-2">📷</span>
                        <span>No Image</span>
                    </div>
                 )}
               </div>
            </div>

            {/* 2. Thumbnail Strip (The Amazon "Small Images" Row) */}
            {imgs.length > 1 && (
              <div className="flex justify-center gap-4">
                {imgs.map((imgSrc, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImgIndex(index)}
                    className={`
                      w-20 h-20 rounded-xl border-2 flex items-center justify-center p-2 bg-white transition-all duration-300
                      ${activeImgIndex === index 
                        ? "border-sky-600 shadow-lg scale-105 ring-2 ring-sky-100" // Active Style
                        : "border-slate-200 opacity-70 hover:opacity-100 hover:border-sky-300" // Inactive Style
                      }
                    `}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`Thumbnail ${index + 1}`} 
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Floating Safety Badge (Positioned absolute) */}
            <div className="absolute -top-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-slate-100 hidden md:flex items-center gap-3 z-10">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Safety</p>
                  <p className="text-xs font-bold text-slate-900">A0 Value</p>
                </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: INFO
             ========================================================= */}
          <div className="animate-enter">
            <span className="inline-block py-1 px-3 rounded bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-6">
              Infection Control
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {productData.name}
            </h1>
            
            {productData.subtitle && (
              <p className="text-lg text-slate-500 italic mb-8 border-l-4 border-sky-400 pl-4">
                {productData.subtitle}
              </p>
            )}

            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              {productData.desc}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {productData.specs?.map((spec, i) => (
                <span key={i} className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-sky-50 hover:text-sky-700 transition-colors cursor-default">
                  <CheckCircle2 size={16} className="text-sky-500" /> {spec}
                </span>
              ))}
            </div>

            
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="border-t border-slate-200 pt-16">
           <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Settings size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Comprehensive Details</h2>
           </div>
           
           {productData.details?.length > 0 ? (
             <div className="grid md:grid-cols-2 gap-8">
                {productData.details.map((section, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-6 pb-4 border-b border-slate-200 uppercase text-sm tracking-wider">
                      {section.title}
                    </h4>
                    <ul className="space-y-4">
                      {section.points?.map((point, pIdx) => (
                        <li key={pIdx} className="text-slate-600 flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
             </div>
           ) : (
             <div className="p-4 bg-yellow-50 text-yellow-700 rounded-lg">
               No details available for this product.
             </div>
           )}
        </div>

      </div>
    </div>
  );
};

export default AutomatedBedPan;