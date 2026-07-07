import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MapPin, Mail, Phone, Smile, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "Parent",
    message: ""
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSent(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", userType: "Parent", message: "" });
        setIsSent(false);
      }, 3500);
    }
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32 relative overflow-hidden select-none">
      
      {/* Decorative page elements */}
      <div className="absolute top-[10%] right-[-100px] w-64 h-64 rounded-full bg-brand-yellow/5 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-100px] w-64 h-64 rounded-full bg-brand-red/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 md:mb-24">
          <h2 id="contact-heading" className="text-4xl sm:text-5xl font-black tracking-tight inline-flex flex-wrap justify-center gap-x-4">
            <span className="text-brand-navy">SAY</span>
            <span className="text-brand-red relative">
              HELLO!
              <span className="absolute bottom-[-10px] left-0 right-0 h-[6px] bg-brand-yellow rounded-full"></span>
            </span>
          </h2>
          <p className="text-brand-navy/70 text-base sm:text-lg font-semibold mt-4 max-w-xl mx-auto">
            Got questions about ingredients, orders, or school partnerships? We would love to chat!
          </p>
        </div>

        {/* 2-Column Contact Info and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct info panels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-3xl p-6 md:p-8 flex items-start gap-5 hover:bg-brand-navy/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/25 flex items-center justify-center text-brand-red shrink-0 transform rotate-[-3deg]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-brand-navy font-black text-lg sm:text-xl mb-1.5">Our Headquarters</h3>
                <p className="text-brand-navy/70 font-semibold text-sm sm:text-base leading-relaxed">
                  Monkey Nut HQ, Cape Town,<br />
                  South Africa
                </p>
              </div>
            </div>

            <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-3xl p-6 md:p-8 flex items-start gap-5 hover:bg-brand-navy/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow/15 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow shrink-0 transform rotate-[3deg]">
                <Mail className="w-6 h-6 text-[#d99b1a]" />
              </div>
              <div>
                <h3 className="text-brand-navy font-black text-lg sm:text-xl mb-1.5">Email Support</h3>
                <a href="mailto:hello@monkeynut.co.za" className="text-brand-navy/70 hover:text-brand-red font-semibold text-sm sm:text-base transition-colors">
                  hello@monkeynut.co.za
                </a>
                <span className="block text-xs font-bold text-brand-navy/40 mt-1">Replies in 24 hours</span>
              </div>
            </div>

            <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-3xl p-6 md:p-8 flex items-start gap-5 hover:bg-brand-navy/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#4CD964]/10 border border-[#4CD964]/25 flex items-center justify-center text-[#4CD964] shrink-0 transform rotate-[-3deg]">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-brand-navy font-black text-lg sm:text-xl mb-1.5">WhatsApp Hotline</h3>
                <a href="tel:+27616952375" className="text-brand-navy/70 hover:text-brand-red font-semibold text-sm sm:text-base transition-colors">
                  061 695 2375
                </a>
                <span className="block text-xs font-bold text-brand-navy/40 mt-1">Available Mon-Fri, 8AM - 5PM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Custom interactive form */}
          <div className="lg:col-span-7 bg-white border border-gray-100 shadow-xl rounded-3xl p-6 sm:p-10 relative">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.form
                  key="contact-form"
                  id="contact-form-el"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="text-brand-navy font-extrabold text-sm uppercase">Your Name</label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="John Doe"
                        className="bg-gray-50 text-brand-navy border border-gray-200 focus:border-brand-red font-semibold px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/10 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-email" className="text-brand-navy font-extrabold text-sm uppercase">Your Email</label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="john@example.com"
                        className="bg-gray-50 text-brand-navy border border-gray-200 focus:border-brand-red font-semibold px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Dropdown User Type selection */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-usertype" className="text-brand-navy font-extrabold text-sm uppercase">I am a...</label>
                    <select
                      id="contact-usertype"
                      value={formData.userType}
                      onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                      className="bg-gray-50 text-brand-navy border border-gray-200 focus:border-brand-red font-semibold px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/10 transition-all cursor-pointer"
                    >
                      <option value="Parent">Parent / Guardian</option>
                      <option value="Teacher">Teacher / School Representative</option>
                      <option value="Retailer">Store Owner / Retailer</option>
                      <option value="General">Peanut Butter Fan!</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="text-brand-navy font-extrabold text-sm uppercase">Your Message</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Tell us what is on your mind..."
                      className="bg-gray-50 text-brand-navy border border-gray-200 focus:border-brand-red font-semibold px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/10 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-red-600 text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-110" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center mb-6 border border-brand-yellow/30">
                    <Smile className="w-10 h-10 text-[#d99b1a]" />
                  </div>
                  <h3 className="text-brand-navy font-black text-2xl tracking-tight mb-2">Message Received!</h3>
                  <p className="text-brand-navy/75 font-semibold text-base sm:text-lg max-w-sm mb-4">
                    Thanks for reaching out, {formData.name}! We will get back to you faster than a monkey swings between branches! 🥜🐒
                  </p>
                  <span className="text-xs font-bold text-brand-red uppercase animate-pulse">Processing...</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
