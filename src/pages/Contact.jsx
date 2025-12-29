import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageSquare } from 'lucide-react';

const Contact = () => {
  
  // --- 1. STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // --- 2. HANDLE INPUT CHANGES ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- 3. HANDLE FORM SUBMIT (WHATSAPP LOGIC) ---
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the message
    const whatsappMessage = 
      `*New Appointment Request*` +
      `%0A-------------------------` +
      `%0A*Name:* ${formData.name}` +
      `%0A*Email:* ${formData.email}` +
      `%0A*Phone:* ${formData.phone}` +
      `%0A*Message:* ${formData.message}`;

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/919689491632?text=${whatsappMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

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
    <div className="bg-slate-100 pt-0 overflow-hidden font-sans">

      {/* ================= 1. NEW CINEMATIC HERO SECTION ================= */}
      <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden">
         
         {/* A. Background Image */}
         <div className="absolute inset-0 z-0">
            <img 
              // Image representing connection / business / global reach
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop" 
              alt="Contact Support Team" 
              className="w-full h-full object-cover"
            />
            {/* Dark Gradient Overlay - Fades to Slate-100 at bottom to blend with next section */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80"></div>
         </div>

         {/* B. Hero Content */}
         <div className="relative z-10 container mx-auto px-6 text-center mt-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              {/* Glass Badge */}
              <span className="inline-flex items-center gap-2 py-2 px-5 mb-8 border border-white/20 bg-white/10 backdrop-blur-md text-sky-300 text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                We are Online
              </span>
              
              {/* Main Title */}
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 drop-shadow-2xl">
                Let's Start a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                  Conversation.
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light mb-10">
                Whether you have a question about our CSSD solutions, need a technical consultation, or want to discuss a partnership, our engineering team is ready to listen.
              </p>

            </motion.div>
         </div>
      </section>


      {/* ================= 2. MAIN CONTACT FORM SECTION ================= */}
      <section id="contact" className="bg-slate-100 py-20 px-4 md:px-8 relative z-20 -mt-10">
        
        {/* Main Flex Wrapper */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-12 items-start relative z-10">

          {/* --- LEFT: INFO BOX --- */}
          <motion.div 
            className="flex-1 w-full min-w-[320px] bg-white p-8 lg:p-10 rounded-[22px] shadow-xl shadow-slate-200/50 border-t-4 border-sky-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="mb-8">
               <h3 className="text-2xl font-bold text-slate-900 mb-2">Contact Information</h3>
               <p className="text-slate-500">Reach out directly through our official channels.</p>
            </div>

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
                <p className="text-slate-600 leading-relaxed font-mono text-sm">
                  +91 9689491632 <br />
                  +91 9922960542 <br />
                  +91 9822056593
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
                <p className="text-slate-600 leading-relaxed hover:text-sky-600 transition-colors">
                  sales@vidalife.in
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: NOTEPAD FORM --- */}
          <motion.div 
            className="flex-1 w-full min-w-[350px] relative z-20 lg:-mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            {/* Clip Holder */}
            <div className="w-full flex justify-center -mb-6 relative z-10">
              <img 
                src="/images/paperclip contactpage.avif" 
                alt="clip" 
                className="w-24 drop-shadow-md"
              />
            </div>

            {/* Notepad Paper */}
            <div className="bg-white pt-14 pb-8 px-8 lg:px-10 rounded-[18px] shadow-2xl relative">
              
              {/* Tear Effect Top */}
              <div className="absolute -top-[22px] left-0 w-full h-[22px] bg-[repeating-linear-gradient(to_right,white,white_10px,#f1f5f9_10px,#f1f5f9_20px)] rounded-t-[10px] border-b-2 border-dashed border-slate-300"></div>

              <div className="flex items-center justify-center gap-2 mb-6">
                <MessageSquare className="text-sky-600" />
                <h3 className="text-center text-sky-800 text-2xl font-bold">Book Appointment</h3>
              </div>

              {/* --- FUNCTIONAL FORM --- */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="w-full p-4 border-2 border-slate-200 bg-slate-50 rounded-xl text-slate-700 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-400/10 transition-all"
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address" 
                  className="w-full p-4 border-2 border-slate-200 bg-slate-50 rounded-xl text-slate-700 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-400/10 transition-all"
                  required 
                />
                <input 
                  type="text" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number" 
                  className="w-full p-4 border-2 border-slate-200 bg-slate-50 rounded-xl text-slate-700 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-400/10 transition-all"
                  required 
                />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
              {/* --- END FORM --- */}
              
            </div>

            {/* Stethoscope Decoration */}
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              src="/images/statascope.png"
              alt="stethoscope"
              className="absolute -right-4 -bottom-10 w-48 md:w-64 lg:-right-32 lg:-bottom-20 pointer-events-none drop-shadow-xl z-30 opacity-80"
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
            src="https://maps.google.com/maps?q=Shriyash%20Attrey%20Society%20Gokhalenagar%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
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