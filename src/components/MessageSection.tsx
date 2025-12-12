import { motion } from 'framer-motion';
import ChristmasOrnament from './ChristmasOrnament';
import WinterScene from './WinterScene';

const MessageSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Decorative ornaments */}
      <div className="absolute top-0 left-4 md:left-20 opacity-50">
        <ChristmasOrnament color="red" size="sm" delay={0} />
      </div>
      <div className="absolute top-10 right-4 md:right-20 opacity-50">
        <ChristmasOrnament color="green" size="md" delay={0.5} />
      </div>
      <div className="absolute bottom-40 left-1/4 opacity-50 hidden md:block">
        <ChristmasOrnament color="gold" size="sm" delay={1} />
      </div>

      {/* Decorative header */}
      <motion.div
        className="flex justify-center items-center gap-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="text-2xl md:text-3xl"
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🕯️
        </motion.span>
        <span className="text-gold text-3xl">✦</span>
        <motion.span
          className="text-2xl md:text-3xl"
          animate={{ rotate: [10, -10, 10] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🕯️
        </motion.span>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto wood-frame p-8 md:p-12 text-center relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative corner ribbons */}
        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-gold rounded-tl-lg" />
        <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-gold rounded-tr-lg" />
        <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-gold rounded-bl-lg" />
        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-gold rounded-br-lg" />

        {/* Holly decoration at top */}
        <motion.div
          className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl md:text-4xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎀
        </motion.div>

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
          <motion.p 
            className="text-xl md:text-2xl text-cream leading-relaxed italic"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            "My Dearest Son,"
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-cream/90 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            You are the greatest blessing that has ever graced my life.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-cream/90 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Every moment with you fills my heart with boundless joy and gratitude.
            Watching you grow brings me more happiness than words could ever express.
          </motion.p>

          <motion.p 
            className="text-lg md:text-xl text-cream/90 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            May this Christmas season wrap you in warmth, wonder, and endless love.
            May your days be merry, your heart be light, and your dreams take flight.
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl text-gold font-christmas mt-8 glow-gold"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            With all my love, always and forever
          </motion.p>
        </motion.div>

        {/* Animated hearts */}
        <motion.div
          className="mt-8 flex justify-center gap-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="text-christmas-red text-3xl md:text-4xl"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: 'easeInOut',
                delay: i * 0.2
              }}
            >
              ♥
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Winter scene at bottom */}
      <WinterScene />
    </section>
  );
};

export default MessageSection;
