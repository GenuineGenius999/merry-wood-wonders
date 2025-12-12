import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = [];
    for (let i = 0; i < 80; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 10 + 6,
        duration: Math.random() * 12 + 8,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute text-snow"
          style={{
            left: `${flake.x}%`,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
          }}
          initial={{ y: -50, rotate: 0 }}
          animate={{
            y: '110vh',
            rotate: 360,
            x: [0, 30, -30, 20, -20, 0],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear',
            x: {
              duration: flake.duration / 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          *
        </motion.div>
      ))}
    </div>
  );
};

export default Snowfall;
