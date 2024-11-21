import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'newsletter',
          data: { email }
        }),
      });

      if (response.ok) {
        setEmail('');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-white text-lg font-baskerville font-bold mb-4">Iconic Luxury Safaris</h3>
            <p className="mb-4 font-gerlomi">Creating unforgettable luxury safari experiences in East Africa.</p>
            <div className="flex space-x-4">
              {/* Social media links */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white text-lg font-baskerville font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-gerlomi">
              <li><a href="#experiences" className="font-gerlomi hover:text-[#C6A870] transition-colors">Experiences</a></li>
              <li><a href="#destinations" className="font-gerlomi hover:text-[#C6A870] transition-colors">Destinations</a></li>
              <li><a href="#about" className="hover:text-[#C6A870] transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-[#C6A870] transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white text-lg font-baskerville font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 font-gerlomi">
              <li><a href="#" className="hover:text-[#C6A870] transition-colors">Luxury Safaris</a></li>
              <li><a href="#" className="hover:text-[#C6A870] transition-colors">Honeymoon Tours</a></li>
              <li><a href="#" className="hover:text-[#C6A870] transition-colors">Corporate Travel</a></li>
              <li><a href="#" className="hover:text-[#C6A870] transition-colors">Custom Packages</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white text-lg font-baskerville font-bold mb-4">Newsletter</h4>
            <p className="mb-4 font-gerlomi">Subscribe to receive updates and exclusive offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="px-4 py-2 bg-white/5 border border-gray-700 focus:border-[#C6A870] transition-colors outline-none flex-1"
              />
              <button className="bg-[#C6A870] text-white px-4 hover:bg-[#C6A870]/90 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className=" font-gerlomi border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p>© {new Date().getFullYear()} Iconic Luxury Safaris. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
