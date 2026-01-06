import { motion } from "framer-motion";

interface PeriodicElementProps {
  symbol: string;
  number: string;
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const PeriodicElement = ({ 
  symbol, 
  number, 
  name, 
  className = "",
  size = "md" 
}: PeriodicElementProps) => {
  const sizeClasses = {
    sm: "w-12 h-14 text-lg",
    md: "w-16 h-20 text-2xl",
    lg: "w-24 h-28 text-4xl",
  };

  const numberSize = {
    sm: "text-[8px]",
    md: "text-[10px]",
    lg: "text-xs",
  };

  const nameSize = {
    sm: "text-[6px]",
    md: "text-[8px]",
    lg: "text-[10px]",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(46, 204, 113, 0.5)" }}
      className={`${sizeClasses[size]} relative flex flex-col items-center justify-center 
        border-2 border-gray-500 bg-black/80 backdrop-blur-sm
        transition-all duration-300 ${className}`}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
      }}
    >
      {/* Atomic Number */}
      <span className={`absolute top-1 left-1.5 ${numberSize[size]} font-mono text-gray-400`}>
        {number}
      </span>
      
      {/* Symbol */}
      <span className="font-display font-bold text-gray-200 leading-none">
        {symbol}
      </span>
      
      {/* Element Name */}
      <span className={`${nameSize[size]} font-mono uppercase tracking-wider text-gray-500 mt-1`}>
        {name}
      </span>

      {/* Corner cut decoration */}
      <div className="absolute bottom-0 right-0 w-3 h-3 border-t border-l border-primary/30 
        transform rotate-45 translate-x-1 translate-y-1" />
    </motion.div>
  );
};
