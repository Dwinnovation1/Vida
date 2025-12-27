import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Settings, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AutomatedBedPan = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  // --- CLEANED PRODUCT DATA ---
  const product = {
    name: "Fully Automatic Bed Pan Washer Disinfector",
    subtitle: "PLC Controlled / Steam Disinfection / A0 Value Compliant",
    desc: "A compact, fully automated solution for the cleaning and disinfection of bed pans and urine bottles. Designed to maintain high hygiene standards (A0 Value) while reducing physical handling for nursing staff. The cycle includes cold wash, hot wash, steam disinfection, and cooling.",
    features: [
      "Cycle Time: 12 Minutes (Overall)",
      "Capacity: 1 Bed Pan / 2 Urine Bottles",
      "Disinfection: Steam at 80-90°C",
      "Operation: Automatic Foot Switch Door",
      "Material: Complete SS 304 Construction",
      "Safety: Process Lock & Temp Control"
    ]
  };

  // --- ANIMATION SETUP ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Product Animation
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white min-h-screen pt-24 font-sans">
      
      {/* --- SECTION 1: CATEGORY HEADER --- */}
      <section className="container mx-auto px-6 mb-24 text-center max-w-4xl">
        <span className="inline-block py-1 px-3 mb-6 bg-blue-50 text-blue-800 text-xs font-bold tracking-widest uppercase rounded">
          Product Category
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">
          Automated Bed Pan <span className="text-sky-600">Management</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Reducing hospital-acquired infections (HAI) starts at the ward level. 
          Our fully automated sluice room solutions ensure that human waste containers are 
          processed in a closed, standardized, and thermally disinfected cycle.
        </p>
      </section>

      {/* --- SECTION 2: HERO PRODUCT SHOWCASE (Single Focus) --- */}
      <section className="container mx-auto px-6 mb-32">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
        >
          {/* Image Block - Larger Focus */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-xl group">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
                <span>[Image: Bed Pan Washer]</span>
              </div>
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-500"></div>
            </div>
          </div>

          {/* Text Block */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-sky-600 font-bold text-sm tracking-wider uppercase mb-2">
              {product.subtitle}
            </h3>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              {product.name}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {product.desc}
            </p>
            
            {/* Detailed Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm border-l-2 border-sky-200 pl-3">
                   {feature}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-sm italic">
               <ShieldCheck size={18} />
               <span>Available with Boiler & Liquid Soap Tank</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TECHNICAL PROCESS BREAKDOWN --- */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">The 4-Stage Disinfection Cycle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Stage 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center relative">
              <div className="w-10 h-10 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h3 className="font-bold text-slate-900 mb-2">Cold Wash</h3>
              <p className="text-xs text-slate-500">Removes gross soil and organic matter using high-pressure jets.</p>
            </div>

            {/* Stage 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center relative">
               <div className="w-10 h-10 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h3 className="font-bold text-slate-900 mb-2">Hot Wash</h3>
              <p className="text-xs text-slate-500">Secondary cleaning cycle with detergent dosing for thorough cleaning.</p>
            </div>

            {/* Stage 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-sky-500 text-center relative transform scale-105">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Critical</div>
               <div className="w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h3 className="font-bold text-slate-900 mb-2">Steam Disinfection</h3>
              <p className="text-xs text-slate-500">Thermal disinfection at 80-90°C to achieve A0 lethality values.</p>
            </div>

            {/* Stage 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center relative">
               <div className="w-10 h-10 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h3 className="font-bold text-slate-900 mb-2">Cooling & Drain</h3>
              <p className="text-xs text-slate-500">Final rinse and steam evacuation for safe unloading.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: PROFESSIONAL CTA --- */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Upgrade Your Sluice Room
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Replace manual handling with automated safety. Request a technical datasheet or site visit.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white font-bold rounded hover:bg-blue-800 transition-all">
            Get Technical Specifications <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default AutomatedBedPan;