import { motion } from 'framer-motion';

const gifts = [
  { emoji: '🎁', size: 'text-3xl md:text-4xl', x: '5%', delay: 0 },
  { emoji: '🎀', size: 'text-2xl md:text-3xl', x: '15%', delay: 2 },
  { emoji: '🎁', size: 'text-4xl md:text-5xl', x: '25%', delay: 4 },
  { emoji: '🎄', size: 'text-3xl md:text-4xl', x: '35%', delay: 1 },
  { emoji: '⭐', size: 'text-2xl md:text-3xl', x: '45%', delay: 3 },
  { emoji: '🎁', size: 'text-3xl md:text-4xl', x: '55%', delay: 5 },
  { emoji: '🔔', size: 'text-2xl md:text-3xl', x: '65%', delay: 2.5 },
  { emoji: '🎁', size: 'text-4xl md:text-5xl', x: '75%', delay: 0.5 },
  { emoji: '🎀', size: 'text-3xl md:text-4xl', x: '85%', delay: 3.5 },
  { emoji: '⭐', size: 'text-2xl md:text-3xl', x: '95%', delay: 1.5 },
];

const FloatingGifts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {gifts.map((gift, i) => (
        <motion.div
          key={i}
          className={`absolute ${gift.size}`}
          style={{ left: gift.x, top: -50 }}
          animate={{
            y: ['0vh', '110vh'],
            rotate: [0, 360],
            x: [0, 20, -20, 10, -10, 0],
          }}
          transition={{
            y: {
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: gift.delay,
              ease: 'linear',
            },
            rotate: {
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'linear',
            },
            x: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {gift.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingGifts;
