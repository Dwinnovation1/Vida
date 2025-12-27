import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ShieldCheck, Activity } from "lucide-react";

/* ===========================
   PRODUCT DATA – 15 PRODUCTS
=========================== */
const products = [
  {
    id: 1,
    name: "Horizontal Rectangular Steam Sterilizer (Auto)",
    subtitle: "Fully Automatic / Double Door / SS 316",
    desc: "Fully automatic steam sterilizer with vertical sliding doors, chamber interlocking, and PLC-based control for high-throughput CSSD environments.",
    specs: ["SS 316 Chamber", "121°C / 134°C", "PLC Controlled"],
  },
  {
    id: 2,
    name: "Horizontal Rectangular Steam Sterilizer (Manual)",
    subtitle: "Manual Door / Double Door",
    desc: "Robust manual door sterilizer designed for long-term reliability with precise pressure and temperature control.",
    specs: ["Hydraulic Lock", "27 kW Generator", "Vacuum System"],
  },
  {
    id: 3,
    name: "High Speed Steam Sterilizer",
    subtitle: "High Throughput / Rapid Cycles",
    desc: "Designed for rapid sterilization cycles with fast heating and cooling, ideal for busy hospital CSSDs.",
    specs: ["18 kW Power", "Rapid Cooling", "High Throughput"],
  },
  {
    id: 4,
    name: "ETO Sterilizer (Automatic)",
    subtitle: "Touch Screen / Cartridge Type",
    desc: "Fully automatic ETO sterilization system with integrated aeration and safety interlocks.",
    specs: ["6 Hour Cycle", "PLC HMI", "Negative Pressure Safety"],
  },
  {
    id: 5,
    name: "Washer Disinfector (Sensor Operated)",
    subtitle: "Double Door / Glass Front",
    desc: "Advanced washer-disinfector with sensor-based programs for effective removal of bio-burden.",
    specs: ["Up to 90°C", "Rotary Spray Arms", "Detergent Dosing"],
  },
  {
    id: 6,
    name: "Washer Disinfector (Manual Door)",
    subtitle: "Straight Through Model",
    desc: "Reliable washer-disinfector for washing, rinsing, and thermal disinfection of instruments.",
    specs: ["SS 304 Chamber", "Electric Heating", "PLC Control"],
  },
  {
    id: 7,
    name: "Instrument Washer",
    subtitle: "Single Door / CE Marked",
    desc: "Dedicated washer for separation of clean and dirty zones with automated sequencing.",
    specs: ["Pre-wash & Rinse", "Touch HMI", "Auto Cycles"],
  },
  {
    id: 8,
    name: "Ultrasonic Cleaner (40 L)",
    subtitle: "Digital Timer / SS 304",
    desc: "Ultrasonic cleaning system for delicate surgical instruments using uniform cavitation.",
    specs: ["45 kHz Frequency", "40 L Capacity", "0–70°C"],
  },
  {
    id: 9,
    name: "Ultrasonic Cleaner (60 L)",
    subtitle: "High Capacity / Digital Control",
    desc: "Higher-capacity ultrasonic cleaner for bulk instrument processing.",
    specs: ["60 L Capacity", "Digital Control", "SS Tank"],
  },
  {
    id: 10,
    name: "Drying Cabinet",
    subtitle: "High Temperature / SS Chamber",
    desc: "Uniform drying cabinet with controlled air circulation for surgical instruments.",
    specs: ["50–250°C", "Nichrome Heating", "Ventilation Ports"],
  },
  {
    id: 11,
    name: "Instrument cum Catheter Dryer",
    subtitle: "Dual Chamber / HEPA Filter",
    desc: "Simultaneous drying of instruments and catheters in independent chambers.",
    specs: ["Dual PLC", "HEPA Filtration", "Independent Temps"],
  },
  {
    id: 12,
    name: "Autoclave Class B – 24L",
    subtitle: "Table Top / ASME Standard",
    desc: "Compact Class B autoclave with preset sterilization programs and data export.",
    specs: ["24 L Capacity", "134°C", "USB Data Output"],
  },
  {
    id: 13,
    name: "Autoclave Class B – 45L",
    subtitle: "Large Chamber / Touch Panel",
    desc: "Higher capacity Class B autoclave suitable for clinics and small hospitals.",
    specs: ["45 L Capacity", "Touch HMI", "Vacuum Test"],
  },
  {
    id: 14,
    name: "Automatic Heat Sealing Machine",
    subtitle: "Continuous Sealing / Digital",
    desc: "Continuous sealing system for sterilization pouches with adjustable speed.",
    specs: ["0–12 m/min", "SS Body", "Embossing Option"],
  },
  {
    id: 15,
    name: "Medical Waste Sterilizer",
    subtitle: "On-site Waste Treatment",
    desc: "Sterilization system designed for safe treatment of medical waste within hospital premises.",
    specs: ["On-site Use", "High Safety", "Regulatory Compliant"],
  },
];

/* ===========================
   COMPONENT
=========================== */
const SterilizationSystems = () => {
  const containerRef = useRef(null);
  const [activeId, setActiveId] = useState(null);

  // GSAP – PAGE ENTRANCE ONLY
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
    <div ref={containerRef} className="relative bg-slate-50 pt-24 pb-32 overflow-hidden">
      
      {/* --- ADDED: UNIQUE CLINICAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Precision Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
        
        {/* Soft Clinical Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-sky-50 to-transparent opacity-80"></div>
        
        {/* Subtle Ambient Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-sky-100/20 rounded-full blur-[100px]"></div>
      </div>
      {/* ----------------------------------------- */}

      <div className="relative z-10">
        {/* INTRO */}
        <section className="container mx-auto px-6 max-w-4xl text-center mb-16">
          <span className="inline-block mb-6 px-3 py-1 text-xs font-bold uppercase tracking-widest bg-blue-100 text-blue-800 rounded">
            Infection Control
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Sterilization & <span className="text-sky-600">Washing Systems</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            A comprehensive portfolio of sterilization and washing systems designed
            for modern CSSD workflows and regulatory compliance.
          </p>
        </section>

        {/* ACCORDION */}
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col gap-4">
            {products.map((product) => {
              const isOpen = activeId === product.id;

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
                      <span className="text-xs uppercase tracking-widest text-slate-400">
                        {product.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">
                        {product.name}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-3 rounded-full bg-slate-50 text-slate-500"
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
                        <div className="grid lg:grid-cols-3 gap-10 mt-8">
                          <div className="bg-slate-100 rounded-xl aspect-[4/3] flex items-center justify-center">
                            <span className="text-slate-400 text-sm">
                              Image Placeholder
                            </span>
                          </div>

                          <div className="lg:col-span-2">
                            <h4 className="flex items-center gap-2 font-bold mb-3">
                              <Activity className="text-sky-500" size={18} />
                              Clinical Overview
                            </h4>
                            <p className="text-slate-600 mb-6">{product.desc}</p>

                            <h4 className="flex items-center gap-2 font-bold mb-3">
                              <ShieldCheck className="text-sky-500" size={18} />
                              Key Specifications
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {product.specs.map((spec, i) => (
                                <div
                                  key={i}
                                  className="bg-slate-50 p-3 rounded-lg text-sm"
                                >
                                  {spec}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
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
            Discuss Your Sterilization Requirements
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-sky-700 text-white rounded-full font-bold hover:bg-sky-800"
          >
            Schedule Technical Consultation <ArrowRight size={18} />
          </a>
        </section>
      </div>
    </div>
  );
};

export default SterilizationSystems;