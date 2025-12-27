import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, Box, Stethoscope, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HospitalUtility = () => {
  const containerRef = useRef(null);
  const productsRef = useRef([]);

  // --- PRODUCT DATA (Source: Section E, Items 01-09) ---
  const products = [
    {
      id: 1,
      name: "Endoscope Storage Cupboard",
      subtitle: "Stores 6 Endoscopes / UV Sterilization / HEPA Filter",
      desc: "Specialized floor-mounted storage with customized hangers for 6 endoscopes. Features active air circulation through 0.3-micron filters and 2 UV lights to maintain sterility during storage. Cushioning on all sides protects delicate equipment.", // [cite: 224-227]
      specs: ["Capacity: 6 Scopes", "Filter: 0.3 Micron", "Safety: UV Sterilization"], // [cite: 224-227]
      img: "/images/products/endoscope-cupboard.png"
    },
    {
      id: 2,
      name: "SS 304 Instrument Cupboard",
      subtitle: "Toughened Laminated Glass / 5 Adjustable Shelves",
      desc: "Robust storage for surgical instruments made from SS 304 (Jindal make) 16G sheet. Features visible 6mm laminated toughened glass doors with a heavy-duty manual locking system.", // [cite: 228]
      specs: ["Size: 900x450x1800mm", "Glass: 6mm Toughened", "Shelves: 5 Adjustable"], // [cite: 228]
      img: "/images/products/instrument-cupboard.png"
    },
    {
      id: 3,
      name: "Deluxe Scrub Station (Floor Mounted)",
      subtitle: "Sensor & Foot Operated / SS 304 / 16 Gauge",
      desc: "High-grade scrub station for OT complexes. Inner and outer body constructed from 16G SS 304. Available in single (36\") or double (60\") port configurations with nylon adjustable bushes.", // [cite: 228-231]
      specs: ["Operation: Sensor + Foot", "Material: SS 304 16G", "Ports: 1 or 2"], // [cite: 228-231]
      img: "/images/products/scrub-station-floor.png"
    },
    {
      id: 4,
      name: "Wall Mounted Scrub Station",
      subtitle: "Elbow Operated / Space Saving / SS 304",
      desc: "Compact wall-mounted design ideal for tighter spaces. Elbow-operated taps minimize hand contact. Built with a matte finish SS 304 inner body for durability and easy cleaning.", // [cite: 232]
      specs: ["Type: Wall Mounted", "Operation: Elbow Cock", "Finish: Matt SS 304"], // [cite: 232]
      img: "/images/products/scrub-station-wall.png"
    },
    {
      id: 5,
      name: "Anaesthesia Drug Trolley",
      subtitle: "SS 316 Grade / 5 Drawers / Partitioned Storage",
      desc: "Premium trolley made from heavy gauge SS 316 (superior corrosion resistance). Features 5 drawers with organized partitions for medicines, injection fuse breakers, and catheter holders.", // [cite: 233-236]
      specs: ["Material: SS 316", "Drawers: 5 (Partitioned)", "Wheels: 4 Castor w/ Brake"], // [cite: 233-237]
      img: "/images/products/anaesthesia-trolley.png"
    },
    {
      id: 6,
      name: "Emergency Crash Cart",
      subtitle: "6 Drawer Modular System / Cardiac Board / IV Rod",
      desc: "Fully equipped SS 304 crash cart for emergency response. Includes 6 modular drawers, detachable trays, medicine containers, and a rear-mounted oxygen cylinder holder.", // [cite: 241]
      specs: ["Drawers: 6 Modular", "Accessory: O2 Holder", "Mobility: 100mm Castors"], // [cite: 241]
      img: "/images/products/crash-cart.png"
    },
    {
      id: 7,
      name: "Lead Apron Stand",
      subtitle: "Hangs 10 Aprons / 200kg Capacity / Mobile",
      desc: "Heavy-duty stand designed to bear the weight of radiology protection gear (up to 250kg). Constructed from round and square pipes with nylon castor wheels for mobility.", // [cite: 239-240]
      specs: ["Capacity: 10 Aprons", "Load: 200-250kg", "Wheels: Nylon w/ Brake"], // [cite: 239-240]
      img: "/images/products/apron-stand.png"
    },
    {
      id: 8,
      name: "Swab Count Holder",
      subtitle: "SS 304 / Removable Tray / OT Essential",
      desc: "Designed for counting sponges and swabs during surgery. Features a removable tray below for disposal. Built from 25mm round pipe and solid 8mm round bars.", // [cite: 238]
      specs: ["Material: SS 304", "Tray: Removable", "Frame: 18G Pipe"], // [cite: 238]
      img: "/images/products/swab-holder.png"
    }
  ];

  // --- ANIMATION SETUP ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      productsRef.current.forEach((el, index) => {
        const isEven = index % 2 === 0;
        
        gsap.fromTo(el, 
          { 
            opacity: 0, 
            x: isEven ? -100 : 100 
          },
          {
            opacity: 1, 
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
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
          Hospital Utility <span className="text-sky-600">Furniture</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Infrastructure that supports clinical precision. Our range of OT and Ward furniture 
          is engineered from <strong>High-Grade SS 304 & 316</strong> to withstand rigorous 
          cleaning protocols while ensuring ergonomic workflow for medical staff.
        </p>
      </section>

      {/* --- SECTION 2: ANIMATED PRODUCT SHOWCASE --- */}
      <section className="container mx-auto px-6 mb-32 overflow-hidden">
        <div className="flex flex-col gap-24 lg:gap-32">
          {products.map((product, index) => (
            <div 
              key={product.id}
              ref={el => productsRef.current[index] = el}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : '' 
              }`}
            >
              {/* Image Block */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm group">
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
                    <span>[Image: {product.name}]</span>
                  </div>
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-500"></div>
                </div>
              </div>

              {/* Text Block */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-sky-600 font-bold text-sm tracking-wider uppercase mb-2">
                  {product.subtitle}
                </h3>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  {product.name}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {product.desc}
                </p>
                
                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                      <Box size={16} className="text-sky-500" />
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-sm italic">
                  <Stethoscope size={16} />
                  <span>Standardized dimensions for OT integration</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: CLINICAL VALUE SUMMARY --- */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Quality That Lasts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">SS 316 Upgrades</h3>
              <p className="text-sm text-slate-600">Premium material options available for drug trolleys and critical OT furniture.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Ergonomic Fit</h3>
              <p className="text-sm text-slate-600">Scrub stations and trolleys designed to reduce strain during long shifts.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Infection Safe</h3>
              <p className="text-sm text-slate-600">Seamless welding and matt finishes prevent bacterial traps and glare.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: PROFESSIONAL CTA --- */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Complete Your OT Setup
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            From crash carts to scrub sinks, we supply the essential infrastructure for modern hospitals.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white font-bold rounded hover:bg-blue-800 transition-all">
            Request Furniture Catalog <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default HospitalUtility;