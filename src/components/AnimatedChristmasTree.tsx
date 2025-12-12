import { motion } from 'framer-motion';

const AnimatedChristmasTree = () => {
  const ornaments = [
    { x: 50, y: 35, color: 'bg-christmas-red', delay: 0 },
    { x: 30, y: 50, color: 'bg-gold', delay: 0.2 },
    { x: 70, y: 48, color: 'bg-christmas-red', delay: 0.4 },
    { x: 25, y: 65, color: 'bg-gold', delay: 0.6 },
    { x: 50, y: 60, color: 'bg-christmas-red', delay: 0.8 },
    { x: 75, y: 63, color: 'bg-gold', delay: 1 },
    { x: 20, y: 78, color: 'bg-christmas-red', delay: 1.2 },
    { x: 40, y: 75, color: 'bg-gold', delay: 1.4 },
    { x: 60, y: 77, color: 'bg-christmas-red', delay: 1.6 },
    { x: 80, y: 80, color: 'bg-gold', delay: 1.8 },
  ];

  const lights = [
    { x: 40, y: 32, delay: 0 },
    { x: 60, y: 38, delay: 0.3 },
    { x: 35, y: 47, delay: 0.6 },
    { x: 65, y: 55, delay: 0.9 },
    { x: 28, y: 62, delay: 1.2 },
    { x: 72, y: 70, delay: 1.5 },
    { x: 22, y: 85, delay: 1.8 },
    { x: 78, y: 85, delay: 2.1 },
  ];

  return (
    <div className="relative w-48 h-64 md:w-64 md:h-80">
      {/* Star on top */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 text-4xl md:text-5xl text-gold z-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          filter: 'drop-shadow(0 0 20px hsl(43 80% 55% / 0.8))',
        }}
      >
        ★
      </motion.div>

      {/* Tree layers */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Top layer */}
        <motion.polygon
          points="50,12 35,35 65,35"
          fill="hsl(145 45% 25%)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ transformOrigin: 'center' }}
        />
        {/* Middle layer */}
        <motion.polygon
          points="50,25 25,55 75,55"
          fill="hsl(145 45% 28%)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ transformOrigin: 'center' }}
        />
        {/* Bottom layer */}
        <motion.polygon
          points="50,40 15,85 85,85"
          fill="hsl(145 45% 22%)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ transformOrigin: 'center' }}
        />
        {/* Trunk */}
        <motion.rect
          x="42"
          y="85"
          width="16"
          height="12"
          fill="hsl(28 40% 25%)"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          style={{ transformOrigin: 'bottom' }}
        />
      </svg>

      {/* Twinkling lights */}
      {lights.map((light, i) => (
        <motion.div
          key={`light-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${light.x}%`,
            top: `${light.y}%`,
            background: i % 3 === 0 ? 'hsl(0 70% 50%)' : i % 3 === 1 ? 'hsl(43 80% 55%)' : 'hsl(200 80% 50%)',
            boxShadow: `0 0 10px currentColor`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 1,
            delay: light.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Ornaments */}
      {ornaments.map((ornament, i) => (
        <motion.div
          key={`ornament-${i}`}
          className={`absolute w-3 h-3 md:w-4 md:h-4 rounded-full ${ornament.color}`}
          style={{
            left: `${ornament.x}%`,
            top: `${ornament.y}%`,
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
            delay: ornament.delay + 1,
            type: 'spring',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedChristmasTree;
