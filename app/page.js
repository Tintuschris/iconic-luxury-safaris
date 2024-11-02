"use client";
import React, { useState, useEffect } from 'react';
import { Send, Menu, X, Phone, Mail, MapPin, ChevronRight, Star, Globe, Users, Calendar } from 'lucide-react';
import ServicesTabs from './components/ServicesTabs';
import Navigation from './components/Navigation';
import StatsSection from './components/StatsSection';
import ExperienceTypes from './components/ExperienceTypes';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('luxury');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />
      {/* About Section */}
      < AboutSection />
      {/* Quick Overview Section */}
      <ExperienceTypes setActiveTab={setActiveTab} />

      {/* Detailed Services Section */}
      <div className="bg-[#F5F5F5]">
        <ServicesTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {/* Contact Section */}
      <ContactSection />
      {/* Footer */}
      <Footer />

    </div>
  );
};

export default LandingPage;
