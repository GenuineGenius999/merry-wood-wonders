import { motion } from 'framer-motion';

const WinterScene = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 overflow-hidden pointer-events-none">
      {/* Snow ground */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-snow to-snow/80"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Snow waves */}
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1200 50" preserveAspectRatio="none">
          <path
            d="M0,30 Q150,0 300,30 T600,30 T900,30 T1200,30 L1200,50 L0,50 Z"
            fill="hsl(210 20% 98%)"
          />
        </svg>
      </motion.div>

      {/* Pine trees */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-12 md:bottom-16"
          style={{ left: `${5 + i * 13}%` }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
        >
          <div
            className="text-christmas-green text-4xl md:text-6xl"
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
              transform: `scale(${0.6 + Math.random() * 0.6})`,
            }}
          >
            🌲
          </div>
        </motion.div>
      ))}

      {/* Snowman */}
      <motion.div
        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 text-4xl md:text-6xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5, type: 'spring' }}
      >
        ⛄
      </motion.div>
    </div>
  );
};

export default WinterScene;
