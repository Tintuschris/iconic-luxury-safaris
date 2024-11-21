import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import QuoteModal from "./QuoteModal";
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const menuItems = [
    { name: "Experiences", href: "#experiences" },
    { name: "Destinations", href: "#destinations" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  const handleQuoteClick = () => {
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-[#0A0A0A] text-white py-2">
        <div className="font-baskerville container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <motion.a
              href="tel:+254757701043"
              className="flex items-center hover:text-[#C6A870] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={14} className="mr-2" /> +254 757 701043
            </motion.a>
            <motion.a
              href="mailto:office@iconicluxury.co.ke"
              className="flex items-center hover:text-[#C6A870] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Mail size={14} className="mr-2" /> office@iconicluxury.co.ke
            </motion.a>
          </div>
          <div className="flex items-center space-x-4">
            <motion.a
              href="#"
              className="hover:text-[#C6A870] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              TOSK Certified
            </motion.a>
            <span>|</span>
            <motion.a
              href="#"
              className="hover:text-[#C6A870] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Kenya Tourism Board Partner
            </motion.a>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`w-full z-50 transition-all duration-500`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Desktop Logo */}
              <Image
                src="/logo-desktop.svg"
                alt="Iconic Luxury Safaris"
                width={200}
                height={50}
              />
              
              {/* Mobile Logo */}
              {/* <Image
                src="/logo-mobile.svg"
                alt="Iconic Luxury Safaris"
                width={150}
                height={40}
                className="md:hidden"
              /> */}
            </motion.div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-[#0A0A0A] font-gerlomi hover:text-[#C6A870] transition-colors relative group"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A870] transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ))}
                <motion.button
                  className="bg-[#C6A870] font-baskerville text-white px-6 py-2 hover:bg-[#C6A870]/90 transition-all duration-300 border border-[#C6A870] hover:shadow-[0_0_15px_rgba(198,168,112,0.5)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  onClick={handleQuoteClick}
                >
                  Request Quote
                </motion.button>
              </div>
            </div>

            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#0A0A0A]"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-[#0A0A0A] hover:bg-[#C6A870]/10 transition-colors"
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="w-full text-left px-3 py-2 text-[#0A0A0A] hover:bg-[#C6A870]/10 transition-colors"
              whileHover={{ x: 10 }}
              onClick={handleQuoteClick}
            >
              Request Quote
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
}
