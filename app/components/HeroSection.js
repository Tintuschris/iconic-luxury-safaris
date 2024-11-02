import { motion } from 'framer-motion';

export default function HeroSection() {
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Where Luxury Meets Adventure
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Experience East Africa's finest luxury safaris with personalized itineraries and exclusive accommodations
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#C6A870' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0A0A0A] text-white px-8 py-4 text-lg transition-all border border-[#C6A870] hover:shadow-[0_0_15px_rgba(198,168,112,0.5)]"
              >
                Begin Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 text-lg transition-all"
              >
                View Experiences
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
