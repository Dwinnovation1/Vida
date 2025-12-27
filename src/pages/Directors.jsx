import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Added for navigation
import { ArrowRight, BookOpen } from 'lucide-react'; // Added icons

const Directors = () => {

  // --- ANIMATION VARIANTS ---
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-white min-h-screen pt-24 pb-0 overflow-x-hidden font-sans">
      
      {/* =========================================================
          1. PAGE HEADER
      ========================================================= */}
      <section className="container mx-auto px-6 mb-16 lg:mb-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center border-b border-slate-100 pb-12"
        >
          <span className="inline-block py-1 px-3 mb-6 border border-sky-100 bg-sky-50 text-sky-800 text-xs font-bold tracking-[0.2em] uppercase rounded-sm">
            Board of Directors
          </span>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
            Leadership & Governance
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            At Vida Life Sciences, leadership is structured around clinical safety, operational precision, and manufacturing integrity. Our directors provide the governance required to maintain compliance with national and international medical standards.
          </p>
        </motion.div>
      </section>


      {/* =========================================================
          2. DIRECTOR 1: DR. ONKAR A. YADAV
          *** ADDED BUTTON HERE ***
      ========================================================= */}
      <section className="w-full py-16 lg:py-24 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* --- LEFT: PORTRAIT (40%) --- */}
            <motion.div 
              className="w-full lg:w-[40%] flex justify-center lg:justify-end"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-lg shadow-xl border border-slate-200">
                <div className="absolute inset-0 border-[6px] border-white/50 z-10 pointer-events-none"></div>
                <img 
                  src="/images/director_01.png" 
                  alt="Dr. Onkar A. Yadav" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
              </div>
            </motion.div>

            {/* --- RIGHT: DOSSIER (60%) --- */}
            <motion.div 
              className="w-full lg:w-[60%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
            >
              <div className="mb-4">
                <span className="text-sky-700 font-bold text-xs tracking-widest uppercase border-l-4 border-sky-600 pl-3">
                  Clinical Governance & Infection Control
                </span>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Dr. Onkar A. Yadav
              </h2>
              <h3 className="text-lg text-slate-500 font-medium mb-8">
                Director – Infection Prevention & Regulatory Affairs
              </h3>
              
              <div className="w-20 h-[1px] bg-slate-200 mb-8"></div>

              <div className="space-y-6 text-slate-600 leading-relaxed text-base lg:text-lg mb-8">
                <p>
                  Dr. Onkar A. Yadav provides clinical and regulatory leadership to Vida Life Sciences, bringing extensive experience in Infection Prevention and Control (IPC) across diverse healthcare environments. His background includes formal education in Pharmacy and Pharmacology, complemented by advanced training in medico-legal studies.
                </p>
                <p>
                  His scope of work includes the development of CSSD protocols, antimicrobial stewardship programs, and patient safety initiatives. Dr. Yadav’s governance ensures that all Vida solutions align with regulatory expectations, clinical safety standards, and long-term healthcare outcomes.
                </p>
              </div>

              {/* --- NEW BUTTON: View Research & Profile --- */}
              <Link 
                to="/directors/dr-onkar-yadav" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-sky-700 text-white font-semibold rounded hover:bg-sky-800 transition-all duration-300 shadow-lg shadow-sky-900/10 hover:shadow-sky-900/20 group"
              >
                <BookOpen size={18} className="text-sky-200" />
                <span>View Publications & Research</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================================
          3. DIRECTOR 2: MR. DHANANJAY SAWANT
      ========================================================= */}
      <section className="w-full py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* --- LEFT: DOSSIER --- */}
            <motion.div 
              className="w-full lg:w-[60%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <div className="mb-4">
                <span className="text-sky-700 font-bold text-xs tracking-widest uppercase border-l-4 border-sky-600 pl-3">
                  CSSD Design & Strategic Operations
                </span>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Mr. Dhananjay Sawant
              </h2>
              <h3 className="text-lg text-slate-500 font-medium mb-8">
                Director – Operations & Strategic Execution
              </h3>
              
              <div className="w-20 h-[1px] bg-slate-200 mb-8"></div>

              <div className="space-y-6 text-slate-600 leading-relaxed text-base lg:text-lg">
                <p>
                  Mr. Dhananjay Sawant specializes in the architectural planning, implementation, and execution of CSSD projects. His career focuses on translating complex clinical sterilization requirements into scalable, practical hospital infrastructure solutions.
                </p>
                <p>
                  With expertise spanning turnkey project management and hospital infrastructure planning, Mr. Sawant ensures that sterilization workflows operate efficiently within real-world hospital constraints. His leadership oversees equipment integration, operational optimization, and long-term maintenance partnerships.
                </p>
              </div>
            </motion.div>

            {/* --- RIGHT: PORTRAIT --- */}
            <motion.div 
              className="w-full lg:w-[40%] flex justify-center lg:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
            >
              <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-lg shadow-xl border border-slate-200 bg-white">
                <div className="absolute inset-0 border-[6px] border-white/50 z-10 pointer-events-none"></div>
                <img 
                  src="/images/director_02.png" 
                  alt="Mr. Dhananjay Sawant" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================================
          4. DIRECTOR 3: MR. SANJAY KHANDAGALE
      ========================================================= */}
      <section className="w-full py-16 lg:py-24 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* --- LEFT: PORTRAIT --- */}
            <motion.div 
              className="w-full lg:w-[40%] flex justify-center lg:justify-end"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-lg shadow-xl border border-slate-200">
                <div className="absolute inset-0 border-[6px] border-white/50 z-10 pointer-events-none"></div>
                <img 
                  src="/images/director 3rd.jpeg" 
                  alt="Mr. Sanjay Khandagale" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  onError={(e) => { e.target.src = "/images/director_02.png" }} 
                />
              </div>
            </motion.div>

            {/* --- RIGHT: DOSSIER --- */}
            <motion.div 
              className="w-full lg:w-[60%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
            >
              <div className="mb-4">
                <span className="text-sky-700 font-bold text-xs tracking-widest uppercase border-l-4 border-sky-600 pl-3">
                  Manufacturing Excellence & Quality Systems
                </span>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Mr. Sanjay Khandagale
              </h2>
              <h3 className="text-lg text-slate-500 font-medium mb-8">
                Director – Manufacturing, Equipment & Quality Systems
              </h3>
              
              <div className="w-20 h-[1px] bg-slate-200 mb-8"></div>

              <div className="space-y-6 text-slate-600 leading-relaxed text-base lg:text-lg">
                <p>
                  Mr. Sanjay Khandagale leads the manufacturing and technical operations at Vida Life Sciences, ensuring the durability and safety of all medical equipment. His academic foundation in production studies underpins a disciplined approach to material selection (SS 304/316L) and process optimization.
                </p>
                <p>
                  He oversees the validation of CSSD equipment, ensuring strict compliance with healthcare standards. Under his leadership, Vida Life Sciences has expanded its in-house manufacturing capabilities, reinforcing the organization’s commitment to quality-driven, compliant healthcare manufacturing.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================================
          5. FOOTER SUMMARY
      ========================================================= */}
      <section className="bg-slate-900 py-20 text-center px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Collective Governance Approach</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Together, the directors provide end-to-end leadership across the healthcare sterilization lifecycle—from clinical governance and infection control, through CSSD design and hospital operations, to manufacturing quality and regulatory compliance.
          </p>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
            Vida Life Sciences Pvt. Ltd. • Board of Directors
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default Directors;