import { motion } from 'framer-motion';

const SparkleStars = () => {
  const stars = [...Array(30)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute text-gold"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            fontSize: `${star.size}px`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  );
};

export default SparkleStars;
