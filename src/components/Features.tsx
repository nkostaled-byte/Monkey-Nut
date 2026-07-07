import React from "react";
import { motion } from "motion/react";
import { Zap, Package, ShoppingBag } from "lucide-react";

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  colorClass: string;
  bgClass: string;
}

export default function Features() {
  const features: FeatureItem[] = [
    {
      id: "peanuts",
      icon: (
        <svg className="w-6 h-6 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2 C8 2 6 4 6 8 C6 11 9 11.5 9 12 C9 12.5 6 13 6 16 C6 20 8 22 12 22 C16 22 18 20 18 16 C18 13 15 12.5 15 12 C15 11.5 18 11 18 8 C18 4 16 2 12 2 Z" />
          <path d="M12 7 C11 7 10 7.5 10 8" />
          <path d="M14 15 C13 15 12 15.5 12 16" />
        </svg>
      ),
      title: "Made with Real Peanuts",
      desc: "100% real peanuts for real goodness.",
      colorClass: "text-brand-yellow border-brand-yellow/30",
      bgClass: "bg-brand-yellow/10"
    },
    {
      id: "energy",
      icon: <Zap className="w-6 h-6 text-brand-red animate-pulse" />,
      title: "Great Source of Energy",
      desc: "Perfect for school, play & everyday energy.",
      colorClass: "text-brand-red border-brand-red/30",
      bgClass: "bg-brand-red/10"
    },
    {
      id: "delicious",
      icon: <Package className="w-6 h-6 text-[#4CD964]" />,
      title: "Smooth & Delicious",
      desc: "Irresistibly smooth taste in every bite.",
      colorClass: "text-[#4CD964] border-[#4CD964]/30",
      bgClass: "bg-[#4CD964]/10"
    },
    {
      id: "onthego",
      icon: <ShoppingBag className="w-6 h-6 text-[#5AC8FA]" />,
      title: "Perfect On The Go",
      desc: "15g sachet - easy to carry anywhere.",
      colorClass: "text-[#5AC8FA] border-[#5AC8FA]/30",
      bgClass: "bg-[#5AC8FA]/10"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for smooth slide in
      }
    }
  };

  return (
    <section 
      id="features" 
      className="bg-brand-navy py-20 lg:py-28 text-white relative overflow-hidden bg-peanut-pattern bg-repeat opacity-95"
    >
      {/* Decorative background overlay to keep the navy background very rich */}
      <div className="absolute inset-0 bg-brand-navy/90 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          id="features-grid-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {features.map((feat, index) => (
            <motion.div
              key={feat.id}
              id={`feature-card-${feat.id}`}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
            >
              {/* Divider border for desktop layout */}
              {index < 3 && (
                <div className="hidden lg:block absolute right-[-24px] top-1/2 -translate-y-1/2 w-[1px] h-24 bg-white/10 pointer-events-none group-hover:bg-white/20 transition-all"></div>
              )}

              {/* Animated Icon Container */}
              <div 
                className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${feat.bgClass} ${feat.colorClass} mb-6 transform group-hover:scale-110 transition-transform duration-300`}
              >
                {feat.icon}
              </div>

              {/* Heading */}
              <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">
                {feat.title}
              </h3>

              {/* Description */}
              <p className="text-white/75 text-sm md:text-base font-medium leading-relaxed max-w-[220px]">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
