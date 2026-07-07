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
      circleBg: "bg-brand-red/10 border-brand-red/30"
    },
    {
      id: "quality",
      icon: <Shield className="w-6 h-6 text-[#5AC8FA]" />,
      title: "Trusted Quality",
      desc: "Safe, tasty and loved by families.",
      circleBg: "bg-[#5AC8FA]/10 border-[#5AC8FA]/30"
    },
    {
      id: "kids",
      icon: <Smile className="w-6 h-6 text-brand-yellow fill-brand-yellow" />,
      title: "Loved by Kids",
      desc: "Fun taste that keeps kids coming back.",
      circleBg: "bg-brand-yellow/10 border-brand-yellow/30"
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
      className="bg-brand-navy py-24 lg:py-32 text-white relative overflow-hidden bg-peanut-pattern bg-repeat"
    >
      {/* Dark overlay to maintain readability and deep colors */}
      <div className="absolute inset-0 bg-brand-navy/95 z-0"></div>

      {/* Decorative corner circles */}
      <div className="absolute top-[-50px] right-[-50px] w-48 h-48 rounded-full bg-brand-yellow/10 z-1 pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-72 h-72 rounded-full bg-brand-red/10 z-1 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Editorial Description */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-8">
                ABOUT <br />
                <span className="text-brand-red relative inline-block">
                  MONKEY NUT
                  <span className="absolute bottom-[-6px] left-0 right-0 h-[4px] bg-brand-yellow rounded-full"></span>
                </span>
              </h2>

              <p className="text-white/80 text-lg sm:text-xl font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Monkey Nut is all about fun, energy and goodness! We create tasty peanut butter snacks that kids love and parents trust.
              </p>

              <button
                id="about-learn-more-btn"
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 text-white hover:text-brand-yellow font-semibold px-8 py-4 rounded-full border-2 border-white/20 hover:border-brand-yellow/40 transition-all duration-300 group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Side: Mascot + Vertical Timeline Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Mascot on left-center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 flex justify-center lg:justify-end select-none"
              style={{
                filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.3))"
              }}
            >
              <img
                src={mascotImg}
                alt="Monkey Nut Standing Mascot"
                className="w-[70%] md:w-full max-w-[240px] h-auto object-contain hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Vertical timeline items on right-center */}
            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-7 flex flex-col relative pl-6 md:pl-10 py-4"
            >
              {/* Vertical Dashed Connecting Line */}
              <div className="absolute left-[39px] md:left-[55px] top-[40px] bottom-[40px] w-[2px] bg-gradient-to-b from-brand-red via-[#5AC8FA] to-brand-yellow opacity-40 border-l-2 border-dashed border-white/30 pointer-events-none"></div>

              <div className="space-y-12">
                {pillars.map((pillar) => (
                  <motion.div
                    key={pillar.id}
                    id={`about-pillar-${pillar.id}`}
                    variants={listItem}
                    className="flex items-start gap-6 group"
                  >
                    {/* Circle Icon Container */}
                    <div 
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 ${pillar.circleBg} z-10 shrink-0 transform group-hover:scale-110 transition-transform duration-300 bg-brand-navy shadow-inner`}
                    >
                      {pillar.icon}
                    </div>

                    {/* Text Container */}
                    <div className="flex-grow pt-1 md:pt-2">
                      <h3 className="text-xl font-extrabold text-white mb-1.5 tracking-tight group-hover:text-brand-yellow transition-colors duration-200">
                        {pillar.title}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed">
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
