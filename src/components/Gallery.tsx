import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, Eye } from "lucide-react";

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=600",
      title: "Playground Energy Pack",
      category: "Snack Time"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=600",
      title: "Healthy School Lunchbox",
      category: "Parent Approved"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
      title: "Active Outdoor Kids",
      category: "Fun & Play"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600",
      title: "Delicious Creamy Spread",
      category: "Pure Goodness"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600",
      title: "Smile in Every Sachet",
      category: "Loved by Kids"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&q=80&w=600",
      title: "Perfect Picnic Snack",
      category: "On The Go"
    }
  ];

  return (
    <section id="gallery" className="bg-gray-50 py-24 lg:py-32 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 id="gallery-heading" className="text-4xl sm:text-5xl font-black tracking-tight inline-flex flex-wrap justify-center gap-x-4">
            <span className="text-brand-navy">MONKEY NUT</span>
            <span className="text-brand-red relative">
              GALLERY
              <span className="absolute bottom-[-10px] left-0 right-0 h-[6px] bg-brand-yellow rounded-full"></span>
            </span>
          </h2>
          <p className="text-brand-navy/70 text-base sm:text-lg font-semibold mt-4 max-w-xl mx-auto">
            See how children, parents, and schools bring the fun of Monkey Nut snacks to life!
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <motion.div
              key={img.id}
              id={`gallery-item-${img.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden aspect-4/3 bg-white border border-gray-100 shadow-md group cursor-pointer"
              onClick={() => setSelectedImg(img)}
            >
              {/* Image element */}
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Hover Dark Vignette & Details Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-yellow font-extrabold text-xs uppercase tracking-wider mb-1.5">
                  {img.category}
                </span>
                <h3 className="text-white font-extrabold text-lg sm:text-xl tracking-tight flex items-center justify-between">
                  <span>{img.title}</span>
                  <Eye className="w-5 h-5 text-white/80" />
                </h3>
              </div>

              {/* Playful Floating Category Tag in top-left */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-gray-100 text-brand-navy font-bold text-xs px-3.5 py-1.5 rounded-full shadow-sm group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all">
                {img.category}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            id="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-navy/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button
              id="lightbox-close-btn"
              className="absolute top-6 right-6 text-white hover:text-brand-red bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImg(null)}
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Container Content */}
            <motion.div
              id="lightbox-container"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-16/10 sm:aspect-16/9 w-full bg-gray-900">
                <img
                  src={selectedImg.url}
                  alt={selectedImg.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-brand-red font-extrabold text-sm uppercase tracking-wider block mb-1">
                    {selectedImg.category}
                  </span>
                  <h3 className="text-brand-navy font-black text-xl sm:text-2xl tracking-tight">
                    {selectedImg.title}
                  </h3>
                </div>
                <button
                  id="lightbox-modal-cta"
                  onClick={() => setSelectedImg(null)}
                  className="bg-brand-navy hover:bg-brand-red text-white font-bold px-6 py-3 rounded-2xl text-sm transition-all duration-300"
                >
                  Awesome!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
