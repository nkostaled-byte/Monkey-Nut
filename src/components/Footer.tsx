import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logoImg from "../assets/images/monkey_nut_logo.png";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "About Us", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" }
  ];

  const customerCare = [
    { name: "FAQs", id: "faqs" },
    { name: "Shipping & Delivery", id: "shipping" },
    { name: "Returns", id: "returns" },
    { name: "Terms & Conditions", id: "terms" },
    { name: "Privacy Policy", id: "privacy" }
  ];

  return (
    <footer id="footer" className="bg-[#121c43] text-white pt-20 pb-10 relative overflow-hidden select-none border-t border-white/5">
      
      {/* Decorative semi-opaque circular elements in the background */}
      <div className="absolute top-0 left-[-100px] w-56 h-56 rounded-full bg-brand-red/5 pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-100px] w-64 h-64 rounded-full bg-brand-yellow/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div 
              id="footer-logo"
              onClick={() => onNavClick("home")}
              className="flex items-center mb-6 cursor-pointer group"
            >
              <img 
                src={logoImg} 
                alt="Monkey Nut Logo" 
                className="h-16 w-auto object-contain brightness-110 contrast-125 group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed max-w-sm mb-6">
              Making healthy snacking fun, playful and packed with delicious peanut energy for active kids!
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="text-brand-yellow font-extrabold text-lg mb-6 tracking-tight uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-link-${link.id}`}
                    onClick={() => onNavClick(link.id)}
                    className="text-white/70 hover:text-brand-red font-semibold transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="lg:col-span-3 text-center sm:text-left">
            <h4 className="text-brand-yellow font-extrabold text-lg mb-6 tracking-tight uppercase">
              Customer Care
            </h4>
            <ul className="space-y-3.5">
              {customerCare.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-care-${link.id}`}
                    onClick={() => alert(`This link is a placeholder for ${link.name}`)}
                    className="text-white/70 hover:text-brand-red font-semibold transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3 text-center sm:text-left">
            <h4 className="text-brand-yellow font-extrabold text-lg mb-6 tracking-tight uppercase">
              Contact Us
            </h4>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/5 shrink-0">
                  <Phone className="w-4 h-4 text-brand-yellow" />
                </div>
                <a href="tel:+27616952375" className="text-white/80 hover:text-brand-red font-semibold text-sm md:text-base transition-colors duration-200">
                  061 695 2375
                </a>
              </li>

              <li className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/5 shrink-0">
                  <Mail className="w-4 h-4 text-brand-yellow" />
                </div>
                <a href="mailto:info@monkeynut.co.za" className="text-white/80 hover:text-brand-red font-semibold text-sm md:text-base transition-colors duration-200">
                  info@monkeynut.co.za
                </a>
              </li>

              <li className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/5 shrink-0">
                  <MapPin className="w-4 h-4 text-brand-yellow" />
                </div>
                <span className="text-white/80 font-semibold text-sm md:text-base">
                  South Africa
                </span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center sm:justify-start gap-3.5">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white text-[#121c43] hover:bg-brand-red hover:text-white flex items-center justify-center shadow-md transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white text-[#121c43] hover:bg-brand-red hover:text-white flex items-center justify-center shadow-md transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white text-[#121c43] hover:bg-brand-red hover:text-white flex items-center justify-center shadow-md transition-all duration-300 transform hover:-translate-y-1"
                aria-label="TikTok"
              >
                {/* Custom TikTok inline SVG inside Lucide Twitter fallback */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.18 1.01 1.14 2.42 1.83 3.93 1.95v3.91c-1.32-.12-2.61-.59-3.7-1.36-1.02-.73-1.81-1.74-2.28-2.91-.04 2.87-.02 5.75-.03 8.62-.01.53-.06 1.06-.17 1.59-.44 2.42-2.14 4.54-4.51 5.3-1.35.45-2.82.49-4.19.12-1.83-.47-3.41-1.69-4.32-3.34-.84-1.5-1.12-3.26-.78-4.94.31-1.6 1.18-3.08 2.47-4.08 1.34-1.05 3.07-1.57 4.77-1.44v3.98c-.77-.13-1.58.02-2.23.45-.63.41-1.07 1.08-1.22 1.83-.16.79.03 1.63.52 2.26.47.62 1.21.99 1.99.99 1.15.01 2.12-.87 2.24-2.01.07-2.66.03-5.32.04-7.98V0z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-center gap-4">
          <p className="text-white/55 text-sm font-semibold">
            &copy; 2026 Monkey Nut. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/45 font-bold">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
