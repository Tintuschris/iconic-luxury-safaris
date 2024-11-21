import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    startDate: "",
    endDate: "",
    travelers: "",
    notes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "quote",
          data: formData,
        }),
      });
      if (response.ok) {
        onClose();
      }
    } catch (error) {
      console.error("Error sending quote request:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0A0A0A] p-4 sm:p-8 rounded-lg w-full max-w-2xl border border-gray-800 my-8 mx-4"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-baskerville font-bold text-white">Request a Quote</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 font-gerlomi">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white rounded-sm"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white rounded-sm"
                required
              />
            </div>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Preferred Destination"
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white rounded-sm"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white rounded-sm"
                />
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white rounded-sm"
                />
              </div>
              <input
                type="number"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                placeholder="Number of Travelers"
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white rounded-sm"
              />
            </div>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Additional Notes"
              rows="4"
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 text-white resize-none rounded-sm"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#C6A870] text-white py-4 hover:bg-[#C6A870]/90 transition-colors rounded-sm"
            >
              Submit Quote Request
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}