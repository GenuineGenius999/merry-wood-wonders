import Snowfall from '@/components/Snowfall';
import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import MessageSection from '@/components/MessageSection';
import AudioPlayer from '@/components/AudioPlayer';
import Footer from '@/components/Footer';
import FloatingGifts from '@/components/FloatingGifts';
import SparkleStars from '@/components/SparkleStars';
import SantaSleigh from '@/components/SantaSleigh';
import { motion } from 'framer-motion';

const Index = () => {
  // Replace this with your audio URL when ready
  const audioUrl = '';

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Background effects */}
      <Snowfall />
      <FloatingGifts />
      <SparkleStars />
      <SantaSleigh />

      {/* Hero Section */}
      <HeroSection />

      {/* Decorative divider */}
      <motion.div
        className="flex justify-center items-center py-8"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4">
          <div className="w-16 md:w-32 h-0.5 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-2xl md:text-3xl">🎄</span>
          <span className="text-xl md:text-2xl text-gold">✦</span>
          <span className="text-2xl md:text-3xl">🎄</span>
          <div className="w-16 md:w-32 h-0.5 bg-gradient-to-l from-transparent to-gold" />
        </div>
      </motion.div>

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Decorative divider */}
      <motion.div
        className="flex justify-center items-center py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4">
          <span className="text-xl md:text-2xl">⭐</span>
          <div className="w-20 md:w-40 h-0.5 bg-christmas-red" />
          <span className="text-2xl md:text-3xl">🎁</span>
          <div className="w-20 md:w-40 h-0.5 bg-christmas-red" />
          <span className="text-xl md:text-2xl">⭐</span>
        </div>
      </motion.div>

      {/* Audio Player Section */}
      <motion.section
        className="py-12 md:py-16 px-4 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <AudioPlayer audioUrl={audioUrl} />
      </motion.section>

      {/* Message Section */}
      <MessageSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
