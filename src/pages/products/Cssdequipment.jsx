import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ShieldCheck, Activity, Settings } from "lucide-react";

/* ===========================
   PRODUCT DATA
=========================== */
const products = [
 
  
  {
    id: 5,
    name: "Vida-Automatic Sensor Operated Door - Washer Disinfector with Dryer Double Door Fully Automatic with Delta PLC and Touch Screen with thermal printer with Visible toughened glass for both door, volume 350liters, made out of complete SS304",
    img: "/Vida-Automatic_Sensor_Operated_Door.png",
    subtitle: "Fully Automatic / Delta PLC / Touch Screen / 350 liters / SS304",
    desc: "Fully Automatic with Delta PLC and Touch Screen with thermal printer with Visible toughened glass for both door, volume 350liters, made out of complete SS304.",
    specs: ["Double Door", "Delta PLC", "350 Liters", "Sensor Operated", "Disinfection up to 90°C"],
    details: [
        {
            title: "Product Description",
            points: [
                "Double Door made up of toughened glass, to facilitate the loading process & crystal clear vision.",
                "Washer Disinfector is a very powerful tool to reduce Hospital acquired infection for patient and Hospital staff as it reduces the bio burden from the instrument thus making it safe for further handling.",
                "It can be used in wards, OT, and CSSD.",
                "Washer Disinfector is a straight through model designed to wash, rinse and disinfect all kinds of surgical instruments, anaesthetic and respiratory tubing, suction devices, bottles and other glassware/metal apparatus.",
                "The process is automatically controlled in a time regulated sequence Through a PLC with Ethernet communication port and 4” touch screen Human Machine Interface."
            ]
        },
        {
            title: "Programs & Controls",
            points: [
                "PLC also control all services, programming and statistic functions and has following programs:",
                "1. Rapid program – for lightly soiled items",
                "2. Standard Program – for medium soiled items",
                "3. Intensive care program – for heavily soiled items",
                "4. User Program – (for special requirement as per end user)"
            ]
        },
        {
            title: "Equipment Features",
            points: [
                "The disinfector is equipped with a powerful water circulation pump.",
                "Electric heater to raise the temperature of water up to 900 C [sic] for disinfection.",
                "Detachable rotating spray arms for good washing.",
                "Dosing pump with variable detergent dosing facility.",
                "Sensor to detect level in soap tank and easy refilling system.",
                "Sensor for water in chamber to avoid dry run.",
                "Double wall with insulation to run with minimum sound and heat emission.",
                "Two water inlet 1st for normal water for washing and 2nd for treated water.",
                "Overall Size: 750 mm (L) x 750 mm (B) x 1800 mm (H)"
            ]
        }
    ]
  },
  {
    id: 6,
    name: "Vida -Washer Disinfector with Dryer Double Door Fully Automatic with Delta (Manual Door) PLC and Touch Screen with thermal printer",
    img: ["/Vida_-Washer_Disinfector.png"],
    subtitle: "Volume 350liters / SS304 / Touch Screen / Thermal Printer",
    desc: "Fully Automatic with Delta PLC and Touch Screen with thermal printer, volume 350liters, made out of complete SS304 with manual door operation.",
    specs: ["350 Liters", "Delta PLC", "Manual Door", "SS 304", "Double Glass Door"],
    details: [
        {
            title: "Product Description",
            points: [
                "Double Door made up of toughened glass, to facilitate the loading process & crystal clear vision.",
                "Washer Disinfector is a very powerful tool to reduce Hospital acquired infection for patient and Hospital staff as it reduces the bio burden from the instrument thus making it safe for further handling.",
                "It can be used in wards, OT, and CSSD.",
                "Washer Disinfector is a straight through model designed to wash, rinse and disinfect all kinds of surgical instruments, anaesthetic and respiratory tubing, suction devices, bottles and other glassware/metal apparatus.",
                "The process is automatically controlled in a time regulated sequence Through a PLC with Ethernet communication port and 4” touch screen Human Machine Interface."
            ]
        },
        {
            title: "Programs & Controls",
            points: [
                "PLC also control all services, programming and statistic functions and has following programs :",
                "1. Rapid program – for lightly soiled items",
                "2. Standard Program – for medium soiled items",
                "3. Intensive care program – for heavily soiled items",
                "4. User Program – (for special requirement as per end user)"
            ]
        },
        {
            title: "Equipment Features",
            points: [
                "The disinfector is equipped with a powerful water circulation pump.",
                "Electric heater to raise the temperature of water up to 900 C [sic] for disinfection.",
                "Detachable rotating spray arms for good washing.",
                "Dosing pump with variable detergent dosing facility.",
                "Sensor to detect level in soap tank and easy refilling system.",
                "Sensor for water in chamber to avoid dry run.",
                "Double wall with insulation to run with minimum sound and heat emission.",
                "Two water inlet 1st for normal water for washing and 2nd for treated water.",
                "Overall Size: 750 mm (L) x 750 mm (B) x 1800 mm (H)"
            ]
        }
    ]
  },
  {
    id: 7,
     img: ["/Vida-Instrument_Washer_S.S._Single.png"],
    name: "Vida-Instrument Washer S.S.",
    subtitle: null,
    desc: "Washer Disinfector suitable for cleaning and disinfection of surgical instruments/goods with a process including both washing and disinfection.",
    specs: [
      "Single Door", 
      "350 Liters", 
      "Delta PLC", 
      "CE Mark", 
      "Hinged Door", 
      "Pre-wash & Rinse"
    ],
    details: [
      {
        title: "Product Overview",
        points: [
          "The process includes pre-wash, detergent wash, and hot water rinse cycles.",
          "The washing chamber is made of S.S. with a hinged-type Single door and contact parts compatible with water and chemical solutions.",
          "The unit is designed to be installed in a wall separating soiled and clean zones.",
          "Suitable for electric operation and comes complete with water circulating pump, necessary valves, and fittings.",
          "Provided with a device to control the process automatically in a time-regulated sequence, with a provision for manual operation.",
          "4” touch screen HMI."
        ]
      },
      {
        title: "Programs",
        points: [
          "PLC controls all services, programming, and statistic functions with the following programs:",
          "1. Rapid program – for lightly soiled items.",
          "2. Standard Program – for medium soiled items.",
          "3. Intensive care program – for heavily soiled items.",
          "4. User Program – for special requirements as per end user."
        ]
      },
      {
        title: "Equipment Features",
        points: [
          "The disinfector is equipped with a powerful water circulation pump.",
          "Electric heater to raise the water temperature up to 90°C for disinfection (Mix of hot water and disinfectant solution).",
          "Detachable rotating spray arms for effective washing.",
          "Dosing pump with variable detergent dosing facility.",
          "Sensor to detect level in soap tank with easy refilling system.",
          "Sensor for water in chamber to avoid dry run.",
          "Double wall with insulation to run with minimum sound and heat emission.",
          "Two water inlets: 1st for normal water (washing) and 2nd for treated water (rinsing)."
        ]
      },
      {
        title: "Specifications",
        points: [
          "Overall Size: 700 mm (L) x 725 mm (B) x 1600 mm (H)",
          "Chamber Size: 550 mm (L) x 620 mm (D) x 625 mm (H)",
          "Electrical Required: 3 KW, Single phase"
        ]
      }
    ]
  },
  {
    id: 8,
    name: "VIDA -40 Liters Capacity Ultrasonic Cleaning",
    img: ["/VIDA -40 Liters Capacity Ultrasonic Cleaning.png"],
    subtitle: null,
    desc: "Ultrasonic cleaning system with 40 Litres capacity, 500 Watts power, and 45 kHz frequency for instrument cleaning.",
    specs: ["40 L Capacity", "Type: 40 L 500 H", "500 Watts", "45 kHz", "SS 304"],
    details: [
      {
        title: "Specifications",
        points: [
          "Ultrasonic Cleaner Type: 40 L 500 H",
          "Ultrasonic Power: 500 Watts",
          "Tank Capacity: 40 Litres",
          "Without D-gassing cycle",
          "Tank Size: 550 x 300 x 200 mm",
          "Tank Frequency: 45 + 3 KHZ",
          "Electric Supply: 230 AV. 50 Hz with good earthing",
          "Heater: Will be provided with to raise the liquid temp. Up to 0-70o.",
          "Transducer: PZT sandwiched type bonded on the base of the tank",
          "Accessories: SS lid and wire Mesh Basket to handle your cleaning materials",
          "Drain: Will be provide with strainer",
          "Power Supply: 230 V AC, 3 phase with neutral & earthing"
        ]
      },
      {
        title: "Construction & Control",
        points: [
          "Tank M O C: SS 304, 16 Gauge with argon welding & buffed & polished with round corners",
          "Construction: Transduzerised tank and ultrasonic generator housing in one cabinet SS -304, 16gauge, control panel & inbuilt cooling fan.",
          "Unit suitable for Instrument Cleaning comprising the following:",
          "Control System: User friendly & will be ergonomically designed with automatic operation of the system.",
          "Automatic, Thermostatic temperature controller",
          "Solid state ultrasonic generator with electro mechanical transducer of frequency upto45 KHZ",
          "Adjustable timer for setting cycle duration, complete with control switches, indicators, overload protection."
        ]
      }
    ]
  },
  {
    id: 9,
    name: "Vida-Drying Cabinet for Drying",
    images: ["/Vida-Drying Cabinet for Drying.png", "/Vida-Drying Cabinet for Drying (2).png"],
    subtitle: null,
    desc: "S.S. chamber drying cabinet with high grade heating elements and air ventilation.",
    specs: ["S.S. Chamber", "S.S. Outer Cabinet", "Size: 24”X24”X30”H", "50ºC to 250ºC", "Air Ventilation"],
    details: [
      {
        title: "Specifications",
        points: [
          "S.S. chamber with S.S. outer cabinet.",
          "Size: 24”X24”X30”H",
          "Heating Element: shall be of high grade imported nay chrome wire, placed at bottom and both side ribs for uniform temperature.",
          "• Temperature control: Temperature controlled by imported capillary type Thermostat wide temperature 50ºC to 250ºC.",
          "Ventilation: Air ventilator ports to ventilate gases and fumes."
        ]
      }
    ]
  },
  {
    id: 10,
    name: "Vida-Instrument cum Catheter Dryer (Hot air oven)",
     img: ["/Vida-Instrument cum Catheter Dryer (Hot air oven).png"],
    subtitle: null,
    desc: "Dual door, double chamber dryer for simultaneous drying of instruments and catheters with independent controls.",
    specs: ["Dual Chamber", "Dual Door", "HEPA Filter", "PLC with HMI", "Instrument & Catheter"],
    details: [
      {
        title: "Dimensions & Capacity",
        points: [
          "Outer Size: 36” (L)X30” (W)X72” (H)",
          "Inner Size for Instrument: 15” (L)X22” (W)X51” (H)",
          "Inner Size for Catheter: 15” (L)X22” (W)X51” (H)",
          "SS wire mesh OR Perforated tray for instrument dying, both side of dryer provision for instrument and catheter simultaneously. – 8nos.",
          "For Catheter drying 2 types of differ trays for various types of tubes."
        ]
      },
      {
        title: "Features & Construction",
        points: [
          "One side is for instrument and other side for catheter, ventilator tube drying",
          "Both side are having separate control",
          "2no. PLC control with HMI.",
          "Temp. Range for Instrument- 30ºC to 250ºC & for Catheter 5ºC to 60ºC",
          "Inbuilt Internal Air circulation & ventilation.",
          "Both doors having toughened glass at the centre.",
          "Internal chamber will be SS 304, Clear bottom and rounded corners for easy cleaning.",
          "The air should be heated by an electric heating element controlled and regulated by a precision thermostat.",
          "The cabinet should be provided with a built in electric precipitator for cleaning of incoming air."
        ]
      },
      {
        title: "Controls & Safety",
        points: [
          "The current chamber temperature displayed on the display panel.",
          "HMI touch display with independent selection and display each chamber.",
          "S. S 304L. chamber with 304 S.S. outer cabinet.",
          "Separations efficiency should be 94-100% for particle size 0.01-5 and should have HEPA filter air inlet in chamber.",
          "The cabinet is equipped with alarms for ‘Cycle Complete’"
        ]
      }
    ]
  },
  
  {
    id: 12,
    images: ["/Automatic Heat Sealing Machine.png"],
    name: "Vida-Automatic Heat Sealing Machine",
    subtitle: null,
    desc: "Horizontal continuous sealing machine with digital temperature control and adjustable conveyor speed.",
    specs: ["Horizontal/Vertical", "Continuous Sealing", "Digital Temp Control", "Conveyor Speed 0~12 m/min"],
    details: [
      {
        title: "Features & Specifications",
        points: [
          "Horizontal continues Sealing Machine",
          "Size: 850X420X360 mm Vertical/Horizontal mountable models.",
          "Optional embossing facility on sealing on select models.",
          "Digital temperature control and display",
          "Conveyor Speed: 0~12 m/min",
          "V: Models mountable vertically as well as horizontally.",
          "D: Models for all types of materials including virgin materials and hospital grade materials.",
          "SS: SS construction (body)"
        ]
      }
    ]
  }
];

