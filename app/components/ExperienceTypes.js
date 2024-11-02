import { motion } from 'framer-motion';
import { Globe, Star, Users, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: "Luxury Safaris",
    tabValue: "luxury",
    description: "Experience the wilderness in ultimate comfort with exclusive lodges and private game drives",
    icon: <Globe className="w-8 h-8 text-[#C6A870]" />,
    features: ["Private Game Drives", "Luxury Lodging", "Gourmet Dining"],
    price: "From $1,000 per day",
    image: "/luxury-safari.jpg",
    testimonial: {
      text: "An unforgettable experience that exceeded all expectations",
      author: "James & Sarah, UK"
    }
  },
  {
    title: "Honeymoon Tours",
    tabValue: "honeymoon",
    description: "Create lasting memories with romantic experiences in the most exotic locations",
    icon: <Star className="w-8 h-8 text-[#C6A870]" />,
    features: ["Romantic Settings", "Private Experiences", "Luxury Accommodations"],
    price: "From $1,200 per day",
    image: "/honeymoon-tour.jpg",
    testimonial: {
      text: "The perfect blend of romance and adventure",
      author: "Michael & Emma, USA"
    }
  },
  {
    title: "Business & MICE",
    tabValue: "business",
    description: "Corporate events and retreats with a perfect blend of luxury and productivity",
    icon: <Users className="w-8 h-8 text-[#C6A870]" />,
    features: ["Conference Facilities", "Team Building", "Luxury Transport"],
    price: "Custom quotes available",
    image: "/corporate-events.jpg",
    testimonial: {
      text: "Exceptional corporate retreat experience",
      author: "Tech Corp International"
    }
  }
];

// Then in the button onClick:
<motion.button
  onClick={() => {
    document.getElementById('services-section').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setActiveTab(experience.tabValue);
  }}
  className="mt-6 w-full bg-[#0A0A0A] text-white px-6 py-3 hover:bg-[#C6A870] 
  transition-colors duration-300 flex items-center justify-center group"
>
  Learn More 
  <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
</motion.button>
export default function ExperienceTypes({ setActiveTab }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#0A0A0A]">Curated Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From exclusive game drives to romantic getaways, we craft unforgettable journeys tailored to your preferences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="relative mb-8 overflow-hidden">
                <motion.img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute top-4 right-4 bg-[#C6A870] text-white px-4 py-2">
                  {experience.price}
                </div>
              </div>

              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {experience.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-[#0A0A0A]">{experience.title}</h3>
              <p className="text-gray-600 mb-6">{experience.description}</p>

              <ul className="space-y-3 mb-6">
                {experience.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center text-gray-700"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-4 h-4 text-[#C6A870] mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-gray-50 border-l-4 border-[#C6A870]">
                <p className="text-sm italic text-gray-600 mb-2">{experience.testimonial.text}</p>
                <p className="text-sm font-medium text-[#C6A870]">{experience.testimonial.author}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('services-section').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                  // Match the title to the tab values in ServicesTabs
                  const tabValue = experience.title === "Luxury Safaris" ? "luxury"
                    : experience.title === "Honeymoon Tours" ? "honeymoon"
                    : experience.title === "Business & MICE" ? "business"
                    : "luxury"
                  setActiveTab(tabValue)
                }}
                className="mt-6 w-full bg-[#0A0A0A] text-white px-6 py-3 hover:bg-[#C6A870] 
                transition-colors duration-300 flex items-center justify-center group"
              >
                Learn More 
                <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
