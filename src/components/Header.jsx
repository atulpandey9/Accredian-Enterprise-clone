"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ onOpenModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Stats", href: "#stats" },
    { name: "Clients", href: "#clients" },
    { name: "Accredian Edge", href: "#accredian-edge" },
    { name: "CAT", href: "#cat" },
    { name: "How It Works", href: "#howitworks" },
    { name: "FAQs", href: "#faqs" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            {/* Fake Logo */}
            <a href="#" className="flex items-center text-primary font-bold text-2xl tracking-tighter">
              accredian<span className="text-gray-400 text-xs ml-2 font-normal mt-2 hidden min-[400px]:block">credentials that matter</span>
            </a>
          </div>
          
          <nav className="hidden min-[1220px]:flex space-x-7 lg:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-primary transition-colors font-medium text-[15px]">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={onOpenModal}
              className="bg-primary hover:bg-primary-hover text-white px-4 sm:px-5 py-2.5 rounded-lg font-medium transition-colors cursor-pointer text-sm sm:text-base whitespace-nowrap"
            >
              Enquire Now
            </button>
            <button 
              className="min-[1220px]:hidden p-1.5 sm:p-2 text-gray-600 hover:text-primary transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`min-[1220px]:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col px-6 py-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 hover:text-primary transition-colors font-medium text-base sm:text-lg py-3 border-b border-gray-50 last:border-0"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
