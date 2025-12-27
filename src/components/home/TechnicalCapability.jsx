import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Settings, Scan, Waves, Thermometer, PackageCheck, Zap, Layers, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

// --- 3D TILT CARD COMPONENT ---
const TiltCard = ({ src, title, sub }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full relative rounded-2xl overflow-hidden shadow-lg shadow-slate-200 border border-slate-100"
      >
        <img src={src} alt={title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        <motion.div 
           style={{ translateZ: 50 }}
           className="absolute bottom-6 left-6"
        >
           <div className="bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-lg shadow-sm">
             <p className="text-white font-bold text-lg">{title}</p>
             <p className="text-slate-100 text-xs uppercase tracking-wider">{sub}</p>
           </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const TechnicalCapability = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  // --- UPDATED IMAGE DATA ---
  const steps = [
    {
      id: "01",
      title: "Decontamination",
      desc: "Removal of bio-burden using automated washer-disinfectors and enzymatic detergents in the dirty zone.",
      icon: <Waves size={32} />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      // Image: Washing medical instruments / wet zone
      img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Ultrasonic Cleaning",
      desc: "High-frequency sound waves create cavitation to remove microscopic debris from complex instrument crevices.",
      icon: <Zap size={32} />,
      color: "text-amber-500",
      bg: "bg-amber-50",
      // Image: High tech lab equipment / clean stainless steel
      img: "/ultraimg.jpeg"
    },
    {
      id: "03",
      title: "Visual Inspection",
      desc: "Digital magnification and illuminated testing to verify cleanliness and functionality before packaging.",
      icon: <Scan size={32} />,
      color: "text-purple-600",
      bg: "bg-purple-50",
      // Image: Person inspecting with microscope or magnifying glass
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Sterilization Cycle",
      desc: "Validated Steam (Autoclave) or Low-Temp Plasma sterilization cycles to achieve 100% SAL.",
      icon: <Thermometer size={32} />,
      color: "text-rose-500",
      bg: "bg-rose-50",
      // Image: Industrial Autoclave / Sterile Machine Interface
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Sterile Storage",
      desc: "Final packaging and storage in ISO Class 8 Cleanrooms to maintain the sterile barrier until surgery.",
      icon: <PackageCheck size={32} />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      // Image: Sterile Blue Packaging / Cleanroom Storage
      img: "/sterileimg.jpeg"
    },
  ];

  // --- AUTO PLAY LOGIC ---
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 5000); // 5 Seconds per slide
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isPaused, steps.length]);

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <section className="bg-white overflow-hidden">
      
      {/* --- PART 1: INFRASTRUCTURE (3D Tilt Grid) --- */}
      <div className="container mx-auto px-6 py-20 lg:py-24 border-b border-slate-50">
         <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:w-1/3">
               <div className="flex items-center gap-2 mb-6">
                  <Layers className="text-sky-600" size={20} />
                  <span className="text-sky-600 font-bold tracking-widest uppercase text-xs">
                    Infrastructure
                  </span>
               </div>
               
               <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                 Machinery meets <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                   Intelligence.
                 </span>
               </h2>
               <p className="text-slate-600 text-lg leading-relaxed mb-8">
                 We operate India's most advanced CSSD hubs with segregated zones. Our facility features automated washer disinfectors and plasma sterilizers.
               </p>
            </div>

            {/* Right 3D Grid - UPDATED IMAGES */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 h-[500px]">
               <div className="h-full">
                  <TiltCard 
                    // Image: Modern Autoclave Machine
                    src="https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b93916?q=80&w=1000&auto=format&fit=crop"
                    title="Autoclave Units"
                    sub="Steam Sterilization"
                  />
               </div>
               <div className="flex flex-col gap-6 h-full">
                  <div className="h-1/2">
                    <TiltCard 
                      // Image: Clean Room Corridor
                      src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=800&auto=format&fit=crop"
                      title="Clean Room"
                      sub="ISO Class 8"
                    />
                  </div>
                  <div className="h-1/2">
                    <TiltCard 
                      // Image: Digital Microscope / Lab
                      src="https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=800&auto=format&fit=crop"
                      title="Inspection"
                      sub="Digital Verification"
                    />
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* --- PART 2: THE PROTOCOL (Auto-Play Carousel) --- */}
      <div className="container mx-auto px-6 py-20 lg:py-24">
         
         {/* Carousel Header */}
         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">
                  The Protocol
               </div>
               <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  5-Stage Safety Cycle
               </h3>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
               <button onClick={handlePrev} className="p-3 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition-all">
                  <ChevronLeft size={20} />
               </button>
               <button onClick={() => setIsPaused(!isPaused)} className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-400 transition-all">
                  {isPaused ? <Play size={18} /> : <Pause size={18} />}
               </button>
               <button onClick={handleNext} className="p-3 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition-all shadow-lg shadow-sky-200">
                  <ChevronRight size={20} />
               </button>
            </div>
         </div>

         {/* Carousel Body */}
         <div className="relative w-full h-[550px] lg:h-[450px] bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
            <AnimatePresence mode="wait">
               <motion.div
                 key={activeStep}
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -50 }}
                 transition={{ duration: 0.5 }}
                 className="absolute inset-0 flex flex-col lg:flex-row"
               >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative overflow-hidden">
                     <motion.img 
                       initial={{ scale: 1.1 }}
                       animate={{ scale: 1 }}
                       transition={{ duration: 5 }}
                       src={steps[activeStep].img} 
                       alt={steps[activeStep].title} 
                       className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent" />
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-white p-8 lg:p-16 flex flex-col justify-center relative">
                     {/* Big Number Background */}
                     <div className="absolute top-4 right-6 text-9xl font-bold text-slate-50 -z-0 select-none">
                        {steps[activeStep].id}
                     </div>

                     <div className="relative z-10">
                        <div className={`w-14 h-14 rounded-2xl ${steps[activeStep].bg} ${steps[activeStep].color} flex items-center justify-center mb-6 shadow-sm`}>
                           {steps[activeStep].icon}
                        </div>

                        <h4 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                           {steps[activeStep].title}
                        </h4>
                        
                        <p className="text-lg text-slate-500 leading-relaxed mb-8">
                           {steps[activeStep].desc}
                        </p>

                        {/* Progress Bar */}
                        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                           <motion.div 
                             key={activeStep} // Restart animation on step change
                             initial={{ width: "0%" }}
                             animate={{ width: "100%" }}
                             transition={{ duration: 5, ease: "linear" }}
                             className="h-full bg-sky-600"
                           />
                        </div>
                     </div>
                  </div>
               </motion.div>
            </AnimatePresence>
         </div>

         {/* Dot Indicators */}
         <div className="flex justify-center gap-2 mt-8">
            {steps.map((_, idx) => (
               <button 
                 key={idx}
                 onClick={() => { setActiveStep(idx); setIsPaused(true); setTimeout(() => setIsPaused(false), 8000); }}
                 className={`h-2 rounded-full transition-all duration-300 ${activeStep === idx ? 'w-10 bg-sky-600' : 'w-2 bg-slate-200 hover:bg-sky-200'}`}
               />
            ))}
         </div>

      </div>

    </section>
  );
};

export default TechnicalCapability;