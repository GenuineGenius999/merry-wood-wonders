import Snowfall from '@/components/Snowfall';
import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import MessageSection from '@/components/MessageSection';
import AudioPlayer from '@/components/AudioPlayer';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  // Replace this with your audio URL when ready
  const audioUrl = '';

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Falling snow effect */}
      <Snowfall />

      {/* Hero Section */}
      <HeroSection />

      {/* Photo Gallery */}
      <PhotoGallery />

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
