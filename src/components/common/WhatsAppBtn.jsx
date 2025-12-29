import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBtn = () => {
  // Apna mobile number yahan dalein (Country code ke saath, bina '+')
  const phoneNumber = "919689491632"; 
  const message = "Hi Vida Life Sciences, I would like to know more about your CSSD solutions.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-8 right-8 z-[9999] flex items-center justify-center group"
    >
      {/* Tooltip Text (Hover pe dikhega) */}
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-bold px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>

      {/* Button Circle */}
      <div className="relative w-16 h-16 bg-[#25D366] rounded-full shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] flex items-center justify-center hover:scale-110 transition-transform duration-300">
        
        {/* Subtle Pulse Animation */}
        <div className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-20"></div>
        
        {/* WhatsApp Icon (SVG) */}
        <FaWhatsapp size={32} className="text-white" />
      </div>
    </motion.a>
  );
};

export default WhatsAppBtn;