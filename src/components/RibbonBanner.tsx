import { motion } from 'framer-motion';

interface RibbonBannerProps {
  text: string;
}

const RibbonBanner = ({ text }: RibbonBannerProps) => {
  return (
    <motion.div
      className="relative inline-block"
      initial={{ scale: 0, rotate: -10 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      {/* Left ribbon tail */}
      <div className="absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 w-6 md:w-8 h-8 md:h-10 bg-christmas-red transform -skew-y-12 shadow-lg" />
      <div className="absolute -left-8 md:-left-10 top-1/2 -translate-y-1/2 translate-x-1">
        <div className="w-0 h-0 border-t-[12px] md:border-t-[16px] border-t-christmas-red border-l-[10px] md:border-l-[12px] border-l-transparent" />
        <div className="w-0 h-0 border-b-[12px] md:border-b-[16px] border-b-christmas-red border-l-[10px] md:border-l-[12px] border-l-transparent" />
      </div>

      {/* Main ribbon */}
      <div className="bg-christmas-red px-8 md:px-12 py-2 md:py-3 shadow-lg relative z-10">
        <span className="font-christmas text-lg md:text-2xl text-cream tracking-wide">
          {text}
        </span>
      </div>

      {/* Right ribbon tail */}
      <div className="absolute -right-6 md:-right-8 top-1/2 -translate-y-1/2 w-6 md:w-8 h-8 md:h-10 bg-christmas-red transform skew-y-12 shadow-lg" />
      <div className="absolute -right-8 md:-right-10 top-1/2 -translate-y-1/2 -translate-x-1">
        <div className="w-0 h-0 border-t-[12px] md:border-t-[16px] border-t-christmas-red border-r-[10px] md:border-r-[12px] border-r-transparent" />
        <div className="w-0 h-0 border-b-[12px] md:border-b-[16px] border-b-christmas-red border-r-[10px] md:border-r-[12px] border-r-transparent" />
      </div>

      {/* Ribbon fold shadows */}
      <div className="absolute -left-6 md:-left-8 top-1/2 w-2 h-6 md:h-8 bg-[hsl(0_60%_35%)] -translate-y-1/2 z-0" />
      <div className="absolute -right-6 md:-right-8 top-1/2 w-2 h-6 md:h-8 bg-[hsl(0_60%_35%)] -translate-y-1/2 z-0" />
    </motion.div>
  );
};

export default RibbonBanner;
