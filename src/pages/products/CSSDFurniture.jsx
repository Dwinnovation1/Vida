import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CSSDFurniture = () => {
  const containerRef = useRef(null);
  const productsRef = useRef([]);

  // --- CLEANED PRODUCT DATA (No citation tags) ---
  const products = [
    {
      id: 1,
      name: "Double Sink with Platform (Wash Station)",
      subtitle: "SS 304 / 16G Pre-Polished / Dual Basin",
      desc: "Designed for the decontamination area with a dedicated space for water and air gun cleaning. Features three-side half-closed panels and sound-deadening treatment.",
      specs: ["Size: 5 x 2 feet", "Material: 16G SS 304", "Back Panel: 6 inches"],
      img: "/images/products/double-sink.png"
    },
    {
      id: 2,
      name: "Single Sink with Platform",
      subtitle: "Close Type / High Back Panel / SS 304",
      desc: "Compact clean-up counter with a 12-inch high back panel to prevent splashing. Built with tubular stand pipes and reinforced pre-polished sheets.",
      specs: ["Size: 900x600x825 mm", "Back Panel: 300 mm", "Stand: 16G SS Pipe"],
      img: "/images/products/single-sink.png"
    },
    {
      id: 3,
      name: "Air Gun & Water Gun Unit",
      subtitle: "0.5HP Pump / Flexible Pneumatic Tubes",
      desc: "A dedicated cleaning station for hollow instruments using high-pressure water and air jets. Includes a 0.5HP pressure pump and 5-meter flexible tubes.",
      specs: ["Pump: 0.5 HP", "Stand: SS 304 Cabinet", "Tubes: 5 Mtr Flexible"],
      img: "/images/products/air-water-gun.png"
    },
    {
      id: 4,
      name: "Receiving Area Work Table",
      subtitle: "Under Shelf / Sound Deadened / Rigid Frame",
      desc: "Heavy-duty receiving table with a machine-pressed top bent twice to form thick edges. Treated for sound deadening to reduce noise in the sterile zone.",
      specs: ["Size: 3 x 5 feet", "Top: 18G SS 304", "Feet: Adjustable Rubberized"],
      img: "/images/products/work-table.png"
    },
    {
      id: 5,
      name: "Floor Mounted Storage Rack",
      subtitle: "5 Shelves / Argon Arc Welded / Heavy Duty",
      desc: "Robust storage solution for sterile packs. Features a fully welded SS frame and five pre-polished shelves mounted on heavy-duty nylon bushes.",
      specs: ["Shelves: 5 Nos", "Height: 1800 mm", "Weld: Argon Arc"],
      img: "/images/products/storage-rack.png"
    },
    {
      id: 6,
      name: "Equipment Placement Table",
      subtitle: "Weight Capacity 400kg / Matt PVC Sheet",
      desc: "Extra-strong table designed for heavy equipment placement. Supported by 40x40mm square pipes and capable of bearing up to 400kg load.",
      specs: ["Size: 2.5 x 2 feet", "Legs: 40x40mm Sq Pipe", "Load: 400kg"],
      img: "/images/products/equipment-table.png"
    },
    {
      id: 7,
      name: "Control Packing Table",
      subtitle: "Two Side Drawers / Overhead Rack",
      desc: "Specialized table for the packing area featuring dual drawers and a top shelf rack. Reinforced top edges ensure durability during heavy packing protocols.",
      specs: ["Size: 3 x 5 feet", "Storage: 2 Drawers", "Top: 18G SS 304"],
      img: "/images/products/packing-table.png"
    },
    {
      id: 8,
      name: "Linen Folding & Inspection Table",
      subtitle: "Illuminated Panel / 4 x 7 Feet",
      desc: "Designed for inspecting surgical linen with a built-in opalescent illuminated panel. The soft white laminate surface enhances lighting for detecting tears or stains.",
      specs: ["Light: 2x25W Fluorescent", "Size: 4 x 7 feet", "Frame: SS 304 Rigid"],
      img: "/images/products/linen-table.png"
    },
    {
      id: 9,
      name: "Pass Box (Static)",
      subtitle: "Mechanical Interlock / UV Light / Toughened Glass",
      desc: "Essential transfer hatch for moving materials between sterile and non-sterile zones. Features mechanical door interlocking and UV sterilization that auto-offs on opening.",
      specs: ["Size: 600mm Cube", "Safety: UV Auto-off", "Door: Interlocked"],
      img: "/images/products/pass-box.png"
    },
    {
      id: 10,
      name: "Closed Transport Trolley",
      subtitle: "Color Coded / Air Tight / 2 Compartments",
      desc: "Secure transport for sterile goods. Features green/red strips for sterile/non-sterile identification, air-tight locking, and a 200kg load capacity.",
      specs: ["Capacity: 200kg", "Wheels: 6 P.U. with Brake", "coding: Red/Green"],
      img: "/images/products/transport-trolley.png"
    },
    {
      id: 11,
      name: "Instrument Trolley",
      subtitle: "SS 304 / 3-Side Railing / Heavy Duty",
      desc: "Standard instrument trolley with a heavy-duty pipe frame and 3-side railing to prevent item fall-off. Includes an under-shelf with stiffener support.",
      specs: ["Frame: 50x50mm Pipe", "Wheels: 5 Inch Caster", "Shelf: 1 Undershelf"],
      img: "/images/products/instrument-trolley.png"
    },
    {
      id: 12,
      name: "Flush Mounting Panel",
      subtitle: "SS 202 / Seamless Finish",
      desc: "Stainless steel flush mounting panel designed for cleanroom aesthetics and wall integration, ensuring minimal dust accumulation crevices.",
      specs: ["Material: SS 202", "Finish: Flush Mount", "Grade: Medical"],
      img: "/images/products/flush-mounting.png"
    },
    {
      id: 13,
      name: "Perforated Instrument Tray",
      subtitle: "SS 304 / 1mm Thick / Multiple Sizes",
      desc: "High-grade perforated tray for effective steam penetration during sterilization. Made from 1mm thick SS 304 sheet for durability.",
      specs: ["Material: SS 304", "Thickness: 1mm", "Type: Perforated"],
      img: "/images/products/perforated-tray.png"
    },
    {
      id: 14,
      name: "Sterilizing Box with Lid",
      subtitle: "Nitrogen Laser Cut / Joint-less / Locking",
      desc: "Seamless joint-less box manufactured via nitrogen laser cutting. Includes a perforated body, lid, and lock for secure instrument handling.",
      specs: ["Technology: Laser Cut", "Body: Joint-less", "Feature: Lid & Lock"],
      img: "/images/products/sterilizing-box.png"
    },
    {
      id: 15,
      name: "Grid Tray (Linen Basket)",
      subtitle: "Wire Mesh / Lightweight / SS 304",
      desc: "Grid-style tray designed for holding linen or larger packs during the sterilization process, ensuring maximum steam exposure.",
      specs: ["Type: Grid / Basket", "Material: SS 304", "Sizes: 4 Standard Sizes"],
      img: "/images/products/grid-tray.png"
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
          CSSD Furniture & <span className="text-sky-600">Handling</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          The backbone of a sterile workflow. Our comprehensive range of <strong>SS 304/316 furniture</strong> 
          is engineered for hygiene, durability, and ergonomic efficiency. From receiving to dispatch, 
          we ensure every touchpoint maintains the chain of sterility.
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
                      <ShieldCheck size={16} className="text-sky-500" />
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-sm italic">
                  <CheckCircle2 size={16} />
                  <span>Custom sizes available for hospital layouts</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: CLINICAL VALUE SUMMARY --- */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Designed for the Sterile Zone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Material Purity</h3>
              <p className="text-sm text-slate-600">Manufactured exclusively from high-grade SS 304/316 to prevent corrosion and biofilm.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Ergonomic Design</h3>
              <p className="text-sm text-slate-600">Work heights and flow designs reduce staff fatigue during reprocessing cycles.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Workflow Logic</h3>
              <p className="text-sm text-slate-600">Furniture is categorized by "Dirty" and "Clean" zones to prevent cross-contamination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: PROFESSIONAL CTA --- */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Plan Your CSSD Layout
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Proper furniture placement is critical for compliance. Our team provides layout planning services.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white font-bold rounded hover:bg-blue-800 transition-all">
            Get Furniture Specifications <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default CSSDFurniture;