import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const tabContent = {
  luxury: {
    title: "Luxury Safaris",
    description: "Experience the wilderness in unparalleled luxury with our premium safari packages. Enjoy exclusive lodges, private game drives, and gourmet dining under the African sky.",
    features: [
      "Private luxury vehicles and guides",
      "5-star accommodation throughout",
      "Exclusive game drive experiences",
      "Personalized itineraries",
      "Gourmet dining experiences"
    ],
    image: "/luxury-safari-service.jpg",
    price: "From $1,000 per day",
    featured: true
  },
  honeymoon: {
    title: "Honeymoon Tours",
    description: "Create lasting memories with romantic experiences in the most exotic locations. Perfect blend of adventure and luxury for newlyweds.",
    features: [
      "Private romantic dinners",
      "Luxury suite accommodations",
      "Couple's spa treatments",
      "Sunset experiences",
      "Private beach access"
    ],
    image: "/honeymoon-service.jpg",
    price: "From $1,200 per day",
    featured: false
  },
  business: {
    title: "Corporate & MICE",
    description: "Premium corporate events and retreats combining luxury accommodations with state-of-the-art business facilities.",
    features: [
      "Conference facilities",
      "Team building activities",
      "Luxury transportation",
      "Corporate dining",
      "Event planning"
    ],
    image: "/corporate-service.jpg",
    price: "Custom quotes available",
    featured: false
  },
  eco: {
    title: "Eco Luxury Tours",
    description: "Sustainable luxury travel experiences that protect and preserve the natural environment while offering premium comfort.",
    features: [
      "Eco-friendly lodges",
      "Sustainable practices",
      "Wildlife conservation",
      "Local community involvement",
      "Green transportation"
    ],
    image: "/eco-service.jpg",
    price: "From $800 per day",
    featured: false
  }
};

export default function ServicesTabs({ activeTab, setActiveTab }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="services" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-baskerville font-bold mb-4 text-[#0A0A0A]">Our Services</h2>
          <p className="font-gerlomi text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium services designed to create unforgettable experiences
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(tabContent).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-8 py-3 text-sm font-gerlomi font-medium transition-all duration-300
                ${activeTab === tab 
                  ? 'bg-[#C6A870] text-white shadow-lg' 
                  : 'bg-white text-[#0A0A0A] hover:bg-[#C6A870]/10'}
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Tours
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image Section */}
            <motion.div 
              className="relative group"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.img
                src={tabContent[activeTab].image}
                alt={tabContent[activeTab].title}
                className="w-full h-[400px] object-cover shadow-xl"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.4 }}
              />
              {tabContent[activeTab].featured && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className=" font-gerlomi absolute top-4 right-4 bg-[#C6A870] text-white px-4 py-2"
                >
                  Featured Experience
                </motion.div>
              )}
              <motion.div
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4"
                animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
              >
                <p className="font-gerlomi text-[#C6A870] font-bold">{tabContent[activeTab].price}</p>
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className=" font-gerlomi text-3xl font-bold mb-4 text-[#0A0A0A]">
                {tabContent[activeTab].title}
              </h3>
              <p className="font-baskerville text-gray-600 mb-6">
                {tabContent[activeTab].description}
              </p>
              <motion.ul className="space-y-4">
                {tabContent[activeTab].features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="font-gerlomi flex items-center text-gray-700"
                  >
                    <ChevronRight className="w-5 h-5 text-[#C6A870] mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=" font-gerlomi mt-8 bg-[#C6A870] text-white px-8 py-3 hover:bg-[#C6A870]/90 transition-colors"
              >
                Book This Experience
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}