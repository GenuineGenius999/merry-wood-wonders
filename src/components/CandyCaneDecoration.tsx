import { motion } from 'framer-motion';

interface CandyCaneProps {
  position: 'left' | 'right';
}

const CandyCaneDecoration = ({ position }: CandyCaneProps) => {
  return (
    <motion.div
      className={`absolute top-0 ${position === 'left' ? 'left-0' : 'right-0'} hidden lg:block`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <motion.svg
        width="60"
        height="200"
        viewBox="0 0 60 200"
        animate={{ rotate: position === 'left' ? [0, 3, -3, 0] : [0, -3, 3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'top center' }}
      >
        {/* Candy cane curve */}
        <defs>
          <pattern id={`stripes-${position}`} patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(45)">
            <rect width="6" height="12" fill="hsl(0 70% 45%)" />
            <rect x="6" width="6" height="12" fill="hsl(0 0% 95%)" />
          </pattern>
        </defs>
        
        {/* Hook part */}
        <path
          d={position === 'left' 
            ? "M 45 0 Q 45 40 25 50 Q 5 60 5 80 L 5 200" 
            : "M 15 0 Q 15 40 35 50 Q 55 60 55 80 L 55 200"
          }
          fill="none"
          stroke={`url(#stripes-${position})`}
          strokeWidth="14"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
};

export default CandyCaneDecoration;
