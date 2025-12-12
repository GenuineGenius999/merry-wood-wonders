import { motion } from 'framer-motion';
import { useState } from 'react';

import christmas1 from '@/assets/christmas-1.jpg';
import christmas2 from '@/assets/christmas-2.jpg';
import christmas3 from '@/assets/christmas-3.jpg';
import christmas4 from '@/assets/christmas-4.jpg';
import christmas5 from '@/assets/christmas-5.jpg';
import christmas6 from '@/assets/christmas-6.jpg';
import christmas7 from '@/assets/christmas-7.jpg';
import christmas8 from '@/assets/christmas-8.jpg';

const photos = [
  christmas1,
  christmas2,
  christmas3,
  christmas4,
  christmas5,
  christmas6,
  christmas7,
  christmas8,
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-20 px-4 relative">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 text-4xl md:text-6xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.span
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎄
        </motion.span>
      </motion.div>

      <motion.h2
        className="font-christmas text-3xl md:text-5xl text-center text-gold glow-gold mb-4 md:mb-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Magical Moments
      </motion.h2>

      <motion.p
        className="text-center text-cream/70 mb-8 md:mb-12 text-lg md:text-xl italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        Cherished memories that warm our hearts
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="wood-frame overflow-hidden group cursor-pointer relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 + Math.random() * 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 + Math.random() * 6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
            onClick={() => setSelectedPhoto(photo)}
          >
            {/* Photo number badge */}
            <motion.div
              className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 bg-christmas-red rounded-full flex items-center justify-center text-cream text-xs md:text-sm font-bold z-10 shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
            >
              {index + 1}
            </motion.div>

            <div className="relative aspect-square overflow-hidden">
              <img
                src={photo}
                alt={`Christmas memory ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover overlay with icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-3xl md:text-4xl">✨</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] wood-frame p-2"
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto}
              alt="Selected memory"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <button
              className="absolute -top-4 -right-4 w-10 h-10 bg-christmas-red rounded-full flex items-center justify-center text-cream text-xl shadow-lg hover:scale-110 transition-transform"
              onClick={() => setSelectedPhoto(null)}
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Bottom decoration */}
      <motion.div
        className="flex justify-center gap-4 mt-8 text-2xl md:text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span>🎁</span>
        <span>⭐</span>
        <span>🎁</span>
      </motion.div>
    </section>
  );
};

export default PhotoGallery;
