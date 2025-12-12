import { motion } from 'framer-motion';

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
  return (
    <section className="py-12 md:py-20 px-4">
      <motion.h2
        className="font-christmas text-3xl md:text-5xl text-center text-gold glow-gold mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Magical Moments
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="wood-frame overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 + Math.random() * 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 + Math.random() * 6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={photo}
                alt={`Christmas memory ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
