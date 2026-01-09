import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ShieldCheck, Activity, Settings } from "lucide-react";

/* ===========================
   PRODUCT DATA
=========================== */
const products = [
{
    id: 1,
    name: "Vida-Fully Automatic Horizontal Rectangular Steam Sterilizer Vertical Sliding (Automatic Door) Double Door",
    // Images array added here for ID 1
    images: ["/ID (1).png", "/ID (2).png"], 
    subtitle: "SS 316 With data storage facility up-to 1 thousand cycles",
    desc: "Fully automatic horizontal rectangular steam sterilizer with PLC based control system, thermal printer, and SS 316 construction.",
    specs: ["SS 316", "Data Storage 1000 Cycles", "PLC Automation", "Double Door"],
    details: [
      {
        title: "TECHNICAL SPECIFICATION",
        points: [
          "1) Chamber 8 mm Thickness & S. S. 316 quality.",
          "2) Doors are made of S.S. 316 quality & 12mm thickness.",
          "3) Jacket S.S. & 8 mm thickness",
          "4) 1 No. Steam generator will be of 27k.w.",
          "5) Temperature Controller 121/134 degree",
          "6) Stand S.S.",
          "7) 2 HP Vacuum Pump will be provided.",
          "8) Hydraulic steam door locking system. (Bellow plate locking system removed in our new design)",
          "9) Door hinges and clutch nut assembly will be SS 304",
          "Side Valve to Control different phases of sterilizing cycle",
          "Individual Valves For Size above 2’ X 2’ X 4’",
          "Operating pressure up to 2.2kg/cm2",
          "All SS joints are argon arc welded.",
          "Outgoing pipes are all made of S.S. 304",
          "Pneumatically operated automatic Vertical Sliding double Door with chamber inter-locking and temperature sensitive Locking facility.",
          "The doors will be reinforced with suitable steel support structure.",
          "The opening and closing of the doors must be Type: vertical Sliding Automatic Pneumatic Operated fully automatic.",
          "The door sealing is affected with the help of a silicone door gasket.The door is moved Vertical Automatic Open and Closed Vertical Sliding. (No hand will be used for Door)",
          "Compound gauge & digital gasket pressure indication available with door status on both sides"
        ]
      },
      {
        title: "Door Safety",
        points: [
          "1) Door interlock to prevent simultaneous opening of both side.",
          "2) Process lock to prevent opening of the door during process both side",
          "3) Process lock prevents the opening of the non-sterile door after successful completion of the cycle. Door obstruction safety door lock during cycle operation",
          "4) Air balloon door gasket pressure monitoring available.",
          "Two safety Valve and one temperature sensor will be present on autoclave jacket to control the steam exhaust. If pressure switch fails to do so moreover if safety valve fails to do same then present temperature Sensor will be exhaust steam through pneumatic valve.",
          "Vacuum Breaker provided for entry of sterile air from sterile zone with 0.3 micron air filter.",
          "Steam Pressure hydraulic lock device for the door.",
          "Pressure Switch provided to prevent accidental build-up of pressure",
          "Steam trap incorporated for rapid and complete elimination of air."
        ]
      },
      {
        title: "Steam Generator",
        points: [
          "Front and back plate made of SS 304 and argon arc welded.",
          "Front plate provided with SS bush for easy access of heaters.",
          "Low water cut-off system for the safety of heaters.",
          "Rapid Heating/Cooling ,",
          "On water level digital sensor in boiler will measure 6 level accurately add on if there is no water it will not start heater and during cycle also it sense accurately.",
          "High Vacuum Pump 2 HP",
          "Air Over steam Pulsing pressure system",
          "Water level indicator"
        ]
      },
      {
        title: "Automation PLC Based Control System for Steam Sterilizer with Thermal Printer",
        points: [
          "PLC for Process control.",
          "HMI 7.5” Color Touch Screen.",
          "Power Converter/Supply.",
          "Pneumatically Operated Solenoid Valves.",
          "Pressure and Vacuum Sensor (Chamber)",
          "Temp. Sensor. (PT 100) ( Chamber / Jacket )",
          "Digital displays of Chamber Pressure, temperature, cycle no., Batch no., Time & date, alarm indicator, Low water indicator.",
          "Provision of ‘error code analysis’ inbuilt"
        ]
      },
      {
        title: "Cycles",
        points: [
          "1) VLT (single cycle)",
          "To check chamber vacuum leak.",
          "Vacuum hold time start at max set point & If not goes at low set points cycle will be pass. If goes low cycle will be aborted",
          "2) Bowie & Dick (single cycle)",
          "To pass paper & hollow bowie – Dick tests.",
          "This cycle is more helpful for orthopedic surgeries due to repeated air removal pulses. It remove air pockets form hollow instruments i.e. reamers.",
          "3) Warped Cycle (four cycles)",
          "Specially used for warped instruments. Temperature and time can be change as required",
          "For Lightly warped load:",
          "Temp 121c 10 minutes holding time",
          "Temp 134c 05 minutes holding time",
          "For Heavily warped load:",
          "Temp 121c 12 minutes holding time",
          "Temp 134c 07 minutes holding time",
          "4) Unwrapped Cycle (two cycles)",
          "Specially used for un warped instruments i.e. drums only.",
          "Temperature and time can be change as required:",
          "121c 08 minutes.",
          "134c 04 minutes.",
          "5) Flash Cycle (single cycle)",
          "Used only for open instruments:",
          "121c 08 minutes.",
          "134c 04 minutes."
        ]
      },
      {
        title: "Printer & Operation",
        points: [
          "Printer: Printer that shall automatically and continuously monitor and record dates, time of day, load, identification no. and operating parameters.",
          "PLC based automation is the latest and proven technology in the field of Sterilization combining automation and –information together.",
          "It is based on real-time instrumentation, which involves Controlling and Recording together.",
          "It is very compact, user friendly and simple in operation.",
          "Operator has to press only 1 keys to start the sterilization.",
          "PLC runs the entire sterilization process cycle – Automatically with an accurate control of the process parameters.",
          "User can design or set the process parameters like temperature, pressure, and vacuum & time very easily. Design facility is password protected.",
          "Sterilization cycle includes Steam pulses (vacuum pressure-exhaust), Sterilization, chamber exhaust and Air-cooling. (or as per the requirement of the client)",
          "It provides dual – Auto/Manual facility on the same control panel.",
          "The system is user friendly, flexible, secured with password Protection."
        ]
      },
      {
        title: "General Features",
        points: [
          "1) Auto water filling High pressure pump of 0.5 HP",
          "2) Machine Works on automation through “PLC”.",
          "3) Timing in seconds & minutes can be set through HMI.",
          "4) Water is injected into the boiler under pressure.",
          "5) No need to empty the Jacket & Boiler steam.",
          "6) Saves steam, saves energy, Electricity.",
          "7) Man hour is also saved. Boiler remains full of water after the last cycle because of automation."
        ]
      },
      {
        title: "Accessories & Sizes",
        points: [
          "Loading Carriage – S.S. 304",
          "Transfer Trolley – Set of 2 No. S.S.",
          "Sizes Available –",
          "1) 450 x 450 x 1200mm",
          "2) 600 x 600 x 1200mm",
          "3) 750 x 750 x 1500mm"
        ]
      }
    ]
  },
{
    id: 2,
    images: ["/Automation_PLC__1.png", "/Automation_PLC__2_.png"], 
    name: "VIDA- Fully Automatic Horizontal Rectangular Steam Sterilizer Double Door (Manual Door) SS 316",
    subtitle: "Advanced PLC-based steam sterilizer with HMI 7.5” Color Touch Screen, automatic water filling, and detailed cycle recording.",
    desc: "Advanced PLC-based steam sterilizer with HMI 7.5” Color Touch Screen, automatic water filling, and detailed cycle recording.",
    specs: ["SS 316", "PLC Automation", "HMI 7.5”", "27 kW Generator"],
    details: [
      {
        title: "TECHNICAL SPECIFICATION",
        points: [
          "1) Chamber 8 mm Thickness & S. S. 316 quality.",
          "2) Doors are made of S.S. 316 quality & 12mm thickness.",
          "3) Jacket S.S. & 8 mm thickness",
          "4) 1 No. Steam generator will be of 27k.w.",
          "5) Temperature Controller 121/134 degree",
          "6) Stand S.S.",
          "7) 2 HP Vacuum Pump will be provided.",
          "8) Hydraulic steam door locking system. (Bellow plate locking system removed in our new design)",
          "9) Door hinges and clutch nut assembly will be SS 304",
          "Side Valve to Control different phases of sterilizing cycle",
          "Individual Valves For Size above 2’ X 2’ X 4’",
          "Operating pressure up to 2.2kg/cm2",
          "All SS joints are argon arc welded.",
          "Outgoing pipes are all made of S.S. 304",
        ]
      },
      {
        title: "Safety & Valves",
        points: [
          "Two safety Valve and one temperature sensor will be present on autoclave jacket to control the steam exhaust. If pressure switch fails to do so moreover if safety valve fails to do same then present temperature Sensor will be exhaust steam through pneumatic valve.",
          "Vacuum Breaker provided for entry of sterile air from sterile zone with 0.3 micron air filter.",
          "Steam Pressure hydraulic lock device for the door.",
          "Pressure Switch provided to prevent accidental build-up of pressure",
          "Steam trap incorporated for rapid and complete elimination of air."
        ]
      },
      {
        title: "Steam Generator",
        points: [
          "Front and back plate made of SS 304 and argon arc welded.",
          "Front plate provided with SS bush for easy access of heaters.",
          "Low water cut-off system for the safety of heaters.",
          "Rapid Heating/Cooling , On water level digital sensor in boiler will measure 6 level accurately add on if there is no water it will not start heater and during cycle also it sense accurately.",
          "High Vacuum Pump 2 HP",
          "Air Over steam Pulsing pressure system",
          "Water level indicator provided"
        ]
      },
      {
        title: "Automation PLC Based Control System for Steam Sterilizer with Thermal Printer",
        points: [
          "• PLC for Process control.",
          "- HMI 7.5” Color Touch Screen.",
          "- Power Converter/Supply.",
          "- Pneumatically Operated Solenoid Valves.",
          "- Pressure and Vacuum Sensor (Chamber)",
          "- Temp. Sensor. (PT 100) ( Chamber / Jacket )",
          "- Digital displays of Chamber Pressure, temperature, cycle no., Batch no., Time & date, alarm indicator, Low water indicator.",
          "- Provision of ‘error code analysis’ inbuilt,"
        ]
      },
      {
        title: "Cycles",
        points: [
          "1) VLT (single cycle)",
          "To check chamber vacuum leak.",
          "Vacuum hold time start at max set point & If not goes at low set points cycle will be pass. If goes low cycle will be aborted",
          "2) Bowie & Dick (single cycle)",
          "To pass paper & hollow bowie – Dick tests.",
          "This cycle is more helpful for orthopedic surgeries due to repeated air removal pulses. It remove air pockets form hollow instruments i.e. reamers.",
          "3) Warped Cycle (four cycles)",
          "Specially used for warped instruments. Temperature and time can be change as required",
          "For Lightly warped load",
          "Temp 121c 10 minutes holding time",
          "Temp 134c 05 minutes holding time",
          "For Heavily warped load",
          "Temp 121c 12 minutes holding time",
          "Temp 134c 07 minutes holding time",
          "4) Unwrapped Cycle (two cycles)",
          "Specially used for un warped instruments i.e. drums only.",
          "Temperature and time can be change as required",
          "121c 08 minutes.",
          "134c 04 minutes.",
          "5) Flash Cycle (single cycle)",
          "Used only for open instruments",
          "121c 08 minutes.",
          "134c 04 minutes."
        ]
      },
      {
        title: "Printer & Features",
        points: [
          "• Printer: Printer that shall automatically and continuously monitor and record dates, time of day, load, identification no. and operating parameters.",
          "- PLC based automation is the latest and proven technology in the field of Sterilization combining automation and –information together.",
          "- It is based on real-time instrumentation, which involves Controlling and Recording together.",
          "- It is very compact, user friendly and simple in operation.",
          "- Operator has to press only 1 keys to start the sterilization.",
          "- PLC runs the entire sterilization process cycle – Automatically with an accurate control of the process parameters.",
          "- User can design or set the process parameters like temperature, pressure, and vacuum & time very easily. Design facility is password protected.",
          "- Sterilization cycle includes Steam pulses (vacuum pressure-exhaust), Sterilization, chamber exhaust and Air-cooling. (or as per the requirement of the client)",
          "- It provides dual – Auto/Manual facility on the same control panel.",
          "- The system is user friendly, flexible, secured with password Protection."
        ]
      },
      {
        title: "General Features & Sizes",
        points: [
          "1) Auto water filling High pressure pump of 0.5 HP",
          "2) Machine Works on automation through “PLC”.",
          "3) Timing in seconds & minutes can be set through HMI.",
          "4) Water is injected into the boiler under pressure.",
          "5) No need to empty the Jacket & Boiler steam.",
          "6) Saves steam, saves energy, Electricity.",
          "7) Man hour is also saved. Boiler remains full of water after the last cycle because of automation.",
          "Loading Carriage – S.S. 304",
          "Transfer Trolley – Set of 2 No. S.S.",
          "Sizes Available – 1) 600 x 600 x 1200mm",
          "2) 750 x 750 x 1500mm"
        ]
      }
    ]
  },
{
    id: 3,
     images: ["/_Automatic_Horizontal_High___2-.png", "/_Automatic_Horizontal_High___1.png"], 
    name: "Vida- Fully Automatic Horizontal High Speed Steam Sterilizer Double Door (Manual Door)",
    subtitle: null, 
    desc: "High speed horizontal steam sterilizer with 18 KW generator, PLC automation, and rapid heating/cooling for high throughput.",
    specs: [
      "Quality: S.S. 316", 
      "18 KW Power", 
      "Temp: 134/121 Degree", 
      "High Speed", 
      "PLC Automation", 
      "Manual/Double Door"
    ],
    details: [
      {
        title: "TECHNICAL SPECIFICATION",
        points: [
          "1) Chamber 6 mm Thickness & S. S. 316 quality.",
          "3) Doors are made of S.S. 316 quality & 12mm thickness.",
          "4) Jacket S.S. & 8 mm thickness",
          "5) 1 No. Steam generator will be of 18k.w.",
          "6) Temperature Controller 121/134 degree",
          "7) Stand S.S.",
          "9) Hydraulic steam door locking system. (Bellow plate locking system removed in our new design)",
          "10) Door hinges and clutch nut assembly will be SS 304",
          "11) Limit switch provided for both side doors. Machine process will not start if door not closed properly",
          "12) 1 HP Vacuum Pump and 0.5 HP water pump.",
          "Operating pressure up to 2.2kg/cm2",
          "All SS joints are argon arc welded.",
          "Outgoing pipes are all made of S.S. 304"
        ]
      },
      {
        title: "Safety Valves & Devices",
        points: [
          "Two safety Valve and one temperature sensor will be present on autoclave jacket to control the steam exhaust. If pressure switch fails to do so moreover if safety valve fails to do same then present temperature Sensor will exhaust steam through pneumatic valve.",
          "Vacuum Breaker provided for entry of sterile air from sterile zone with 0.3 micron air filter.",
          "Steam Pressure lock hydraulic device for the door.",
          "Pressure Switch provided to prevent accidental build-up of pressure",
          "Steam trap incorporated for rapid and complete elimination of air."
        ]
      },
      {
        title: "Steam Generator",
        points: [
          "Front and back plate made of SS 304 and argon arc welded.",
          "Front plate provided with SS bush for easy access of heaters.",
          "Low water cut-off system for the safety of heaters.",
          "Rapid Heating/Cooling ,",
          "On water level digital sensor in boiler will measure 6 level accurately add on if there is no water it will not start heater and during cycle also it sensors accurately.",
          "Glass tube water level indicator provided"
        ]
      },
      {
        title: "Automation PLC Based Control System for Steam Sterilizer with Thermal Printer",
        points: [
          "• PLC for Process control.",
          "- HMI 7.5” Color Touch Screen.",
          "- Limit switch provided for both side doors. Machine process will not start if door not closed properly",
          "- 1 HP Vacuum Pump and 0.5 HP water pump.",
          "- Power Converter/Supply.",
          "- Pneumatically Operated Solenoid Valves.",
          "- Pressure and Vacuum Sensor (Chamber)",
          "- Temp. Sensor. (PT 100) ( Chamber / Jacket )",
          "- Digital displays of Chamber Pressure, temperature, cycle no., Batch no., Time & date, alarm indicator, Low water indicator.",
          "- Provision of ‘error code analysis’ inbuilt,",
          "- 1 HP Vacuum Pump and 0.5 HP water pump."
        ]
      },
      {
        title: "Cycles",
        points: [
          "1) VLT (single cycle)",
          "To check chamber vacuum leak.",
          "Vacuum hold time start at max set point & If not goes at low set points cycle will be pass. If goes low cycle will be aborted",
          "2) Bowie & Dick (single cycle)",
          "To pass paper & hollow bowie – Dick tests.",
          "This cycle is more helpful for orthopedic surgeries due to repeated air removal pulses. It remove air pockets form hollow instruments i.e. reamers.",
          "3) Warped Cycle (four cycles)",
          "Specially used for warped instruments. Temperature and time can be change as required",
          "For Lightly warped load",
          "Temp 121c 10 minutes holding time",
          "Temp 134c 05 minutes holding time",
          "For Heavily warped load",
          "Temp 121c 12 minutes holding time",
          "Temp 134c 07 minutes holding time",
          "4) Unwrapped Cycle (two cycles)",
          "Specially used for un warped instruments i.e. drums only.",
          "Temperature and time can be change as required",
          "121c 08 minutes.",
          "134c 04 minutes.",
          "5) Flash Cycle (single cycle)",
          "Used only for open instruments",
          "121c 08 minutes.",
          "134c 04 minutes."
        ]
      },
      {
        title: "Printer & Operation",
        points: [
          "• Printer: Printer that shall automatically and continuously monitor and record dates, time of day, load, identification no. and operating parameters.",
          "- PLC based automation is the latest and proven technology in the field of Sterilization combining automation and –information together.",
          "- It is based on real-time instrumentation, which involves Controlling and Recording together.",
          "- It is very compact, user friendly and simple in operation.",
          "- Operator has to press only 1 keys to start the sterilization.",
          "- PLC runs the entire sterilization process cycle – Automatically with an accurate control of the process parameters.",
          "- User can design or set the process parameters like temperature, pressure, and vacuum & time very easily. Design facility is password protected.",
          "- Sterilization cycle includes Steam pulses (vacuum pressure-exhaust), Sterilization, chamber exhaust and Air-cooling. (or as per the requirement of the client)",
          "- It provides dual – Auto/Manual facility on the same control panel.",
          "- The system is user friendly, flexible, secured with password Protection."
        ]
      },
      {
        title: "General Features",
        points: [
          "1) Auto water filling High pressure pump of 0.5 HP",
          "2) Machine Works on automation through “PLC”.",
          "3) Timing in seconds & minutes can be set through HMI.",
          "4) Water is injected into the boiler under pressure.",
          "5) No need to empty the Jacket & Boiler steam.",
          "6) Saves steam, saves energy, Electricity.",
          "7) Man hour is also saved. Boiler remains full of water after the last cycle because of automation."
        ]
      },
      {
        title: "Sizes Available",
        points: [
          "1) 16” x 24” Single Door",
          "2) 20” x 36” Single Door",
          "3) 20” x 48” Single/ Double Door"
        ]
      }
    ]
  },
  {
    id: 4,
     images: ["/Vida_E.T.O._Sterilizer__1_-removebg-preview.png", "/Vida_E.T.O._Sterilizer__2_.png"],
    name: "Vida E.T.O. Sterilizer – Fully Automatic SS 304  with Sensor",
    img: "/Vida E.T.O. Sterilizer (1).jpg",
    subtitle: "Single Door Automatic Cartridge Type with Touch Screen and Printer",
    desc: "Single Door Automatic Cartridge Type with Touch Screen and Printer with Sensor. Total Cycle Time with aeration mode is only 6 hrs.",
    specs: ["SS 304", "Automatic Cartridge", "6 Hrs Cycle", "PLC HMI"],
    details: [
        {
            title: "Product Overview",
            points: [
                "Single Door Automatic Cartridge Type with Touch Screen and Printer with Sensor",
                "Total Cycle Time with aeration mode is only 6 hrs",
                "Material of construction :- Chamber :4MM S.S. 304",
                "Outer body : S.S. 304",
                "Door : S.S. 304",
                "Operating Gas pressure : 1kg /Cm2",
                "Hydraulic pressure test : 2kg",
                "Manual operating system available in case auto system not works.",
                "Pneumatic solenoid valve for perfect Automation.",
                "Safe use of Cartridge – cartridge is punctured only when proper negative pressure build-up and VLT Test passed.",
                "Outside wall: Required heating arrangement for maintaining temperature in chamber will be provided. It will be properly insulated and covered.",
                "Locking System: Manual Safety lock provided on door.",
                "One trays of S.S. 304 will be provided for easy loading of material.",
            ]
        },
        {
            title: "Indicators & Vacuum System",
            points: [
                "Temperature Indicator: Range : 0°C to 100°C",
                "Pressure Indicator: Range: 28” vacuum to 30psig.",
                "2) Vacuum System : Vacuuming is achieved using vacuum pump",
                "3) Exhaust and Air Break: Exhaust for Sterilizer chamber gases is provided. For vacuum break air suction is provided through filter."
            ]
        },
        {
            title: "Technical Construction & Automation",
            points: [
                "Chamber: SS304 argon welded.",
                "Outer Body-S.S. 304",
                "ETO Door- S.S.304.",
                "Door locking- Manual door locking system.",
                "Door Gasket- Silicone.",
                "Pressure gauge - 63mm dial size good brand",
                "Vacuum gauge - 63mm dial size good brand",
                "Control valve – Pneumatic Solenoid Valve 2/2 way Control valve.",
                "Vacuum motor- 3ph 1.5hp watering vacuum pump.",
                "Vacuum Sensor - control Vacuum in chamber.",
                "Temp sensor - PT 100 Sensor and Thermostat sensor for extra safety mode",
                "Automation - PLC - 4.3 HMI, With thermal printer"
            ]
        },
        {
            title: "Sizes Available",
            points: [
                "1) 1 x 1 x 2ft",
                "2) 1 x 1 x 3ft",
                "3) 1 x 1 x 4ft",
                "4) 1 x 1 x 4.5ft",
                "5) 1.5 x 1.5 x 5ft"
            ]
        }
    ]
  },

  {
    id: 11,
    images: ["/Vida- Autoclave Class (2).png", "/Vida- Autoclave Class.png"],
    name: "Vida- Autoclave Class -B Series",
    
    subtitle: null,
    desc: "Compact 24L Class B autoclave with single lever locking, 8 preset programs, and USB output.",
    specs: ["Class B", "24L Capacity", "Single lever locking", "USB Output", "8 Programs"],
    details: [
      {
        title: "Specifications",
        points: [
          "Convenient and fast Single lever locking of door.",
          "Size: Ø250 x 450mm",
          "Cap: 24ltr",
          "Electrical on/off safety switch.",
          "Electric interlock for lid lock safety.",
          "Safe and sturdy chamber manufactured to ASME standards in SS 304.",
          "Bacteria filter.",
          "User Password.",
          "8 Preset & 1 User defined sterilization programs.",
          "B&D/ Helix / Vacuum Test & Cleaning Programs.",
          "USB output for data."
        ]
      },
      {
        title: "Parameters",
        points: [
          "Sterilization Temperature 105~134 °C.",
          "Sterilization Time 4 ~ 60 min.",
          "Vacuum Time 1~ 10 times.",
          "Dry time 1~ 25 Min.",
          "Front feet height adjustable.",
          "Separate fresh water & waste water tank.",
          "2 x 4.5 L Water Tanks."
        ]
      },
      {
        title: "Safety Features",
        points: [
          "•Over Pressure.",
          "•Lid Locked when Under pressure.",
          "•Electric interlock for lid lock.",
          "•Electric safety by MCB.",
          "•Audio and visual alarms."
        ]
      }
    ]
  },
  

]

/* ===========================
   COMPONENT
=========================== */
const Sterilizer = () => {
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
             <span className="text-sky-600">Sterilizers</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Sterilzer ensures safe, efficient, and high-quality sterilization and disinfection of medical instruments in healthcare facilities.
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

export default Sterilizer;