/* ===========================
   COMPONENT
=========================== */
const Cssdequipment = () => {
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
           animate={{ scale: 1.08, x: ["0%", "2%", "0%"] }} // Subtle zoom and slow pan
           transition={{
             duration: 25,
             repeat: Infinity,
             repeatType: "reverse",
             ease: "easeInOut",
           }}
           className="absolute inset-0 w-full h-full bg-cover bg-center opacity-15"
           style={{
               backgroundImage: "url('/CSSD Equipment\\'s.png')",
           }}
         />
         {/* Overlay gradient for better text readability over image */}
         <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/70 to-slate-50/90"></div>
      </div>

      <div className="relative z-10">
        {/* INTRO */}
        <section className="container mx-auto px-6 max-w-4xl text-center mb-16">
          <span className="inline-block mb-6 px-3 py-1 text-xs font-bold uppercase tracking-widest bg-blue-100 text-blue-800 rounded">
            Infection Control
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            CSSD <span className="text-sky-600">Equipment's</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            CSSD Equipment ensures safe, efficient, and high-quality sterilization and disinfection of medical instruments in healthcare facilities.
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
                                        
                                        {/* LOGIC TO SHOW MULTIPLE IMAGES OR SINGLE IMAGE */}
                                        {product.images && product.images.length > 0 ? (
                                            // Agar 'images' array hai (Matlab 1 se jyada photo)
                                            <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                                                {product.images.map((src, idx) => (
                                                    <img 
                                                      key={idx}
                                                      src={src} 
                                                      alt={`${product.name} ${idx + 1}`} 
                                                      className="w-full h-full object-contain flex-shrink-0 snap-center"
                                                    />
                                                ))}
                                                {/* Visual Hint ki aur photo hain */}
                                                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full opacity-70">
                                                    Swipe/Scroll ↔
                                                </div>
                                            </div>
                                        ) : product.img ? (
                                            // Agar purani tarah single 'img' hai
                                            <img 
                                              src={product.img} 
                                              alt={product.name} 
                                              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            // Agar koi photo nahi hai
                                            <span className="text-slate-400 text-sm">Image Placeholder</span>
                                        )}
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
                          /* FALLBACK - Should not be reached with current data */
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
            Discuss Your Sterilization Requirements
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-sky-700 text-white rounded-full font-bold hover:bg-sky-800 transition-colors"
          >
            Schedule Technical Consultation <ArrowRight size={18} />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Cssdequipment;