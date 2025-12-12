import { motion } from 'framer-motion';

const SantaSleigh = () => {
  return (
    <motion.div
      className="fixed top-20 left-0 z-30 pointer-events-none"
      initial={{ x: '-100%' }}
      animate={{ x: '100vw' }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatDelay: 15,
        ease: 'linear',
      }}
    >
      <div className="flex items-end gap-1 text-2xl md:text-4xl">
        <motion.span
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          ✨
        </motion.span>
        <span>🦌</span>
        <span>🦌</span>
        <motion.span
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          🛷
        </motion.span>
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          🎅
        </motion.span>
        <motion.span
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 0.3, repeat: Infinity }}
        >
          ✨
        </motion.span>
      </div>
    </motion.div>
  );
};

export default SantaSleigh;
