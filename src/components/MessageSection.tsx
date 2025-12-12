import { motion } from 'framer-motion';
import ChristmasOrnament from './ChristmasOrnament';

const MessageSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative">
      {/* Decorative ornaments */}
      <div className="absolute top-0 left-4 md:left-20 opacity-50">
        <ChristmasOrnament color="red" size="sm" delay={0} />
      </div>
      <div className="absolute top-10 right-4 md:right-20 opacity-50">
        <ChristmasOrnament color="green" size="md" delay={0.5} />
      </div>
      <div className="absolute bottom-0 left-1/4 opacity-50 hidden md:block">
        <ChristmasOrnament color="gold" size="sm" delay={1} />
      </div>

      <motion.div
        className="max-w-3xl mx-auto wood-frame p-8 md:p-12 text-center relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative corner */}
        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-gold rounded-tl-lg" />
        <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-gold rounded-tr-lg" />
        <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-gold rounded-bl-lg" />
        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-gold rounded-br-lg" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="font-christmas text-2xl md:text-4xl text-gold glow-gold mb-6">
            A Message From My Heart
          </h2>
        </motion.div>

        <motion.div
          className="space-y-4 md:space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl text-cream leading-relaxed italic">
            "My Dearest Son,"
          </p>
          
          <p className="text-lg md:text-xl text-cream/90 leading-relaxed">
            You are the greatest blessing that has ever graced my life.
          </p>
          
          <p className="text-lg md:text-xl text-cream/90 leading-relaxed">
            Every moment with you fills my heart with boundless joy and gratitude.
            Watching you grow brings me more happiness than words could ever express.
          </p>

          <p className="text-lg md:text-xl text-cream/90 leading-relaxed">
            May this Christmas season wrap you in warmth, wonder, and endless love.
            May your days be merry, your heart be light, and your dreams take flight.
          </p>

          <motion.p
            className="text-xl md:text-2xl text-gold font-christmas mt-8 glow-gold"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            With all my love, always and forever
          </motion.p>
        </motion.div>

        {/* Heart decoration */}
        <motion.div
          className="mt-8 text-christmas-red text-4xl md:text-5xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          ♥
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MessageSection;
