import { motion } from 'framer-motion';

interface ChristmasOrnamentProps {
  color: 'red' | 'green' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
}

const ChristmasOrnament = ({ color, size = 'md', delay = 0 }: ChristmasOrnamentProps) => {
  const sizeClasses = {
    sm: 'w-8 h-10',
    md: 'w-12 h-14',
    lg: 'w-16 h-20',
  };

  const colorClasses = {
    red: 'from-christmas-red to-christmas-red-light',
    green: 'from-christmas-green to-christmas-green-light',
    gold: 'from-gold to-gold-light',
  };

  return (
    <motion.div
      className="relative ornament-shadow"
      animate={{ rotate: [-5, 5, -5] }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ transformOrigin: 'top center' }}
    >
      {/* Hook */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-3 border-2 border-gold rounded-t-full" />
      
      {/* Ornament body */}
      <motion.div
        className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${colorClasses[color]} relative`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.5, type: 'spring' }}
      >
        {/* Shine effect */}
        <div className="absolute top-2 left-2 w-1/4 h-1/4 bg-snow/40 rounded-full blur-sm" />
        
        {/* Pattern */}
        <div className="absolute inset-2 border border-snow/20 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export default ChristmasOrnament;
