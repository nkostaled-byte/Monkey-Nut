import React from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import smoothImg from "../assets/images/monkey_nut_smooth.png";
import chocolateImg from "../assets/images/monkey_nut_chocolate.png";

interface Product {
  id: string;
  name: string;
  type: "smooth" | "chocolate";
  img: string;
  desc: string;
  ingredients: string[];
  color: string;
  price: string;
}

interface ProductsProps {
  onBuyNow: (productName: string) => void;
}

export default function Products({ onBuyNow }: ProductsProps) {
  const products: Product[] = [
    {
      id: "smooth",
      name: "Monkey Nut Smooth",
      type: "smooth",
      img: smoothImg,
      desc: "Creamy, delicious and packed with natural peanut goodness.",
      ingredients: ["Peanut butter bowl", "Whole peanuts", "15g sachet"],
      color: "border-brand-yellow/30 bg-brand-yellow/5 hover:shadow-brand-yellow/10",
      price: "R9.99"
    },
    {
      id: "chocolate",
      name: "Monkey Nut Chocolate",
      type: "chocolate",
      img: chocolateImg,
      desc: "Smooth peanut butter with a rich chocolatey twist.",
      ingredients: ["Chocolate cream", "Chocolate blocks", "Peanuts", "15g sachet"],
      color: "border-brand-brown/30 bg-brand-brown/5 hover:shadow-brand-brown/10",
      price: "R12.99"
    }
  ];

  return (
    <section id="products" className="bg-white py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative page corner circle graphics */}
      <div className="absolute top-[20%] left-[-80px] w-48 h-48 rounded-full bg-brand-yellow/10 pointer-events-none select-none"></div>
      <div className="absolute bottom-[20%] right-[-80px] w-48 h-48 rounded-full bg-brand-red/5 pointer-events-none select-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16 md:mb-24">
          <h2 id="products-heading" className="text-4xl sm:text-5xl font-black tracking-tight select-none inline-flex flex-wrap justify-center gap-x-4">
            <span className="text-brand-navy">OUR</span>
            <span className="text-brand-red relative">
              PRODUCTS
              <span className="absolute bottom-[-10px] left-0 right-0 h-[6px] bg-brand-yellow rounded-full"></span>
            </span>
          </h2>
        </div>

        {/* Carousel Container Layout */}
        <div className="relative flex items-center justify-center">
          
          {/* Left Arrow Controls - Decorative match for mockup */}
          <button 
            id="prev-product-btn"
            className="hidden xl:flex absolute left-[-60px] z-20 w-12 h-12 rounded-full border-2 border-brand-navy/10 hover:border-brand-navy/30 bg-white items-center justify-center text-brand-navy hover:text-brand-red shadow-sm hover:shadow transition-all duration-300 active:scale-95"
            aria-label="Previous Product"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl">
            {products.map((product) => (
              <motion.div
                key={product.id}
                id={`product-card-${product.id}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col rounded-3xl border p-6 sm:p-8 hover:-translate-y-2 transition-all duration-500 relative group bg-white shadow-md hover:shadow-2xl ${product.color}`}
              >
                {/* Sachet Wrapper Visual Showcase */}
                <div className="relative h-[220px] sm:h-[260px] w-full flex items-center justify-center mb-8 bg-gray-50 rounded-2xl overflow-hidden select-none">
                  
                  {/* Subtle Background Radial Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-tr opacity-20 ${
                    product.type === "smooth" 
                      ? "from-brand-yellow via-white to-transparent" 
                      : "from-brand-brown via-white to-transparent"
                  }`}></div>

                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-[85%] h-auto object-contain transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500 z-10"
                    style={{
                      filter: "drop-shadow(0 15px 20px rgba(31, 47, 111, 0.15))"
                    }}
                    referrerPolicy="no-referrer"
                  />

                  {/* Floating ingredients based on type */}
                  {product.type === "smooth" ? (
                    <>
                      {/* Peanut Butter Bowl overlay */}
                      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm border border-brand-yellow/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-brand-navy shadow-sm z-20 transform group-hover:translate-x-[-4px] transition-transform duration-300">
                        <span>🥣 Peanut Butter Bowl</span>
                      </div>
                      {/* Peanut graphic */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-brand-yellow/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-brand-navy shadow-sm z-20 transform group-hover:translate-y-[4px] transition-transform duration-300">
                        <span>🥜 Peanuts</span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Chocolate block overlay */}
                      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm border border-brand-brown/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-brand-navy shadow-sm z-20 transform group-hover:translate-x-[-4px] transition-transform duration-300">
                        <span>🍫 Chocolate blocks</span>
                      </div>
                      {/* Chocolate cream overlay */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-brand-brown/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-brand-navy shadow-sm z-20 transform group-hover:translate-y-[4px] transition-transform duration-300">
                        <span>🥣 Chocolate cream</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Info and Purchase Options */}
                <div className="flex-grow flex flex-col">
                  
                  {/* Name and Price */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-black text-brand-navy tracking-tight group-hover:text-brand-red transition-colors duration-300">
                      {product.name}
                    </h3>
                    <span className="text-xl font-bold text-brand-red bg-brand-red/10 px-3 py-1 rounded-full">
                      {product.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-brand-navy/70 text-sm sm:text-base font-medium mb-6 leading-relaxed">
                    {product.desc}
                  </p>

                  {/* Highlights/Ingredients List tags */}
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {product.ingredients.map((ing, i) => (
                      <span 
                        key={i} 
                        className="bg-brand-navy/5 text-brand-navy text-xs font-bold px-3 py-1.5 rounded-full border border-brand-navy/5"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>

                  {/* Buy Button */}
                  <button
                    id={`buy-button-${product.id}`}
                    onClick={() => onBuyNow(product.name)}
                    className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-red-600 text-white font-semibold py-4 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
                  >
                    <span>Buy Now</span>
                    <ShoppingCart className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Right Arrow Controls - Decorative match for mockup */}
          <button 
            id="next-product-btn"
            className="hidden xl:flex absolute right-[-60px] z-20 w-12 h-12 rounded-full border-2 border-brand-navy/10 hover:border-brand-navy/30 bg-white items-center justify-center text-brand-navy hover:text-brand-red shadow-sm hover:shadow transition-all duration-300 active:scale-95"
            aria-label="Next Product"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      </div>
    </section>
  );
}
