import React from "react";
import { motion } from "motion/react";
import { Heart, Shield, Smile, ArrowRight } from "lucide-react";
import mascotImg from "../assets/images/monkey_nut_mascot.png";

interface AboutProps {
  onLearnMore: () => void;
}

export default function About({ onLearnMore }: AboutProps) {
  const pillars = [
    {
      id: "love",
      icon: <Heart className="w-6 h-6 text-brand-red fill-brand-red" />,
      title: "Made with Love",
      desc: "Quality ingredients made with care.",
      circleBg: "bg-brand-yellow"
    },
    {
      id: "quality",
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Trusted Quality",
      desc: "Safe, tasty and loved by families.",
      circleBg: "bg-brand-red"
    },
    {
      id: "kids",
      icon: <Smile className="w-6 h-6 text-white" />,
      title: "Loved by Kids",
      desc: "Fun taste that keeps kids coming back.",
      circleBg: "bg-brand-yellow"
    }
  ];

  const listContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="about" 
      className="bg-brand-navy py-24 lg:py-32 text-white relative overflow-hidden bg-peanut-pattern bg-repeat select-none"
    >
      {/* Dark overlay to maintain readability and deep rich brand-navy color */}
      <div className="absolute inset-0 bg-brand-navy/95 z-0"></div>

      {/* Abstract overlapping geometric circles in the bottom right corner */}
      <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 pointer-events-none opacity-40 md:opacity-80 z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="120" cy="120" r="70" stroke="#FDBB2D" strokeWidth="8" fill="none" />
          <circle cx="80" cy="80" r="50" stroke="#E31C2D" strokeWidth="6" fill="none" />
          <circle cx="150" cy="50" r="30" stroke="#FDBB2D" strokeWidth="4" fill="none" strokeDasharray="4 4" />
          <path d="M 40,160 A 80,80 0 0,1 160,40" stroke="#E31C2D" strokeWidth="8" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main responsive grid: 1-column mobile, 12-column tablet/desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left + Center Group (Text and Mascot): col-span-8 on desktop */}
          <div className="lg:col-span-8 col-span-12 flex flex-col md:grid md:grid-cols-12 gap-12 items-center relative">
            
            {/* Column 1: Editorial Description (takes 7/12 on tablet, 6/12 on desktop) */}
            <div className="order-1 md:order-none md:col-span-7 lg:col-span-6 text-center md:text-left flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-black tracking-tight leading-none mb-6">
                  <span className="block text-white mb-2">ABOUT</span>
                  <span className="block text-brand-red">MONKEY NUT</span>
                </h2>

                <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto md:mx-0">
                  Monkey Nut is all about fun, energy and goodness! We create tasty peanut butter snacks that kids love and parents trust.
                </p>

                {/* Learn More Button (Desktop/Tablet) */}
                <div className="hidden md:block">
                  <button
                    id="about-learn-more-btn-desktop"
                    onClick={onLearnMore}
                    className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-brand-navy font-extrabold px-8 py-4 rounded-full border-2 border-white transition-all duration-300 group cursor-pointer shadow-md"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Column 2: Mascot Container (takes 5/12 on tablet, 6/12 on desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-none md:col-span-5 lg:col-span-6 flex justify-center items-end self-end select-none"
              style={{
                filter: "drop-shadow(0 20px 35px rgba(0, 0, 0, 0.45))"
              }}
            >
              <img
                src={mascotImg}
                alt="Monkey Nut Standing Mascot"
                className="w-[75%] md:w-full max-w-[260px] lg:max-w-[280px] xl:max-w-[320px] h-auto object-contain hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Learn More Button (Mobile only) */}
            <div className="order-3 md:hidden flex justify-center w-full">
              <button
                id="about-learn-more-btn-mobile"
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-brand-navy font-extrabold px-8 py-4 rounded-full border-2 border-white transition-all duration-300 group cursor-pointer shadow-md"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Column 3: Brand Pillars Feature List (takes 4/12 on desktop, stacks or takes full width on smaller screens) */}
          <div className="lg:col-span-4 col-span-12">
            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col relative pl-4 md:pl-6 py-4"
            >
              {/* Vertical Dashed Connecting Line behind the solid circles */}
              <div className="absolute left-[43px] md:left-[51px] top-[30px] bottom-[30px] w-[2px] border-l-2 border-dashed border-white/20 z-0 pointer-events-none"></div>

              <div className="space-y-12 relative z-10">
                {pillars.map((pillar) => (
                  <motion.div
                    key={pillar.id}
                    id={`about-pillar-${pillar.id}`}
                    variants={listItem}
                    className="flex items-start gap-6 group"
                  >
                    {/* Circle Icon Container - Solid Colored Circles */}
                    <div 
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center ${pillar.circleBg} z-10 shrink-0 transform group-hover:scale-115 transition-transform duration-300 shadow-md`}
                    >
                      {pillar.icon}
                    </div>

                    {/* Text Block Container */}
                    <div className="flex-grow pt-1 md:pt-2">
                      <h3 className="text-xl font-extrabold text-white mb-1 tracking-tight group-hover:text-brand-yellow transition-colors duration-200">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base font-semibold leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
