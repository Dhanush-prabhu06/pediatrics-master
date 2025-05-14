"use client";
import React, { useState, useEffect } from "react";
import {
  Heart,
  Home,
  Calendar,
  MessageCircle,
  Menu,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer({ setCurrentPage }) {
  const [isClient, setIsClient] = useState(false);

  // This ensures the newsletter form only renders on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNavigation = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      // Scroll to top when navigating
      window.scrollTo(0, 0);
    }
  };

  const quickLinks = [
    { name: "About Us", page: "about" },
    { name: "Services", page: "services" },
    { name: "Workshops", page: "meetings" },
    { name: "Resources", page: "resources" },
    { name: "Social Media", page: "social" },
    { name: "Contact", page: "contact" },
  ];

  const services = [
    { name: "Prenatal Care", page: "services" },
    { name: "Newborn Care", page: "services" },
    { name: "Lactation Support", page: "services" },
    { name: "Postpartum Wellness", page: "services" },
    { name: "Parenting Resources", page: "resources" },
  ];

  const mobileNavItems = [
    { icon: <Home size={20} />, name: "Home", page: "home" },
    { icon: <Calendar size={20} />, name: "Book", page: "meetings" },
    { icon: <Heart size={20} />, name: "Services", page: "services" },
    { icon: <MessageCircle size={20} />, name: "Contact", page: "contact" },
    { icon: <Menu size={20} />, name: "More", page: "profile" },
  ];

  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: About */}
            <div>
              <div className="flex items-center mb-6">
                <div
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-2 cursor-pointer"
                  onClick={() => handleNavigation("home")}
                >
                  DS
                </div>
                <span
                  className="text-xl font-bold text-white cursor-pointer"
                  onClick={() => handleNavigation("home")}
                >
                  Dr. Siri
                </span>
              </div>
              <p className="text-purple-200 mb-6">
                Providing compassionate care for expectant mothers and new
                families, supporting you in every step of your motherhood
                journey.
              </p>
              <div className="flex space-x-4 mb-6">
                {[
                  { icon: <Facebook size={18} />, name: "Facebook" },
                  { icon: <Instagram size={18} />, name: "Instagram" },
                  { icon: <Twitter size={18} />, name: "Twitter" },
                  { icon: <Youtube size={18} />, name: "YouTube" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-purple-800 hover:bg-purple-700 p-2 rounded-full transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("social");
                    }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-purple-200 hover:text-white transition-colors flex items-center cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(link.page);
                      }}
                    >
                      <ArrowRight size={14} className="mr-2" /> {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-purple-200 hover:text-white transition-colors flex items-center cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(service.page);
                      }}
                    >
                      <ArrowRight size={14} className="mr-2" /> {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <MapPin
                    size={18}
                    className="text-pink-400 mr-3 flex-shrink-0 mt-1"
                  />
                  <span className="text-purple-200">
                    123 Main Street, City, State 12345
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone
                    size={18}
                    className="text-pink-400 mr-3 flex-shrink-0"
                  />
                  <span className="text-purple-200">(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail
                    size={18}
                    className="text-pink-400 mr-3 flex-shrink-0"
                  />
                  <span className="text-purple-200">contact@drsiri.com</span>
                </li>
              </ul>
              <div className="mt-6">
                {isClient ? (
                  <form className="flex">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="px-4 py-2 rounded-l-lg bg-purple-800 border border-purple-700 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-500 flex-grow"
                    />
                    <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-r-lg">
                      <ArrowRight size={18} />
                    </button>
                  </form>
                ) : (
                  <div className="flex h-10 opacity-80">
                    <div className="flex-grow bg-purple-800 border border-purple-700 rounded-l-lg"></div>
                    <div className="w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-r-lg"></div>
                  </div>
                )}
                <p className="text-purple-300 text-xs mt-2">
                  Subscribe to our newsletter
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Dr. Siri Pediatrics. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-purple-300 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-purple-300 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-purple-300 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-top z-50">
        <div className="grid grid-cols-5">
          {mobileNavItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex flex-col items-center justify-center py-3 text-center"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.page);
              }}
            >
              <div
                className={`${
                  index === 2
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-full -mt-6 shadow-lg"
                    : "text-purple-900 p-1"
                }`}
              >
                {item.icon}
              </div>
              <span className="text-xs mt-1 text-purple-900">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
