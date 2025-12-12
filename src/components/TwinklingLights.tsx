import { motion } from 'framer-motion';

const TwinklingLights = () => {
  const lights = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    color: i % 4 === 0 ? 'bg-christmas-red' : i % 4 === 1 ? 'bg-christmas-green' : i % 4 === 2 ? 'bg-gold' : 'bg-snow',
    delay: i * 0.1,
  }));

  return (
    <div className="w-full flex justify-center gap-4 md:gap-6 py-4 flex-wrap px-4">
      {lights.map((light) => (
        <motion.div
          key={light.id}
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: light.delay, duration: 0.3 }}
        >
          {/* Wire */}
          <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-muted-foreground/30" />
          
          {/* Light bulb */}
          <motion.div
            className={`w-3 h-4 md:w-4 md:h-5 rounded-full ${light.color}`}
            animate={{
              opacity: [1, 0.4, 1],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 1 + Math.random(),
              delay: light.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              boxShadow: `0 0 10px currentColor, 0 0 20px currentColor`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TwinklingLights;
