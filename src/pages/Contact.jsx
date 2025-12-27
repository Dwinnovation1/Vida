import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <div className="bg-slate-50 pt-20 overflow-hidden">

      {/* ================= 1. ANIMATED HERO SECTION ================= */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px]"></div>
         
         {/* Decorative Blobs */}
         <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-30"
         />
         <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-32 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"
         />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* LEFT CONTENT */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 font-medium text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Contact Us
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Let's Start a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">Conversation.</span>
              </h1>
              
              <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Whether you have a question about our CSSD solutions, need a consultation, or want to discuss a partnership, our engineering team is ready to listen.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="#contact-form" className="px-8 py-4 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 transition-all shadow-lg shadow-sky-200 flex items-center gap-2 group">
                  Send a Message
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </a>
                <div className="flex items-center gap-2 px-6 py-4 bg-white rounded-xl border border-slate-200 font-medium text-slate-700 shadow-sm">
                  <Clock size={18} className="text-sky-600" />
                  <span>Response within 24 Hrs</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
               <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Medical Team" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/40 to-transparent"></div>
               </div>
               
               {/* Floating Support Badge */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100"
               >
                 <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
                   <Phone size={20}/>
                 </div>
                 <div>
                   <div className="text-xs text-slate-500 font-medium">Support Line</div>
                   <div className="text-sm font-bold text-slate-900">+91 98765 43210</div>
                 </div>
               </motion.div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ================= 2. MAIN CONTACT FORM SECTION ================= */}
      <section id="contact" className="bg-slate-100 py-20 px-4 md:px-8 relative font-sans">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-sky-800 mb-2"
          >
            We’re Here to Assist You
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Reach out to us for product inquiries, support, or business collaborations.
          </motion.p>
        </div>

        {/* Main Flex Wrapper */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-12 items-start relative z-10">

          {/* --- LEFT: INFO BOX --- */}
          <motion.div 
            className="flex-1 w-full min-w-[320px] bg-white p-8 lg:p-10 rounded-[22px] shadow-sm border-l-[6px] border-sky-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            {/* Address */}
            <div className="flex gap-5 mb-8 pb-5 border-b border-slate-100 items-start">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="text-sky-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-sky-800 mb-1">Business Address</h3>
                <p className="text-slate-600 leading-relaxed">
                  4, Shriyash, Attrey Society,<br />
                  Opp. Sapna Hotel, Gokhalenagar Road,<br />
                  Pune 411016
                </p>
              </div>
            </div>

            {/* Phones */}
            <div className="flex gap-5 mb-8 pb-5 border-b border-slate-100 items-start">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="text-sky-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-sky-800 mb-1">Contact Numbers</h3>
                <p className="text-slate-600 leading-relaxed">
                  09689491632 <br />
                  09922960542 <br />
                  09822056593
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="text-sky-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-sky-800 mb-1">Email</h3>
                <p className="text-slate-600 leading-relaxed">sales@vidalife.in</p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: NOTEPAD FORM --- */}
          <motion.div 
            className="flex-1 w-full min-w-[350px] relative z-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            {/* Clip Holder */}
            <div className="w-full flex justify-center -mb-6 relative z-10">
              <img 
                src="/images/clip-removebg-preview.png" 
                alt="clip" 
                className="w-24 drop-shadow-md"
              />
            </div>

            {/* Notepad Paper */}
            <div className="bg-white pt-14 pb-8 px-8 lg:px-10 rounded-[18px] shadow-xl relative">
              
              {/* Tear Effect Top */}
              <div className="absolute -top-[22px] left-0 w-full h-[22px] bg-[repeating-linear-gradient(to_right,white,white_10px,#f1f5f9_10px,#f1f5f9_20px)] rounded-t-[10px] border-b-2 border-dashed border-slate-300"></div>

              <h3 className="text-center text-sky-800 text-2xl font-bold mb-6">Book Appointment</h3>

              <form className="space-y-5">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 border-2 border-slate-200 bg-slate-50 rounded-xl text-slate-700 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-400/10 transition-all"
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-4 border-2 border-slate-200 bg-slate-50 rounded-xl text-slate-700 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-400/10 transition-all"
                  required 
                />
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full p-4 border-2 border-slate-200 bg-slate-50 rounded-xl text-slate-700 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-400/10 transition-all"
                  required 
                />
                <textarea 
                  placeholder="How can we help you?" 
                  className="w-full p-4 h-32 border-2 border-slate-200 bg-slate-50 rounded-xl text-slate-700 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-400/10 transition-all resize-none"
                  required
                ></textarea>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-gradient-to-br from-sky-600 to-sky-700 text-white font-bold text-lg rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-sky-600/30 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Stethoscope Decoration */}
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              src="/images/statascope.png"
              alt="stethoscope"
              className="absolute -right-4 -bottom-10 w-48 md:w-64 lg:-right-32 lg:-bottom-20 pointer-events-none drop-shadow-xl z-30"
            />
          </motion.div>

        </div>

        {/* --- GOOGLE MAP --- */}
        <motion.div 
          className="max-w-6xl mx-auto mt-20 rounded-[24px] overflow-hidden shadow-xl border-8 border-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <iframe 
            src="https://www.google.com/maps?q=Gokhalenagar%20Road%20Pune&output=embed" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Google Map"
            className="w-full h-[400px] lg:h-[450px] grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </motion.div>

      </section>

    </div>
  );
}

export default Contact;