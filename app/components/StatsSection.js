import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const stats = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 1000, suffix: '+', label: 'Happy Clients' },
  { value: 50, suffix: '+', label: 'Luxury Destinations' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate' }
];

const CountingNumber = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsInView(entry.isIntersecting);
          if (!entry.isIntersecting) {
            setCount(0); // Reset count when out of view
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      if (current < value) {
        current += increment;
        setCount(Math.min(Math.floor(current), value));
      } else {
        setCount(value);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="text-4xl font-bold font-serif">
      {count}{suffix}
    </span>
  );
};
export default function StatsSection() {
  return (
    <section id="stats-section" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative text-center group"
            >
              <div className="absolute inset-0 border border-[#C6A870]/20 group-hover:border-[#C6A870] transition-colors duration-300" />
              <div className="relative p-8">
                <div className="text-[#C6A870] mb-2">
                  <CountingNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#F5F5F5] text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}