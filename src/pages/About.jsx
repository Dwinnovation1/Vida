import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Target, Activity, Users, Award, Briefcase, ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- 3D SHUTTER CARD COMPONENT ---
const ShutterCard = ({ icon, title, desc, delay, onOpen, media }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="relative h-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden group cursor-pointer"
    >
      {/* SHUTTER OVERLAY (Blue Background) */}
      <div className="absolute inset-0 bg-sky-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

      <div className="relative z-10 p-10 flex flex-col h-full">
        {/* ICON */}
        <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-sky-600 transition-colors duration-300 shadow-sm group-hover:shadow-lg">
          {icon}
        </div>

        {/* CONTENT */}
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed group-hover:text-sky-100 transition-colors duration-300">
          {desc}
        </p>

        {/* ARROW ICON (Appears on Hover) */}
        <div className="mt-auto pt-8 flex justify-end opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
           <button
             onClick={() => onOpen && onOpen(media)}
             className="p-2 bg-white/20 rounded-full text-white focus:outline-none"
             aria-label={`Open media for ${title}`}
           >
             <ArrowRight size={20} />
           </button>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const videoRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMedia, setModalMedia] = useState({ video: '/aboutbg.mp4', image: '/aboutsafety.jpeg' });
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    },
  };

  const imageReveal = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen overflow-hidden relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1, x: "0%" }}
            animate={{ x: "-10%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
            className="absolute inset-0 w-[120%] h-full"
          >
             <img 
               src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop" 
               alt="Modern Medical Facility" 
               className="w-full h-full object-cover"
             />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-6 relative z-10 pt-20"
          >
            <div className="max-w-5xl">
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <div className="h-[3px] w-16 bg-sky-500 rounded-full"></div>
                <span className="text-sky-400 font-bold uppercase tracking-[0.2em] text-sm">
                  Corporate Profile
                </span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 drop-shadow-lg">
                Precision. Discipline.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">
                  Institutional Trust.
                </span>
              </motion.h1>
              <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-8 items-start">
                <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-3xl font-light drop-shadow-md">
                  Vida Life Sciences Pvt. Ltd. is a healthcare-focused organization established in 2011, operating exclusively in the field of <strong className="text-white font-semibold">medical sterilization, CSSD solutions</strong>, and <strong className="text-white font-semibold">healthcare equipment manufacturing.</strong>
                </p>
              </motion.div>
            </div>
          </motion.div>
      </section>

      {/* 2. OUR PURPOSE */}
      <section className="container mx-auto px-6 my-32 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Our Purpose in Healthcare
              </motion.h2>
              <motion.p variants={itemVariants} className="text-slate-600 text-lg leading-relaxed mb-8">
                Healthcare environments demand precision, discipline, and accountability. Vida Life Sciences exists to support these requirements by providing structured sterilization solutions and medical systems that align with infection prevention protocols.
              </motion.p>
              <motion.ul variants={containerVariants} className="space-y-5">
                {[
                  "Supporting patient safety through reliable sterilization practices",
                  "Enabling hospitals to maintain compliant CSSD operations",
                  "Delivering systems that are repeatable, auditable, and sustainable"
                ].map((item, i) => (
                  <motion.li key={i} variants={itemVariants} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors">
                    <div className="bg-sky-100 p-2 rounded-full text-sky-600 shrink-0">
                      <Target size={20} />
                    </div>
                    <span className="text-slate-700 font-medium pt-1">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageReveal}
              className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img 
                src="/aboutsafety.jpeg" 
                alt="Medical Purpose" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-mono text-sm opacity-80 mb-1">EST. 2011</p>
                  <h3 className="text-2xl font-bold">Uncompromising Safety</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO (With Visible Background Image) */}
      <section className="w-full py-32 relative overflow-hidden">
        
        {/* --- Background Image --- */}
        <div className="absolute inset-0 w-full h-full z-0">
            <img 
              // Medical/Manufacturing Background Image
              src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=2000&auto=format&fit=crop" 
              alt="Manufacturing Background" 
              className="w-full h-full object-cover" 
            />
        </div>
        
        {/* --- White Overlay (Decreased Opacity so image shows through) --- */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">What We Do</h2>
            <p className="text-lg text-slate-700 font-medium max-w-2xl mx-auto">
              Operating across the complete lifecycle of hospital sterilization and CSSD solutions.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ShutterCard
               delay={0}
               icon={<Briefcase size={32} />}
               title="CSSD Manufacturing"
               desc="Manufacturing of medical devices, CSSD equipment, and SS 304/316L hospital furniture."
               media={{ video: '/aboutbg.mp4', image: '/aboutsafety.jpeg' }}
               onOpen={(m) => { setModalMedia(m); setModalOpen(true); }}
            />
            <ShutterCard
               delay={0.2}
               icon={<Activity size={32} />}
               title="Turnkey Projects"
               desc="End-to-end CSSD project planning, design, and implementation for hospitals."
               media={{ video: '/aboutbg.mp4', image: '/aboutsafety.jpeg' }}
               onOpen={(m) => { setModalMedia(m); setModalOpen(true); }}
            />
            <ShutterCard
               delay={0.4}
               icon={<ShieldCheck size={32} />}
               title="Operational Support"
               desc="Equipment maintenance, AMC/CMC services, and healthcare staff training."
               media={{ video: '/aboutbg.mp4', image: '/aboutsafety.jpeg' }}
               onOpen={(m) => { setModalMedia(m); setModalOpen(true); }}
            />
          </div>
        </div>
      </section>

      {/* Media Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl max-w-5xl w-[95%] max-h-[90vh] overflow-auto p-6 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 bg-slate-100 rounded-full p-2"
              aria-label="Close media modal"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full h-60 md:h-[400px] bg-black rounded-lg overflow-hidden">
                <video src={modalMedia.video} controls className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-60 md:h-[400px] bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={modalMedia.image} alt="Media" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- 4. VIDEO SECTION (Separate Section Below What We Do) --- */}
      <section ref={videoRef} className="w-full bg-slate-50 pb-32 overflow-hidden">
         <motion.div 
            style={{ scale, opacity }}
            className="container mx-auto px-0 md:px-6 relative z-10"
         >
            <div className="w-full aspect-video rounded-none md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300 border-4 border-white relative group">
               <video
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="w-full h-full object-cover"
               >
                 <source src="/aboutbg.mp4" type="video/mp4" />
               </video>
               
               {/* Optional: Play Icon Overlay */}
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500">
                     <PlayCircle size={40} fill="currentColor" className="text-white/80" />
                  </div>
               </div>
            </div>
         </motion.div>
      </section>

      {/* 5. REGULATORY & SCALE (Unchanged) */}
      <section className="container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-sky-600" size={28} />
              <h3 className="text-3xl font-bold text-slate-900">Regulatory Commitment</h3>
            </div>
            <div className="prose prose-lg text-slate-600">
              <p>
                Vida Life Sciences functions within a regulated medical framework and holds authorization to manufacture specified medical devices under the <strong className="text-slate-900">Indian Medical Devices Rules</strong>.
              </p>
              <p>
                We operate with established quality management standards that support both national and international healthcare requirements. This compliance-driven approach ensures reliability and consistency.
              </p>
            </div>
            <Link to="/certificates" className="group inline-flex items-center mt-8 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-sky-600 transition-all">
              <span>View Certifications</span>
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-sky-600" size={28} />
              <h3 className="text-3xl font-bold text-slate-900">Scale & Presence</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg">
              Over the years, Vida Life Sciences has supported <strong className="text-slate-900">300+ healthcare institutions</strong>, including Government hospitals, medical colleges, and Trust organizations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center hover:bg-sky-50 transition-colors">
                <div className="text-4xl font-bold text-sky-600 mb-2">300+</div>
                <div className="text-xs uppercase font-bold text-slate-400 tracking-widest">Institutions</div>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center hover:bg-sky-50 transition-colors">
                <div className="text-4xl font-bold text-sky-600 mb-2">100%</div>
                <div className="text-xs uppercase font-bold text-slate-400 tracking-widest">Medical Focus</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. CLOSING (Unchanged) */}
      <section className="w-full bg-[#0B1120] text-slate-300 py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-sky-900/20 blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
              Working with Vida Life Sciences
            </h2>
            <p className="text-xl leading-relaxed mb-12 text-slate-400 font-light">
              The organization positions itself not as a short-term vendor, but as a <span className="text-white font-medium">responsible healthcare partner</span>. 
              We offer stability, compliance-first operations, and a long-term service orientation aligned with your patient safety objectives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/contact" className="px-8 py-4 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-900/50 transition-all transform hover:-translate-y-1">
                 Start a Conversation
               </Link>
               <Link to="/directors" className="px-8 py-4 bg-transparent border border-slate-700 text-white font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all transform hover:-translate-y-1">
                 Meet Leadership
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;