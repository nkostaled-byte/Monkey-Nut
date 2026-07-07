/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Monkey Nut Smooth");

  // Smooth scroll handler for nav clicks
  const handleNavClick = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Standard cart trigger for various CTA buttons
  const triggerCart = (productName: string) => {
    setSelectedProduct(productName);
    setIsCartOpen(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <Header 
        onNavClick={handleNavClick} 
        onBuyNowClick={() => triggerCart("Monkey Nut Smooth")} 
      />

      {/* Main Sections Stack */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onShopNowClick={() => triggerCart("Monkey Nut Smooth")} 
          onViewProductsClick={() => handleNavClick("products")} 
        />

        {/* Features Bulletpoints Section */}
        <Features />

        {/* Carousel Products Section */}
        <Products onBuyNow={triggerCart} />

        {/* About Company Pillars Section */}
        <About onLearnMore={() => handleNavClick("contact")} />

        {/* Interactive Media Gallery Section */}
        <Gallery />

        {/* Interactive Inquiry Contact Form Section */}
        <Contact />

        {/* Campaign Email Newsletter Signup Section */}
        <Newsletter />
      </main>

      {/* Footer Details Grid */}
      <Footer onNavClick={handleNavClick} />

      {/* Slide-out Checkout Drawer */}
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        defaultProduct={selectedProduct} 
      />
    </div>
  );
}
