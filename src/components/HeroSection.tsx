import { motion } from 'framer-motion';
import TwinklingLights from './TwinklingLights';
import ChristmasOrnament from './ChristmasOrnament';
import AnimatedChristmasTree from './AnimatedChristmasTree';
import CandyCaneDecoration from './CandyCaneDecoration';
import RibbonBanner from './RibbonBanner';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">
      {/* Twinkling lights at top */}
      <div className="absolute top-0 left-0 right-0">
        <TwinklingLights />
      </div>

      {/* Candy cane decorations */}
      <CandyCaneDecoration position="left" />
      <CandyCaneDecoration position="right" />

      {/* Floating ornaments */}
      <div className="absolute top-24 left-8 md:left-20">
        <ChristmasOrnament color="red" size="lg" delay={0} />
      </div>
      <div className="absolute top-32 right-8 md:right-24">
        <ChristmasOrnament color="green" size="md" delay={0.3} />
      </div>
      <div className="absolute bottom-32 left-12 md:left-32 hidden md:block">
        <ChristmasOrnament color="gold" size="md" delay={0.6} />
      </div>
      <div className="absolute bottom-40 right-16 md:right-40 hidden md:block">
        <ChristmasOrnament color="red" size="sm" delay={0.9} />
      </div>

      {/* Christmas trees on sides */}
      <motion.div
        className="absolute bottom-10 left-4 md:left-16 hidden md:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <AnimatedChristmasTree />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-4 md:right-16 hidden md:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        <AnimatedChristmasTree />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Year ribbon */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <RibbonBanner text="Christmas 2025" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="font-christmas text-5xl md:text-8xl lg:text-9xl text-cream carved-text mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Merry
        </motion.h1>

        <motion.h1
          className="font-christmas text-6xl md:text-9xl lg:text-[10rem] text-christmas-red glow-gold mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
        >
          X'mas
        </motion.h1>

        {/* Decorative bells */}
        <motion.div
          className="flex justify-center gap-4 mb-6 text-3xl md:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <motion.span
            animate={{ rotate: [-15, 15, -15] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            🔔
          </motion.span>
          <span>🎄</span>
          <motion.span
            animate={{ rotate: [15, -15, 15] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            🔔
          </motion.span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-3xl text-gold/80 font-body italic max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          A Special Gift of Love
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { delay: 1.5, duration: 1.5, repeat: Infinity },
          }}
        >
          <div className="w-6 h-10 border-2 border-cream/50 rounded-full mx-auto flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-cream/70 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <p className="text-cream/50 text-sm mt-2">Scroll Down</p>
        </motion.div>
      </motion.div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
