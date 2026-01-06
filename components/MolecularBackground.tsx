import { motion } from "framer-motion";

export const MolecularBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Hexagonal molecular grid */}
      <div className="absolute inset-0 hex-pattern opacity-20" />
      
      {/* Reduced floating molecules - only 3 with simpler animations */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            top: `${25 + (i % 2) * 30}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Molecule size={40 + i * 15} />
        </motion.div>
      ))}

      {/* Reduced crystal shards - only 4 static with fade */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`crystal-${i}`}
          className="absolute"
          style={{
            left: `${15 + i * 25}%`,
            top: `${35 + (i % 2) * 25}%`,
          }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <CrystalShard size={25 + i * 8} />
        </motion.div>
      ))}
    </div>
  );
};

const Molecule = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className="text-[#2ecc71]/30"
  >
    {/* Central atom */}
    <circle cx="50" cy="50" r="8" fill="currentColor" />
    
    {/* Bonds and outer atoms */}
    <line x1="50" y1="50" x2="20" y2="30" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="30" r="5" fill="currentColor" />
    
    <line x1="50" y1="50" x2="80" y2="30" stroke="currentColor" strokeWidth="2" />
    <circle cx="80" cy="30" r="5" fill="currentColor" />
    
    <line x1="50" y1="50" x2="50" y2="85" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="85" r="5" fill="currentColor" />
    
    <line x1="50" y1="50" x2="25" y2="70" stroke="currentColor" strokeWidth="2" />
    <circle cx="25" cy="70" r="4" fill="currentColor" />
  </svg>
);

const CrystalShard = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size * 1.5}
    viewBox="0 0 40 60"
    className="text-[#2ecc71]/20"
  >
    <polygon
      points="20,0 40,20 35,60 5,60 0,20"
      fill="currentColor"
      stroke="rgba(46, 204, 113, 0.4)"
      strokeWidth="1"
    />
    <polygon
      points="20,0 30,15 20,50 10,15"
      fill="rgba(46, 204, 113, 0.3)"
    />
  </svg>
);
