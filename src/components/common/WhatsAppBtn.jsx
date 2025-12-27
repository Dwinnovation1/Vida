import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppBtn = () => {
  // Apna mobile number yahan dalein (Country code ke saath, bina '+')
  const phoneNumber = "919876543210"; 
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
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          className="fill-white"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.575 1.901.889 4.283.891l.005-.004h.002c3.181 0 5.768-2.586 5.768-5.766 0-3.18-2.587-5.767-5.768-5.767zm8.854-1.855c-2.363-2.36-5.503-3.661-8.854-3.662-6.902 0-12.519 5.617-12.519 12.519 0 2.206.575 4.363 1.666 6.255l-1.77 6.461 6.619-1.736c1.833 1.002 3.901 1.53 6.002 1.532h.005c6.902 0 12.52-5.617 12.52-12.519 0-3.349-1.303-6.493-3.668-8.85zm-4.496 11.234c-.249.697-1.442 1.332-1.979 1.332-.533 0-1.121-.188-1.579-.379-1.921-.798-3.132-2.596-3.232-2.73-.1-.132-1.309-1.732-1.309-3.303 0-1.57.822-2.339 1.121-2.653.3-.314.654-.393.874-.393.22 0 .439.008.629.053.203.048.477-.184.747.472.279.678.948 2.311 1.029 2.479.08.167.133.364.027.575-.107.211-.212.333-.42.576-.231.272-.486.289-.253.692.239.414 1.056 1.739 2.268 2.818 1.554 1.384 2.822 1.83 3.231 2.03.409.199.65.176.889-.099.239-.275 1.028-1.202 1.308-1.614.28-.412.56-.346.94-.206.379.14 2.406 1.134 2.815 1.337.409.203.681.304.777.472.096.168.096.972-.249 1.944z"/>
        </svg>
      </div>
    </motion.a>
  );
};

export default WhatsAppBtn;