import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          data: formData
        }),
      });

      if (response.ok) {
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-baskerville mb-6">
              Start Planning Your Journey
            </h2>
            <p className="font-gerlomi text-gray-400 mb-8 text-lg">
              Let our luxury travel experts craft your perfect East African adventure
            </p>
            <div className="space-y-6 font-baskerville">
              <motion.div 
                className="flex items-center group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-[#C6A870]/10 flex items-center justify-center mr-4 group-hover:bg-[#C6A870] transition-all duration-300">
                  <Phone className="w-5 h-5 text-[#C6A870] group-hover:text-white" />
                </div>
                <span className="group-hover:text-[#C6A870] transition-colors">+254 757 701043</span>
              </motion.div>

              <motion.div 
                className="flex items-center group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-[#C6A870]/10 flex items-center justify-center mr-4 group-hover:bg-[#C6A870] transition-all duration-300">
                  <Mail className="w-5 h-5 text-[#C6A870] group-hover:text-white" />
                </div>
                <span className="group-hover:text-[#C6A870] transition-colors">office@iconicluxury.co.ke</span>
              </motion.div>

              <motion.div 
                className="flex items-center group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-[#C6A870]/10 flex items-center justify-center mr-4 group-hover:bg-[#C6A870] transition-all duration-300">
                  <MapPin className="w-5 h-5 text-[#C6A870] group-hover:text-white" />
                </div>
                <span className="group-hover:text-[#C6A870] transition-colors">Nairobi, Kenya</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 font-gerlomi">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white focus:border-[#C6A870] transition-colors outline-none"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white focus:border-[#C6A870] transition-colors outline-none"
                  />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white focus:border-[#C6A870] transition-colors outline-none"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your dream safari"
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white focus:border-[#C6A870] transition-colors outline-none resize-none"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#C6A870] text-white py-4 hover:bg-[#C6A870]/90 transition-colors flex items-center justify-center group"
              >
                Send Message
                <Send className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}