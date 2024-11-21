import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteModal from './QuoteModal';

export default function HeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const scrollToExperiences = () => {
    const element = document.getElementById('experiences');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10" />
      <motion.video
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 20 }}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/zebra-safari.mp4" type="video/mp4" />
      </motion.video>
      
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-baskerville text-white mb-6">
              Where Luxury Meets Adventure
            </h1>
            <p className="text-xl md:text-2xl font-gerlomi text-white/90 mb-8 max-w-2xl">
              Experience East Africa&apos;s finest luxury safaris
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
                whileHover={{ scale: 1.05, backgroundColor: '#C6A870' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0A0A0A] font-gerlomi text-white px-8 py-4 text-lg transition-all border border-[#C6A870] hover:shadow-[0_0_15px_rgba(198,168,112,0.5)]"
              >
                Begin Your Journey
              </motion.button>
              <motion.button
                onClick={scrollToExperiences}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                className=" font-gerlomi border-2 border-white text-white px-8 py-4 text-lg transition-all"
              >
                View Experiences
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </section>
  );
}
