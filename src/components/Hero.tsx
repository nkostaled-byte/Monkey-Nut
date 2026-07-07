import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ShoppingBag } from "lucide-react";
import mascotImg from "../assets/images/monkey_nut_mascot.png";
import smoothImg from "../assets/images/monkey_nut_smooth.png";
import chocolateImg from "../assets/images/monkey_nut_chocolate.png";

interface HeroProps {
  onShopNowClick: () => void;
  onViewProductsClick: () => void;
}

export default function Hero({ onShopNowClick, onViewProductsClick }: HeroProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const smoothRef = useRef<HTMLDivElement>(null);
  const chocolateRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Headline fades upward: translateY(30px → 0), opacity 0 → 1, 700ms
    gsap.fromTo(
      headlineRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
    );

    // Fade up subtitle and buttons in sequence
    gsap.fromTo(
      [subtitleRef.current, buttonsRef.current],
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" }
    );

    // 2. Smooth sachet: Slides from right: translateX(350px → 0), opacity 0 → 1, 900ms
    gsap.fromTo(
      smoothRef.current,
      { x: 350, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: "power2.out" }
    );

    // 3. Chocolate sachet: Slides from right: translateX(350px → 0), opacity 0 → 1, Delay 250ms, 900ms
    gsap.fromTo(
      chocolateRef.current,
      { x: 350, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, delay: 0.25, ease: "power2.out" }
    );

    // 4. Mascot: Slides from right: translateX(500px → 0), Scale 0.95 → 1, Opacity 0 → 1, Duration 1000ms, Ease back.out(1.4)
    gsap.fromTo(
      mascotRef.current,
      { x: 500, scale: 0.95, opacity: 0 },
      { x: 0, scale: 1, opacity: 1, duration: 1.0, ease: "back.out(1.4)" }
    );
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-80px)] bg-white bg-peanut-pattern flex items-center overflow-hidden py-12 md:py-20 lg:py-24"
    >
      {/* Decorative Page Corner Graphics */}
      
      {/* Top-Left Circular Graphics */}
      <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 pointer-events-none z-10 select-none">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
          <circle cx="80" cy="80" r="100" fill="#FDBB2D" opacity="0.3" />
          <circle cx="80" cy="80" r="70" stroke="#E31C2D" strokeWidth="16" fill="none" />
          <circle cx="80" cy="80" r="40" fill="#1F2F6F" />
        </svg>
      </div>

      {/* Top-Right Circular Graphics */}
      <div className="absolute top-0 right-0 translate-x-16 -translate-y-16 pointer-events-none z-10 select-none">
        <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
          <circle cx="180" cy="100" r="120" fill="#1F2F6F" opacity="0.15" />
          <circle cx="180" cy="100" r="90" stroke="#FDBB2D" strokeWidth="12" fill="none" />
          <path d="M 90 100 A 90 90 0 0 1 270 100" stroke="#E31C2D" strokeWidth="16" fill="none" />
        </svg>
      </div>

      {/* Bottom-Left Circular Graphics */}
      <div className="absolute bottom-0 left-0 -translate-x-16 translate-y-16 pointer-events-none z-10 select-none">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
          <circle cx="80" cy="160" r="90" fill="#E31C2D" opacity="0.2" />
          <circle cx="80" cy="160" r="60" stroke="#1F2F6F" strokeWidth="14" fill="none" />
          <circle cx="80" cy="160" r="30" fill="#FDBB2D" />
        </svg>
      </div>

      {/* Bottom-Right Circular Graphics */}
      <div className="absolute bottom-0 right-0 translate-x-12 translate-y-12 pointer-events-none z-10 select-none">
        <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
          <circle cx="160" cy="160" r="100" fill="#FDBB2D" opacity="0.2" />
          <circle cx="160" cy="160" r="70" stroke="#E31C2D" strokeWidth="12" strokeDasharray="10 10" fill="none" />
          <circle cx="160" cy="160" r="45" fill="#1F2F6F" />
        </svg>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-[80px] w-full">
          
          {/* Left Side: Headline and copy (45% width on desktop) */}
          <div className="w-full lg:w-[calc(45%-40px)] flex flex-col justify-center text-center lg:text-left pt-6 lg:pt-0">
            
            {/* Headline */}
            <h1
              id="hero-headline"
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.0] mb-6 uppercase"
            >
              <span className="text-[#1F2F6F]">SMOOTH</span> <br />
              <span className="text-brand-red">ENERGY.</span> <br />
              <span className="text-[#1F2F6F]">FUN IN EVERY</span> <br />
              <span className="text-brand-red">SACHET!</span>
            </h1>

            {/* Subtitle */}
            <p
              id="hero-subtitle"
              ref={subtitleRef}
              className="text-lg sm:text-xl text-[#1F2F6F]/80 font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Delicious peanut butter snacks made for kids and loved by everyone.
            </p>

            {/* Buttons */}
            <div
              id="hero-buttons"
              ref={buttonsRef}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 font-semibold text-sm sm:text-base"
            >
              <button
                id="hero-shop-now-btn"
                onClick={onShopNowClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-red hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group"
              >
                <span>Shop Now</span>
                <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </button>

              <button
                id="hero-view-products-btn"
                onClick={onViewProductsClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-brand-navy/5 text-brand-navy font-semibold px-8 py-4 rounded-full border-2 border-brand-navy/15 hover:border-brand-navy/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                <span>View Products</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Side: Interactive overlap presentation (55% width on desktop) */}
          <div className="w-full lg:w-[calc(55%-40px)] relative h-auto lg:h-[680px] flex flex-col lg:block items-center justify-center lg:justify-end overflow-visible mt-12 lg:mt-0">
            <div className="relative w-full lg:h-full flex flex-col lg:block items-center justify-center gap-8">
              
              {/* Products Row Wrapper on Mobile (stacked), block on Desktop */}
              <div className="w-full flex flex-col lg:block items-center justify-center gap-6 sm:gap-8 max-w-md lg:max-w-none">
                {/* Product 1: Smooth Sachet */}
                <div
                  id="hero-smooth-sachet"
                  ref={smoothRef}
                  className="relative lg:absolute z-10 w-[75%] sm:w-[60%] lg:w-[520px] lg:top-[40px] lg:right-[130px] lg:left-auto origin-center select-none"
                  style={{
                    filter: "drop-shadow(0 20px 30px rgba(31, 47, 111, 0.16))",
                  }}
                >
                  <img
                    src={smoothImg}
                    alt="Monkey Nut Smooth Peanut Butter Sachet"
                    className="w-full h-auto object-contain transform rotate-[8deg] hover:rotate-[10deg] transition-transform duration-500 rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Product 2: Chocolate Sachet */}
                <div
                  id="hero-chocolate-sachet"
                  ref={chocolateRef}
                  className="relative lg:absolute z-15 w-[80%] sm:w-[65%] lg:w-[560px] lg:top-[290px] lg:right-[170px] lg:left-auto origin-center select-none"
                  style={{
                    filter: "drop-shadow(0 25px 35px rgba(31, 47, 111, 0.18))",
                  }}
                >
                  <img
                    src={chocolateImg}
                    alt="Monkey Nut Chocolate Peanut Butter Sachet"
                    className="w-full h-auto object-contain transform rotate-[-8deg] hover:rotate-[-6deg] transition-transform duration-500 rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Mascot: Monkey Mascot */}
              <div
                id="hero-monkey-mascot"
                ref={mascotRef}
                className="relative lg:absolute z-20 w-[60%] sm:w-[50%] max-w-[240px] lg:max-w-none h-auto lg:h-[600px] lg:w-auto lg:top-[90px] lg:right-[-180px] lg:left-auto lg:bottom-auto origin-bottom select-none mt-4 lg:mt-0"
                style={{
                  filter: "drop-shadow(0 15px 20px rgba(0, 0, 0, 0.08))",
                }}
              >
                <img
                  src={mascotImg}
                  alt="Monkey Nut Mascot"
                  className="w-full lg:h-full lg:w-auto h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
