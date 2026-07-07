import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Plus, Minus, ShoppingBag, CreditCard, CheckCircle, Truck } from "lucide-react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct: string;
}

export default function CartModal({ isOpen, onClose, defaultProduct }: CartModalProps) {
  const [variant, setVariant] = useState<"smooth" | "chocolate">(
    defaultProduct.toLowerCase().includes("chocolate") ? "chocolate" : "smooth"
  );
  const [quantity, setQuantity] = useState(1);
  const [step, setStep] = useState<"cart" | "checkout" | "done">("cart");
  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    city: "",
    phone: ""
  });

  const pricePerCase = variant === "smooth" ? 149.00 : 169.00; // Case of 20 sachets
  const subtotal = pricePerCase * quantity;
  const shippingCost = subtotal > 300 ? 0 : 45.00;
  const total = subtotal + shippingCost;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (shipping.name && shipping.address && shipping.city) {
      setStep("done");
      setTimeout(() => {
        // Reset state after closure
        setStep("cart");
        setQuantity(1);
        setShipping({ name: "", address: "", city: "", phone: "" });
        onClose();
      }, 5000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end select-none">
          {/* Backdrop Blur */}
          <motion.div
            id="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Checkout Drawer panel */}
          <motion.div
            id="cart-drawer-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="relative w-full max-w-lg h-full bg-white shadow-2xl flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center gap-2 text-brand-navy">
                <ShoppingBag className="w-5 h-5 text-brand-red" />
                <h3 className="text-xl font-black tracking-tight">
                  {step === "cart" && "Customize Order"}
                  {step === "checkout" && "Secure Checkout"}
                  {step === "done" && "Order Complete!"}
                </h3>
              </div>
              <button
                id="cart-close-btn"
                onClick={onClose}
                className="text-brand-navy/60 hover:text-brand-red p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable body content */}
            <div className="flex-grow overflow-y-auto px-6 py-6">
              
              {/* STEP 1: CART CUSTOMIZATION */}
              {step === "cart" && (
                <div className="space-y-8">
                  {/* Snack Case Info */}
                  <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-2xl p-5 flex items-center gap-4">
                    <span className="text-4xl">📦</span>
                    <div>
                      <h4 className="font-extrabold text-brand-navy text-base">Monkey Nut Box Case</h4>
                      <p className="text-brand-navy/60 text-xs font-semibold">Includes 20 pocket-sized sachets (15g each)</p>
                    </div>
                  </div>

                  {/* Choice of Flavours */}
                  <div className="space-y-3">
                    <label className="text-brand-navy font-extrabold text-sm uppercase">Select Flavour</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        id="select-smooth-variant"
                        onClick={() => setVariant("smooth")}
                        className={`p-4 rounded-2xl border-2 font-extrabold text-sm sm:text-base transition-all duration-300 text-center cursor-pointer flex flex-col gap-1 items-center ${
                          variant === "smooth"
                            ? "border-brand-yellow bg-brand-yellow/10 text-brand-navy"
                            : "border-gray-100 bg-white text-brand-navy/60 hover:border-gray-200"
                        }`}
                      >
                        <span className="text-2xl">🥜</span>
                        <span>Smooth Classic</span>
                        <span className="text-xs text-brand-navy/50 font-semibold">R149.00/box</span>
                      </button>

                      <button
                        id="select-chocolate-variant"
                        onClick={() => setVariant("chocolate")}
                        className={`p-4 rounded-2xl border-2 font-extrabold text-sm sm:text-base transition-all duration-300 text-center cursor-pointer flex flex-col gap-1 items-center ${
                          variant === "chocolate"
                            ? "border-brand-brown bg-brand-brown/10 text-brand-navy"
                            : "border-gray-100 bg-white text-brand-navy/60 hover:border-gray-200"
                        }`}
                      >
                        <span className="text-2xl">🍫</span>
                        <span>Chocolate Crunch</span>
                        <span className="text-xs text-brand-navy/50 font-semibold">R169.00/box</span>
                      </button>
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center justify-between bg-gray-50 px-5 py-4 rounded-2xl border border-gray-100">
                    <span className="text-brand-navy font-extrabold text-sm sm:text-base uppercase">Quantity (Boxes)</span>
                    <div className="flex items-center gap-4">
                      <button
                        id="quantity-decrease"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-navy hover:text-brand-red transition-all cursor-pointer shadow-sm active:scale-95"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-brand-navy font-black text-xl w-6 text-center">{quantity}</span>
                      <button
                        id="quantity-increase"
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-navy hover:text-brand-red transition-all cursor-pointer shadow-sm active:scale-95"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Free shipping milestone helper */}
                  {subtotal < 300 ? (
                    <div className="bg-brand-yellow/15 border border-brand-yellow/30 p-4 rounded-2xl text-xs sm:text-sm font-semibold text-brand-navy/90 flex gap-2.5 items-center">
                      <span>🚚</span>
                      <span>Add <b>R{(300 - subtotal).toFixed(2)}</b> more for <b>FREE Shipping</b>!</span>
                    </div>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-xs sm:text-sm font-semibold text-emerald-800 flex gap-2.5 items-center">
                      <span>🎉</span>
                      <span>Congrats! You qualify for <b>FREE Shipping</b>!</span>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 2: SHIPPING AND BILLING */}
              {step === "checkout" && (
                <form id="shipping-checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="shipping-name" className="text-brand-navy font-extrabold text-xs uppercase">Recipient Name</label>
                    <input
                      type="text"
                      id="shipping-name"
                      required
                      placeholder="Jane Doe"
                      value={shipping.name}
                      onChange={(e) => setShipping({ ...shipping, name: e.target.value })}
                      className="bg-gray-50 text-brand-navy border border-gray-200 focus:border-brand-red font-semibold px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/10 transition-all text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="shipping-address" className="text-brand-navy font-extrabold text-xs uppercase">Street Address</label>
                    <input
                      type="text"
                      id="shipping-address"
                      required
                      placeholder="123 Peanut Lane"
                      value={shipping.address}
                      onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
                      className="bg-gray-50 text-brand-navy border border-gray-200 focus:border-brand-red font-semibold px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/10 transition-all text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="shipping-city" className="text-brand-navy font-extrabold text-xs uppercase">City</label>
                      <input
                        type="text"
                        id="shipping-city"
                        required
                        placeholder="Cape Town"
                        value={shipping.city}
                        onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                        className="bg-gray-50 text-brand-navy border border-gray-200 focus:border-brand-red font-semibold px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/10 transition-all text-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="shipping-phone" className="text-brand-navy font-extrabold text-xs uppercase">Phone</label>
                      <input
                        type="tel"
                        id="shipping-phone"
                        placeholder="061 695 2375"
                        value={shipping.phone}
                        onChange={(e) => setShipping({ ...shipping, phone: e.target.value })}
                        className="bg-gray-50 text-brand-navy border border-gray-200 focus:border-brand-red font-semibold px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/10 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <span className="text-brand-navy font-extrabold text-xs uppercase">Mock Payment Info</span>
                    <div className="border border-brand-navy/15 bg-brand-navy/5 rounded-2xl p-4 flex items-center justify-between text-brand-navy font-bold text-sm">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-brand-red" />
                        <span>Credit / Debit Card</span>
                      </div>
                      <span className="text-brand-red">Simulated Active</span>
                    </div>
                  </div>
                </form>
              )}

              {/* STEP 3: SUCCESS FEEDBACK */}
              {step === "done" && (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 border border-emerald-100">
                    <CheckCircle className="w-10 h-10 animate-bounce" />
                  </div>
                  <h4 className="text-brand-navy font-black text-2xl tracking-tight mb-3">Order Confirmed!</h4>
                  <p className="text-brand-navy/70 text-base font-semibold leading-relaxed max-w-sm mb-6">
                    Thank you for your purchase, {shipping.name || "friend"}! Your sachet energy box is getting packaged with love right now.
                  </p>
                  
                  <div className="bg-brand-navy/5 border border-brand-navy/10 p-5 rounded-2xl w-full text-left space-y-3">
                    <div className="flex justify-between font-bold text-xs sm:text-sm text-brand-navy">
                      <span>Item:</span>
                      <span className="text-brand-red">Monkey Nut {variant === "smooth" ? "Smooth" : "Chocolate"} ({quantity} Box{quantity > 1 ? "es" : ""})</span>
                    </div>
                    <div className="flex justify-between font-bold text-xs sm:text-sm text-brand-navy">
                      <span>Shipping Address:</span>
                      <span>{shipping.address}, {shipping.city}</span>
                    </div>
                    <div className="flex justify-between font-black text-sm text-brand-navy pt-2 border-t border-brand-navy/10">
                      <span>Paid Total:</span>
                      <span>R{total.toFixed(2)}</span>
                    </div>
                  </div>

                  <span className="text-xs text-brand-navy/40 font-bold uppercase mt-8 block animate-pulse">Closing automatically in a few seconds...</span>
                </div>
              )}

            </div>

            {/* Sticky summary and action buttons at the bottom */}
            {step !== "done" && (
              <div className="border-t border-gray-100 bg-gray-50 px-6 py-6 space-y-4 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                
                {/* Invoice Pricing */}
                <div className="space-y-2">
                  <div className="flex justify-between text-brand-navy/70 font-semibold text-sm">
                    <span>Subtotal:</span>
                    <span>R{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-brand-navy/70 font-semibold text-sm">
                    <span>Shipping:</span>
                    <span>{shippingCost === 0 ? "FREE" : `R${shippingCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-brand-navy font-black text-lg pt-2 border-t border-brand-navy/10">
                    <span>Grand Total:</span>
                    <span className="text-brand-red">R{total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Primary Action Button */}
                {step === "cart" ? (
                  <button
                    id="cart-checkout-btn"
                    onClick={() => setStep("checkout")}
                    className="w-full bg-brand-red hover:bg-red-600 text-white font-extrabold py-4 rounded-full shadow-lg transition-all duration-300 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Checkout</span>
                    <Truck className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    id="cart-submit-btn"
                    type="submit"
                    form="shipping-checkout-form"
                    className="w-full bg-brand-navy hover:bg-[#121c43] text-white font-extrabold py-4 rounded-full shadow-lg transition-all duration-300 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Authorize Simulated Pay</span>
                    <CheckCircle className="w-5 h-5 text-brand-yellow" />
                  </button>
                )}

                {/* Back Link */}
                {step === "checkout" && (
                  <button
                    id="cart-back-btn"
                    onClick={() => setStep("cart")}
                    className="w-full text-center font-bold text-brand-navy/60 hover:text-brand-navy text-sm py-1 cursor-pointer"
                  >
                    Modify Selection
                  </button>
                )}
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
