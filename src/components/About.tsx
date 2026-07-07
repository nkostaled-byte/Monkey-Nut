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
      style={{
        height: "auto",
        minHeight: "fit-content"
      }}
    >
      {/* Dark overlay to maintain readability and deep rich brand-navy color */}
      <div className="absolute inset-0 bg-brand-navy/95 z-0"></div>

      {/* Abstract overlapping geometric circles in the bottom right corner */}
      <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 pointer-events-none opacity-40 md:opacity-80 z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="120" cy="120" r="70" stroke="#FDBB2D" strokeWidth="8" fill="none" />
          <circle cx="80" cy="80" r="50" stroke="#E31C2D" strokeWidth="6" fill="none" />
          <path d="M 40,160 A 80,80 0 0,1 160,40" stroke="#E31C2D" strokeWidth="8" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile / Tablet Container (below 1024px) */}
        <div 
          className="lg:hidden w-full px-4 mx-auto"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "2rem",
            paddingTop: "4rem",
            paddingBottom: "4rem"
          }}
        >
          {/* 1. Heading & 2. Paragraph */}
          <div className="w-full text-center flex flex-col items-center" style={{ maxWidth: "340px" }}>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-none mb-6 text-center break-words w-full">
              <span className="block text-white mb-2">ABOUT</span>
              <span className="block text-brand-red">MONKEY NUT</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed text-center break-words w-full">
              Monkey Nut is all about fun, energy and goodness! We create tasty peanut butter snacks that kids love and parents trust.
            </p>
          </div>

          {/* 3. Learn More button */}
          <div className="flex justify-center w-full animate-bounce-slow" style={{ marginBottom: "32px" }}>
            <button
              id="about-learn-more-btn-mobile"
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-brand-navy font-extrabold px-8 py-4 rounded-full border-2 border-white transition-all duration-300 group cursor-pointer shadow-md"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* 4. Mascot */}
          <div className="flex justify-center items-center w-full select-none">
            <img
              src={mascotImg}
              alt="Monkey Nut Standing Mascot"
              className="object-contain"
              style={{
                maxHeight: "240px",
                width: "auto",
                filter: "drop-shadow(0 20px 35px rgba(0, 0, 0, 0.45))"
              }}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* 5. Three feature items */}
          <div className="w-full flex flex-col gap-6 max-w-[340px] mx-auto">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                id={`about-pillar-mobile-${pillar.id}`}
                className="flex flex-col items-center text-center w-full group"
              >
                {/* Circle Icon Container - Center icons */}
                <div 
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${pillar.circleBg} mb-3 shadow-md transform group-hover:scale-110 transition-transform duration-300 shrink-0`}
                >
                  {pillar.icon}
                </div>

                {/* Text Block Container - Center text */}
                <div className="w-full">
                  <h3 className="text-xl font-extrabold text-white mb-1 tracking-tight group-hover:text-brand-yellow transition-colors duration-200">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-sm font-semibold leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Container (1024px+) - Keep current layout untouched */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
          
          {/* Left + Center Group (Text and Mascot): col-span-8 on desktop */}
          <div className="lg:col-span-8 col-span-12 flex flex-col md:grid md:grid-cols-12 gap-12 items-center relative">
            
            {/* Column 1: Editorial Description (takes 7/12 on tablet, 6/12 on desktop) */}
            <div className="order-1 md:order-none md:col-span-7 lg:col-span-6 text-left flex flex-col justify-center items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-start"
              >
                <h2 className="text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-black tracking-tight leading-none mb-6">
                  <span className="block text-white mb-2">ABOUT</span>
                  <span className="block text-brand-red">MONKEY NUT</span>
                </h2>

                <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed mb-8 sm:mb-10 max-w-xl text-left">
                  Monkey Nut is all about fun, energy and goodness! We create tasty peanut butter snacks that kids love and parents trust.
                </p>

                {/* Learn More Button - Left-aligned on all screen sizes */}
                <div className="flex justify-start w-full">
                  <button
                    id="about-learn-more-btn"
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
              className="order-2 md:order-none md:col-span-5 lg:col-span-6 flex justify-center items-end self-center md:self-end select-none w-full"
              style={{
                filter: "drop-shadow(0 20px 35px rgba(0, 0, 0, 0.45))"
              }}
            >
              <img
                src={mascotImg}
                alt="Monkey Nut Standing Mascot"
                className="w-[65%] sm:w-[50%] md:w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px] xl:max-w-[320px] h-auto object-contain hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>

          </div>

          {/* Column 3: Brand Pillars Feature List (takes 4/12 on desktop, stacks or takes full width on smaller screens) */}
          <div className="lg:col-span-4 col-span-12 w-full max-w-md mx-auto lg:max-w-none">
            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col relative px-4 sm:px-0 py-4"
            >
              <div className="space-y-10 sm:space-y-12 relative z-10">
                {pillars.map((pillar) => (
                  <motion.div
                    key={pillar.id}
                    id={`about-pillar-${pillar.id}`}
                    variants={listItem}
                    className="flex flex-row items-start text-left gap-4 sm:gap-6 group"
                  >
                    {/* Circle Icon Container - Solid Colored Circles */}
                    <div 
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center ${pillar.circleBg} z-10 shrink-0 transform group-hover:scale-115 transition-transform duration-300 shadow-md`}
                    >
                      {pillar.icon}
                    </div>

                    {/* Text Block Container */}
                    <div className="flex-grow pt-1 sm:pt-2">
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
