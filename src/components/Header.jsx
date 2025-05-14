"use client";
import React, { useState } from "react";
import { Heart, Bell, Search, Menu, X, ChevronDown } from "lucide-react";

export default function Header({ setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleNavigation = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
  };

  const menuItems = [
    {
      name: "Home",
      page: "home",
      href: "/",
      className:
        "text-purple-900 hover:text-pink-600 py-2 hover:cursor-pointer flex items-center font-medium",
    },
    {
      name: "Services",
      page: "services",
      href: "#",
      submenu: [
        { name: "Prenatal Care", href: "#", page: "services" },
        { name: "Newborn Care", href: "#", page: "services" },
        { name: "Lactation Support", href: "#", page: "services" },
        { name: "Postpartum Wellness", href: "#", page: "services" },
      ],
    },
    {
      name: "About Us",
      page: "about",
      href: "#",
      submenu: [
        { name: "Our Team", href: "#", page: "about" },
        { name: "Our Mission", href: "#", page: "about" },
        { name: "Testimonials", href: "#", page: "about" },
      ],
    },
    {
      name: "Resources",
      page: "resources",
      href: "#",
      submenu: [
        { name: "Workshops", href: "#", page: "meetings" },
        { name: "Content", href: "#", page: "social" },
        { name: "Resource Library", href: "#", page: "resources" },
      ],
    },
    {
      name: "Contact",
      page: "contact",
      href: "#",
    },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/admin"
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("home");
              }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-2">
                DS
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                Dr. Siri
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className="text-purple-900 hover:text-pink-600 py-2 flex items-center font-medium"
                  onClick={() => {
                    if (item.page) handleNavigation(item.page);
                    if (item.submenu) toggleDropdown(index);
                  }}
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={16} className="ml-1" />}
                </button>

                {/* Dropdown */}
                {item.submenu && (
                  <div
                    className={`absolute left-0 mt-1 w-48 bg-white rounded-xl shadow-lg py-2 transition-all duration-200 ${
                      activeDropdown === index
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    } group-hover:opacity-100 group-hover:visible`}
                  >
                    {item.submenu.map((subitem, subindex) => (
                      <a
                        key={subindex}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-purple-800 hover:bg-purple-50"
                        onClick={(e) => {
                          e.preventDefault();
                          if (subitem.page) handleNavigation(subitem.page);
                        }}
                      >
                        {subitem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-purple-700 hover:text-pink-600 rounded-full hover:bg-purple-50">
              <Search size={20} />
            </button>
            <button
              className="p-2 text-purple-700 hover:text-pink-600 rounded-full hover:bg-purple-50 relative"
              onClick={() => handleNavigation("profile")}
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full"></span>
            </button>
            <button
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all"
              onClick={() => handleNavigation("meetings")}
            >
              Book Now
            </button>
          </div>

          {/* Mobile book now button replacing hamburger menu */}
          <div className="md:hidden flex items-center">
            <button
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all"
              onClick={(e) => {
                e.preventDefault();
                toggleMenu();
              }}
            >
              Book
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button
                className="w-full text-left px-3 py-2 text-purple-900 font-medium flex justify-between items-center"
                onClick={() => {
                  if (item.page) handleNavigation(item.page);
                  if (item.submenu) toggleDropdown(index);
                }}
              >
                {item.name}
                {item.submenu && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      activeDropdown === index ? "transform rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Mobile Submenu */}
              {item.submenu && activeDropdown === index && (
                <div className="pl-6 pb-1">
                  {item.submenu.map((subitem, subindex) => (
                    <a
                      key={subindex}
                      href={subitem.href}
                      className="block px-3 py-2 text-sm text-purple-800"
                      onClick={(e) => {
                        e.preventDefault();
                        if (subitem.page) handleNavigation(subitem.page);
                      }}
                    >
                      {subitem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="pt-2 pb-4 border-t border-purple-100">
          <button
            className="w-full flex justify-center items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-2 px-5 rounded-xl mx-3 my-2 shadow-md"
            onClick={() => handleNavigation("meetings")}
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </header>
  );
}
