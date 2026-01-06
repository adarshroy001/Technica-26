'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Beaker, Flame, Trophy } from "lucide-react";

const timelineEvents = [
  {
    day: "Day 1",
    date: "March 15, 2025",
    title: "The Cook Begins",
    description: "Opening ceremony, team formations, and preliminary rounds",
    icon: Beaker,
    purity: "98.1%",
  },
  {
    day: "Day 2",
    date: "March 16, 2025",
    title: "Full Synthesis",
    description: "Main rounds, workshops, technical sessions, and lab experiments",
    icon: Flame,
    purity: "99.1%",
  },
  {
    day: "Day 3",
    date: "March 17, 2025",
    title: "The Empire",
    description: "Final rounds, prize distribution, and closing ceremony",
    icon: Trophy,
    purity: "99.9%",
  },
];

const TimelineItem = ({ event, index }: { event: typeof timelineEvents[0]; index: number }) => {
  const Icon = event.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`flex items-start gap-6 md:gap-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
        {/* Day & Purity Row */}
        <div className={`flex items-center gap-4 mb-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-xl border-2 border-[#2ecc71]/40 bg-[#2ecc71]/5"
          >
            <Icon className="w-6 h-6 text-[#2ecc71]" />
          </motion.div>
          <div className={`${isEven ? "md:text-right" : "md:text-left"}`}>
            <span className="text-[#2ecc71] font-display text-2xl md:text-3xl font-bold tracking-wide block">
              {event.day}
            </span>
            <span className="font-mono text-xs text-[#2ecc71]/60 tracking-wider">
              {event.purity} PURE
            </span>
          </div>
        </div>
        
        {/* Date */}
        <p className="font-mono text-sm text-gray-500 mb-3 tracking-wider">
          {event.date}
        </p>
        
        {/* Title with underline */}
        <div className="relative inline-block mb-4">
          <h3 className="font-display text-3xl md:text-4xl tracking-wide text-white font-bold">
            {event.title}
          </h3>
          <motion.div 
            className={`absolute -bottom-2 h-[3px] bg-gradient-to-r from-[#2ecc71] to-[#0be881] rounded-full ${isEven ? "right-0" : "left-0"}`}
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>
        
        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md ml-auto md:ml-0 md:mr-0">
          {event.description}
        </p>
      </div>

      {/* Center Timeline Node */}
      <div className="hidden md:flex flex-col items-center pt-2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Outer ring */}
          <div className="w-5 h-5 rounded-full border-[3px] border-[#2ecc71] bg-[#0a0e0d]" />
          {/* Inner dot */}
          <div className="absolute inset-[6px] rounded-full bg-[#2ecc71]" />
          {/* Pulse effect */}
          <motion.div
            className="absolute -inset-2 rounded-full border border-[#2ecc71]/50"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.div>
        
        {/* Connector line to content */}
        <motion.div 
          className={`hidden md:block absolute w-12 h-[2px] bg-gradient-to-r from-[#2ecc71]/50 to-transparent top-[10px] ${isEven ? "right-full mr-1" : "left-full ml-1 rotate-180"}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Spacer */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-28 relative bg-[#0a0e0d]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2ecc71 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block font-mono text-sm tracking-[0.3em] text-[#2ecc71] uppercase mb-6"
          >
            Timeline
          </motion.span>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider mb-6">
            <span className="text-white">THE </span>
            <span 
              style={{
                background: "linear-gradient(135deg, #2ecc71 0%, #0be881 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >PROCESS</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#2ecc71]/50" />
            <Beaker className="w-5 h-5 text-[#2ecc71]/50" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#2ecc71]/50" />
          </div>
          
          <p className="text-gray-400 font-mono text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Three days of innovation, competition, and celebration.
            <br />
            <span className="text-[#2ecc71] font-semibold">No half measures.</span>
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            {/* Background line */}
            <div className="absolute inset-0 bg-gray-800/50 rounded-full" />
            {/* Animated progress line */}
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#2ecc71] via-[#0be881] to-[#2ecc71] rounded-full relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#2ecc71] rounded-full blur-sm opacity-50" />
            </motion.div>
          </div>

          {/* Events */}
          <div className="space-y-20 md:space-y-28">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={event.day} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* View Full Timeline Button */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a 
            href="/timeline"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#2ecc71] text-[#2ecc71] font-mono font-bold tracking-wider uppercase text-sm overflow-hidden transition-all duration-300 hover:text-black hover:shadow-[0_0_30px_rgba(46,204,113,0.4)]"
          >
            {/* Hover background fill */}
            <span className="absolute inset-0 bg-[#2ecc71] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3">
              View Full Timeline
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#2ecc71]" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#2ecc71]" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#2ecc71]" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#2ecc71]" />
          </a>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-gray-600 tracking-wider flex items-center gap-3">
            <span className="text-[#2ecc71]/50">C₁₀H₁₅N</span>
            <span className="w-2 h-2 rounded-full bg-[#2ecc71]/30" />
            <span>99.1% Pure</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;