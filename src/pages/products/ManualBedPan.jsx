import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Droplets, Ruler, ShieldCheck, PenTool } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ManualBedPan = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
const product = {
    name: "SS 304 DU Sink Unit",
    subtitle: "Conical Sink / Flush Tank / Sluice Room Essential",
    desc: "A heavy-duty manual disposal unit designed for the safe handling of liquid medical waste. Engineered from hospital-grade SS 304 with a conical sink design to ensure efficient flushing and minimal splash-back. Essential for Dirty Utility (DU) rooms as a primary or backup disposal point.", // 
    features: [
      "Sink Size: 450mm Dia x 600mm Deep (Conical)", // 
      "Material: SS 304 16G Matt Finish", // 
      "Structure: 40x40mm SS Sq. Pipe Frame", // 
      "Hygiene: 3-Side Closed Panels", // 
      "Flushing: Integrated CPVC Flush Tank", // 
      "Sizes: Available in 3ft & 5ft Lengths" // 
    ]
  };

  // --- ANIMATION SETUP ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Product Animation
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 40 },
        {
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 85%",
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
          Manual Bed Pan <span className="text-sky-600">Management</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Reliable, non-mechanical solutions for Dirty Utility rooms. Our DU Sinks provide a 
          robust, hygienic station for the manual disposal of liquid waste, ensuring durability 
          and ease of maintenance in high-traffic wards.
        </p>
      </section>

      {/* --- SECTION 2: HERO PRODUCT SHOWCASE --- */}
      <section className="container mx-auto px-6 mb-32">
        <div 
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
        >
          {/* Image Block */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-xl group">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
                <span>[Image: DU Sink Unit]</span>
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
            
            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm border-l-2 border-slate-300 pl-3">
                   {feature}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-sm italic">
               <PenTool size={18} />
               <span>Custom plumbing configurations available</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: CONSTRUCTION BREAKDOWN --- */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Built for Heavy-Duty Use</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-sky-500">
              <Droplets className="text-sky-500 mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Hydro-Dynamics</h3>
              <p className="text-sm text-slate-600">
                [cite_start]Deep conical design (600mm) ensures rapid waste evacuation and minimizes aerosolization during flushing. [cite: 224]
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-sky-500">
              <ShieldCheck className="text-sky-500 mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Material Integrity</h3>
              <p className="text-sm text-slate-600">
                [cite_start]Constructed entirely from 16-gauge SS 304 with matt finish to resist corrosion from harsh cleaning chemicals. [cite: 224]
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-sky-500">
              <Ruler className="text-sky-500 mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Structural Stability</h3>
              <p className="text-sm text-slate-600">
                [cite_start]Mounted on a 40x40mm square pipe frame with adjustable nylon bushes for leveling on uneven wet-area floors. [cite: 224]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: PROFESSIONAL CTA --- */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Equip Your Utility Rooms
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Durable, hygienic, and compliant. Contact us for dimension drawings and installation requirements.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white font-bold rounded hover:bg-blue-800 transition-all">
            Get Quote & Dimensions <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default ManualBedPan;