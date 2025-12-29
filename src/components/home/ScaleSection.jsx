import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Building, Map, Users, Phone } from 'lucide-react';

// --- ROBUST ANIMATED COUNTER ---
const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" }); 
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref} className="inline-block min-w-[60px]">0{suffix}</span>;
};

const ScaleSection = () => {
  
  const stats = [
    {
      id: 1,
      label: "Partner Hospitals",
      number: 300,      
      suffix: "+",      
      desc: "Serving Government, Trust, and Private institutions.",
      icon: <Building className="text-sky-500" size={24} />
    },
    {
      id: 2,
      label: "Geographic Reach",
      number: 15,
      suffix: "+",
      desc: "Operational presence across major Indian states.",
      icon: <Map className="text-sky-500" size={24} />
    },
    {
      id: 3,
      label: "Daily Impact",
      number: 50,
      suffix: "k",
      desc: "Surgical instruments processed sterile every single day.",
      icon: <Users className="text-sky-500" size={24} />
    },
  ];

  return (
    <section className="w-full bg-white pt-24 pb-0">
      <div className="container mx-auto px-6">
        
        {/* --- PART 1: THE ANIMATED NUMBERS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-b border-slate-100 pb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center md:text-left group"
            >
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="p-2 bg-sky-50 rounded-lg group-hover:bg-sky-100 transition-colors">
                  {stat.icon}
                </div>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
              
              <div className="text-6xl lg:text-7xl font-light text-slate-900 mb-4 tracking-tight flex justify-center md:justify-start">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
              </div>
              
              <p className="text-slate-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- PART 2: THE CTA --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full bg-slate-900 rounded-t-3xl overflow-hidden px-8 lg:px-16 py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 mt-32 lg:mt-48"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 max-w-3xl text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to upgrade your <br/>
              <span className="text-sky-500">Infection Control Standards?</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed lg:pr-12">
              Consult with our biomedical engineers to audit your current CSSD setup. 
              We provide end-to-end support, from layout design to regulatory certification.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
              {/* CHANGED: href is now set to tel:+91... to trigger phone dialer */}
              <a 
                href="tel:+919689491632" 
                className="px-10 py-5 bg-sky-600 text-white font-bold rounded hover:bg-sky-500 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-sky-900/50 text-lg"
              >
                <Phone size={22} />
                Schedule an Audit
              </a>
          </div>

        </motion.div>
      </div>
        
    </section>
  );
};

export default ScaleSection;