import { motion } from 'framer-motion';
import TwinklingLights from './TwinklingLights';

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 px-4 relative">
      <TwinklingLights />
      
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="font-christmas text-3xl md:text-5xl text-gold glow-gold mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          Wishing You Joy and Wonder
        </motion.div>
        
        <p className="text-cream/70 text-lg md:text-xl mb-6">
          May your holidays be filled with love, laughter, and magical moments
        </p>

        {/* Christmas tree made of text */}
        <div className="text-christmas-green text-center leading-none font-mono">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            <div className="text-gold text-xl">★</div>
            <div>^</div>
            <div>^^^</div>
            <div>^^^^^</div>
            <div>^^^^^^^</div>
            <div>^^^^^^^^^</div>
            <div>^^^^^^^^^^^</div>
            <div className="text-wood-light">|||</div>
          </motion.div>
        </div>

        <p className="text-cream/50 text-sm mt-8">
          Made with love for my precious son
        </p>
        <p className="text-gold/60 text-sm">
          Christmas 
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
