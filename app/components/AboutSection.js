import { motion } from 'framer-motion';
import { Globe, Compass, Shield } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-baskerville mb-6 text-stone-900">
              Where Luxury Meets Adventure
            </h2>
            <p className="font-gerlomi text-stone-600 mb-8 text-lg">
              At Iconic Luxury Safaris, we curate high-end, personalized travel experiences for discerning adventurers. 
              From wildlife safaris and mountain expeditions to honeymoon retreats and eco-tourism, we transform your 
              journey into an extraordinary story of luxury and discovery.
            </p>
            <div className="space-y-8 font-gerlomi">
              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex-shrink-0 mr-4">
                  <motion.div 
                    className="w-14 h-14 rounded-none bg-[#C6A870]/10 flex items-center justify-center group-hover:bg-[#C6A870] transition-colors duration-300"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Globe className="w-7 h-7 text-[#C6A870] group-hover:text-white" />
                  </motion.div>
                </div>
                <div>
                  <h3 className=" font-baskerville font-semibold mb-2 text-stone-900 text-xl">Global Reach, Local Expertise</h3>
                  <p className="text-stone-600">Part of Travel International network, offering insider access to Kenya&apos;s finest experiences with worldwide connections</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex-shrink-0 mr-4">
                  <motion.div 
                    className="w-14 h-14 rounded-none bg-[#C6A870]/10 flex items-center justify-center group-hover:bg-[#C6A870] transition-colors duration-300"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Compass className="w-7 h-7 text-[#C6A870] group-hover:text-white" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-baskerville font-semibold mb-2 text-stone-900 text-xl">Bespoke Experiences</h3>
                  <p className="text-stone-600">From private safaris and balloon adventures to eco-tourism and honeymoon retreats in exotic locations</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex-shrink-0 mr-4">
                  <motion.div 
                    className="w-14 h-14 rounded-none bg-[#C6A870]/10 flex items-center justify-center group-hover:bg-[#C6A870] transition-colors duration-300"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Shield className="w-7 h-7 text-[#C6A870] group-hover:text-white" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-baskerville font-semibold mb-2 text-stone-900 text-xl">Conservation & Luxury</h3>
                  <p className="text-stone-600">Committed to wildlife conservation while delivering unparalleled luxury experiences across East Africa</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img 
              src="/luxury-safari-about.jpg" 
              alt="Luxury Safari Experience" 
              className="w-full h-[600px] object-cover shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-8 shadow-xl border-l-4 border-[#C6A870]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="font-baskerville text-[#C6A870] font-bold text-xl mb-2">Certified Excellence</div>
              <div className=" font-baskerville text-stone-600">Ministry of Tourism Regulated & TOSK Certified</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}