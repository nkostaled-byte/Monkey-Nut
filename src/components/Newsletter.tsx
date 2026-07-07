import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section 
      id="newsletter" 
      className="bg-brand-yellow py-16 lg:py-20 text-brand-navy relative overflow-hidden select-none"
    >
      {/* Dynamic graphic rings in the background */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-brand-navy/5 pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-brand-navy/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Center-Left: Large Email Icon & Text Content */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Outline Email Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 flex items-center justify-center border-2 border-brand-navy/10 shrink-0 transform rotate-[-3deg]">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-brand-navy" />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 text-brand-navy">
                Stay Updated!
              </h2>
              <p className="text-brand-navy/85 font-semibold text-base sm:text-lg leading-relaxed">
                Subscribe to get our latest news, fun activities and tasty offers.
              </p>
            </div>
          </div>

          {/* Right: Input Form */}
          <div className="lg:col-span-5 w-full">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="subscribe-form"
                  id="newsletter-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col sm:flex-row gap-3 w-full bg-white/20 p-2 rounded-3xl border border-brand-navy/10"
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-grow bg-white text-brand-navy font-semibold px-6 py-4 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-brand-navy/20 placeholder-brand-navy/50 text-base"
                    id="newsletter-email-input"
                  />
                  <button
                    type="submit"
                    id="newsletter-subscribe-btn"
                    className="bg-brand-navy hover:bg-[#121c43] text-white font-bold px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 active:scale-98 text-base cursor-pointer"
                  >
                    Subscribe
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="subscribe-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-brand-navy text-white font-bold py-5 px-8 rounded-3xl shadow-lg border border-white/10"
                >
                  <CheckCircle className="w-6 h-6 text-brand-yellow shrink-0" />
                  <span className="text-base sm:text-lg">Woohoo! You're on the list! 🥜</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
