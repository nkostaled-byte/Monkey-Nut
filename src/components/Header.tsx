import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../assets/images/monkey_nut_logo.png";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  onBuyNowClick: () => void;
}

export default function Header({ onNavClick, onBuyNowClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "About Us", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Monkey Nut Logo */}
          <div 
            id="header-logo" 
            className="flex items-center cursor-pointer select-none"
            onClick={() => onNavClick("home")}
          >
            <img 
              src={logoImg} 
              alt="Monkey Nut Logo" 
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Center Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onNavClick(item.id)}
                className="text-brand-navy font-semibold hover:text-brand-red transition-colors duration-200 text-sm lg:text-base relative group"
              >
                {item.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[3px] bg-brand-red transition-all duration-300 group-hover:w-full rounded-full"></span>
              </button>
            ))}
          </nav>

          {/* Right: Buy Now Button - Desktop */}
          <div className="hidden md:flex">
            <button
              id="desktop-buy-now-btn"
              onClick={onBuyNowClick}
              className="flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group text-sm lg:text-base"
            >
              <span>Buy Now</span>
              <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-brand-navy hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slidedown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => {
                    onNavClick(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-brand-navy font-semibold hover:bg-brand-navy/5 hover:text-brand-red transition-all duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 px-4">
                <button
                  id="mobile-buy-now-btn"
                  onClick={() => {
                    onBuyNowClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full bg-brand-red hover:bg-red-600 text-white font-semibold py-4 rounded-full shadow-md transition-all duration-200"
                >
                  <span>Buy Now</span>
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
