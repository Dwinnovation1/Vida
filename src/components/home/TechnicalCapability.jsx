import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scan,
  Waves,
  Thermometer,
  PackageCheck,
  Zap,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

const TechnicalCapability = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  // --- STEP DATA ---
  const steps = [
    {
      id: "01",
      title: "Decontamination",
      desc: "Removal of bio-burden using automated washer-disinfectors and enzymatic detergents in the dirty zone.",
      icon: <Waves size={32} />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "02",
      title: "Ultrasonic Cleaning",
      desc: "High-frequency sound waves create cavitation to remove microscopic debris from complex instrument crevices.",
      icon: <Zap size={32} />,
      color: "text-amber-500",
      bg: "bg-amber-50",
      img: "/ultraimg.jpeg",
    },
    {
      id: "03",
      title: "Visual Inspection",
      desc: "Digital magnification and illuminated testing to verify cleanliness and functionality before packaging.",
      icon: <Scan size={32} />,
      color: "text-purple-600",
      bg: "bg-purple-50",
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "04",
      title: "Sterilization Cycle",
      desc: "Validated Steam or Low-Temperature sterilization cycles to achieve 100% SAL.",
      icon: <Thermometer size={32} />,
      color: "text-rose-500",
      bg: "bg-rose-50",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "05",
      title: "Sterile Storage",
      desc: "Final packaging and storage in ISO Class 8 cleanrooms to maintain the sterile barrier until surgery.",
      icon: <PackageCheck size={32} />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      img: "/sterileimg.jpeg",
    },
  ];

  // --- AUTO PLAY ---
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 5000);
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
      <div className="container mx-auto px-6 py-20 lg:py-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider mb-4">
              The Protocol
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
              5-Stage Safety Cycle
            </h3>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button onClick={handlePrev} className="p-3 rounded-full border hover:border-sky-500">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => setIsPaused(!isPaused)} className="p-3 rounded-full border text-slate-400">
              {isPaused ? <Play size={18} /> : <Pause size={18} />}
            </button>
            <button onClick={handleNext} className="p-3 rounded-full bg-sky-600 text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-full h-[550px] lg:h-[450px] bg-white rounded-3xl overflow-hidden shadow-2xl border">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col lg:flex-row"
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden">
                <motion.img
                  src={steps[activeStep].img}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 5 }}
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative">
                <div className="absolute top-4 right-6 text-9xl font-bold text-slate-50">
                  {steps[activeStep].id}
                </div>

                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl ${steps[activeStep].bg} ${steps[activeStep].color} flex items-center justify-center mb-6`}>
                    {steps[activeStep].icon}
                  </div>

                  <h4 className="text-3xl font-bold mb-4">{steps[activeStep].title}</h4>
                  <p className="text-lg text-slate-500 mb-8">{steps[activeStep].desc}</p>

                  {/* Progress */}
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      key={activeStep}
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

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`h-2 rounded-full ${activeStep === idx ? "w-10 bg-sky-600" : "w-2 bg-slate-200"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapability;
