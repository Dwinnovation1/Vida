import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, GraduationCap, Microscope, Briefcase, 
  Award, BookOpen, Users, Eye, Download, FileText 
} from 'lucide-react';

const DirectorProfileDrYadav = () => {

  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const portraitReveal = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const dividerReveal = {
    hidden: { width: 0 },
    visible: { width: "4rem", transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.1 } }
  };

  const iconReveal = {
    hidden: { opacity: 0, rotate: -15 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-28 pb-20 font-sans">
      
      {/* --- BACK NAVIGATION --- */}
      <div className="container mx-auto px-6 mb-12">
        <Link to="/directors" className="inline-flex items-center gap-2 text-sky-700 font-bold uppercase tracking-widest text-xs hover:text-sky-900 transition-colors">
          <ArrowLeft size={16} /> Back to Board of Directors
        </Link>
      </div>

      <div className="container mx-auto px-6">
        
        {/* =========================================================
            1. HERO SECTION: IDENTITY, OVERVIEW & RESOURCES
            Update: Added Background Image + Action Buttons
        ========================================================= */}
        <motion.div 
          className="relative bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100 mb-24 flex flex-col lg:flex-row gap-12 items-start overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* --- A. BACKGROUND IMAGE OVERLAY (Subtle) --- */}
          {/* Using a clean, abstract geometric pattern often used in medical brochures */}
          <div className="absolute inset-0 z-0 pointer-events-none">
             <img 
               src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2525&auto=format&fit=crop" 
               alt="Background Texture" 
               className="w-full h-full object-cover opacity-[0.03]" 
             />
             <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          </div>

          {/* --- B. PORTRAIT --- */}
          <motion.div 
            className="w-full lg:w-1/3 flex-shrink-0 relative z-10"
            variants={portraitReveal}
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 shadow-lg">
               <img 
                  src="/images/director_01.png" 
                  alt="Dr. Onkar A. Yadav" 
                  className="w-full h-full object-cover"
                />
            </div>
          </motion.div>

          {/* --- C. HEADER CONTENT & BUTTONS --- */}
          <div className="w-full lg:w-2/3 relative z-10">
            <span className="inline-block py-1 px-3 mb-4 bg-sky-50 text-sky-800 text-xs font-bold tracking-widest uppercase rounded">
              Founder Profile
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
              Dr. Onkar A. Yadav
            </h1>
            <h2 className="text-xl text-slate-500 font-medium mb-8">
              Founder, Chairman & Managing Director<br/>
              Vida Life Sciences Pvt. Ltd.
            </h2>
            
            <motion.div variants={dividerReveal} className="h-[2px] bg-sky-600 mb-8" />

            <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed text-lg mb-10">
              <p className="font-medium text-slate-700 mb-6">
                Dr. Onkar A. Yadav is the Founder, Chairman, and Managing Director of Vida Life Sciences Pvt. Ltd., a healthcare-focused organization specializing in medical sterilization, CSSD systems, and infection prevention solutions.
              </p>
              <p>
                He provides strategic, clinical, and governance leadership to the organization, guiding its growth across India and selected international markets. His leadership combines scientific training, regulatory understanding, and operational discipline.
              </p>
            </div>

            {/* --- D. ACTION BUTTONS --- */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              {/* Button 1: View Bio (No Download, Open in New Tab) */}
              <a 
                href="/documents/dr-yadav-bio.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 bg-white text-slate-700 font-semibold rounded-lg hover:border-sky-500 hover:text-sky-600 transition-all duration-300 shadow-sm"
              >
                <Eye size={18} />
                <span>View Official Bio</span>
              </a>

              {/* Button 2: Download Handbook (Forces Download) */}
              <a 
                href="/documents/sterilization-handbook.pdf" 
                download="Sterilization_Handbook_Dr_Yadav.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-700 text-white font-semibold rounded-lg hover:bg-sky-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md"
              >
                <Download size={18} />
                <span>Download Handbook</span>
                <span className="ml-1 text-sky-200 text-xs font-normal">(PDF)</span>
              </a>

            </div>

          </div>
        </motion.div>


        {/* =========================================================
            2. ACADEMIC & RESEARCH GRID
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          
          {/* EDUCATION */}
          <motion.div 
            className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-100 h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={iconReveal} className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-sky-600" size={28} />
              <h3 className="text-2xl font-bold text-slate-900">Education & Academic Foundation</h3>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-slate-600 mb-8 leading-relaxed">
              Dr. Yadav’s academic background reflects a strong foundation in pharmaceutical sciences, biomedical research, and healthcare ethics, supporting evidence-based decision-making.
            </motion.p>
            
            <ul className="space-y-4">
              {[
                "Bachelor of Pharmacy (B.Pharm) – University of Pune (2006)",
                "Postgraduate Degree in Pharmacology – University of Hertfordshire, UK (2009)",
                "Postgraduate Diploma in Medico-Legal Systems – Symbiosis International University (2021)"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  variants={fadeInUp}
                  className="flex gap-3 text-slate-700 font-medium bg-slate-50 p-4 rounded-lg border-l-4 border-sky-500 text-sm lg:text-base"
                >
                  <span className="text-sky-500 mt-0.5">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RESEARCH */}
          <motion.div 
            className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-100 h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={iconReveal} className="flex items-center gap-3 mb-6">
              <Microscope className="text-sky-600" size={28} />
              <h3 className="text-2xl font-bold text-slate-900">Scientific Contributions</h3>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-slate-600 mb-8 leading-relaxed">
              Dr. Yadav has remained actively engaged in scientific research, reinforcing his role as a science-driven healthcare leader grounded in validated research.
            </motion.p>
            
            <ul className="space-y-4 text-slate-700 text-sm lg:text-base">
              {[
                "Peer-reviewed publication on moist heat disinfection & A₀ value concepts (SCOPUS).",
                "Postgraduate research on nitric oxide modulation in immunological pathways.",
                "Undergraduate research exploring physiological responses to environmental stimuli.",
                "International academic presentations on pharmacology & molecular biology."
              ].map((item, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex gap-3 items-start">
                  <BookOpen className="shrink-0 text-sky-400 mt-1" size={20} />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>


        {/* =========================================================
            3. LEADERSHIP & EXPERTISE
        ========================================================= */}
        <motion.section 
          className="bg-sky-50/40 rounded-2xl p-8 lg:p-16 shadow-sm border border-slate-100 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Leadership Role */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-sky-600" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Leadership Role at Vida</h3>
              </div>
              
              <div className="w-12 h-[2px] bg-slate-200 mb-6"></div>

              <p className="text-slate-600 mb-6 leading-relaxed max-w-md">
                As Chairman and Managing Director, Dr. Yadav holds overall strategic and operational responsibility.
              </p>
              
              <p className="text-xs uppercase tracking-widest text-sky-700 font-bold mb-4">
                Core Responsibilities
              </p>

              <ul className="grid grid-cols-1 gap-3">
                {[
                  "Clinical governance and infection prevention oversight",
                  "Strategic planning and organizational direction",
                  "Regulatory alignment and compliance supervision",
                  "Business development and institutional partnerships",
                  "Oversight of CSSD system design and deployment",
                  "Financial discipline and long-term sustainability"
                ].map((role, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm lg:text-base border-b border-slate-200/50 pb-3 last:border-0 last:pb-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
                    {role}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Infection Prevention Expertise */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-sky-600" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Infection Prevention & CSSD</h3>
              </div>

              <div className="w-12 h-[2px] bg-slate-200 mb-6"></div>

              <p className="text-slate-600 mb-6 leading-relaxed max-w-md">
                A central focus of Dr. Yadav’s work is infection prevention and control within hospital CSSD environments.
              </p>
              
              <p className="text-xs uppercase tracking-widest text-sky-700 font-bold mb-4">
                Operational Expertise
              </p>

              <ul className="space-y-3">
                {[
                  "Designing and implementing infection control programs.",
                  "Developing sterilization workflows and monitoring systems.",
                  "Supporting hospitals in audit readiness and outbreak prevention.",
                  "Educating healthcare professionals on best practices."
                ].map((item, i) => (
                  <li key={i} className="p-4 bg-white rounded-lg text-slate-700 text-sm lg:text-base border border-slate-100 shadow-sm flex gap-3">
                     <span className="text-sky-500 mt-1">›</span>
                     {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </motion.section>


        {/* =========================================================
            4. PHILOSOPHY & GOVERNANCE
        ========================================================= */}
        <motion.div 
          className="bg-slate-900/95 rounded-2xl p-8 lg:p-20 text-white text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
           <motion.div variants={iconReveal}>
              <Users className="text-sky-400 mx-auto mb-8" size={48} />
           </motion.div>

           <h3 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">Governance & People-Centric Leadership</h3>
           
           <p className="text-slate-300 max-w-3xl mx-auto mb-12 text-lg lg:text-xl leading-[1.9] italic">
             "Dr. Yadav is recognized for a leadership philosophy emphasizing workforce stability, ethical responsibility, and long-term organizational trust. His approach prioritizes building stable teams through trust and accountability, maintaining transparency, and balancing growth objectives with human responsibility."
           </p>
           
           <div className="flex flex-wrap justify-center gap-6 text-sm font-bold tracking-[0.15em] uppercase text-sky-200/80">
             <span>Scientific Rigor</span>
             <span className="text-slate-600">•</span>
             <span>Ethical Responsibility</span>
             <span className="text-slate-600">•</span>
             <span>Empathy</span>
             <span className="text-slate-600">•</span>
             <span>Long-term Value</span>
           </div>
        </motion.div>


        {/* =========================================================
            5. CLOSING NOTE
        ========================================================= */}
        <motion.div 
          className="text-center max-w-3xl mx-auto pt-8 border-t border-slate-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <p className="text-slate-500 italic leading-[1.85] text-lg">
            "Dr. Onkar A. Yadav’s leadership reflects a commitment to regulated healthcare excellence, combining academic insight, operational discipline, and governance integrity. His work continues to shape Vida Life Sciences as a responsible partner for hospitals, healthcare institutions, and regulatory stakeholders."
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default DirectorProfileDrYadav;