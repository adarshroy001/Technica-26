"use client";
import { motion, Variants } from "framer-motion";
import { FlaskConical, Calendar } from "lucide-react";
import { PeriodicElement } from "@/components/PeriodicElement";

// Letter animation variants
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9 + i * 0.08,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Glitch effect for "Engineering The Unbreakable"
const glitchVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { delay: 1.3, duration: 0.5 },
  },
};

const Hero = () => {
  const technicaLetters = "TECHNICA".split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          {/* Add your video source here */}
          <source
            src="https://res.cloudinary.com/dfosbixpu/video/upload/v1767845449/8733059-hd_1920_1080_30fps_booi69.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

        {/* Green tint overlay for Breaking Bad feel */}
        <div className="absolute inset-0 bg-[#2ecc71]/5 mix-blend-overlay" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10 z-[1]" />

      {/* Floating periodic elements - minimal for cleaner look with video */}
      {/* <motion.div
        className="absolute top-[20%] left-[8%] hidden xl:block z-[2]"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <PeriodicElement symbol="Fe" number="26" name="Iron" size="sm" />
      </motion.div>

      <motion.div
        className="absolute top-[25%] right-[8%] hidden xl:block z-[2]"
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <PeriodicElement symbol="Cu" number="29" name="Copper" size="sm" />
      </motion.div> */}

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 bg-black/70 border border-[#2ecc71]/50 rounded-full mb-10"
        >
          <Calendar className="w-4 h-4 text-[#2ecc71]" />
          <span className="font-mono text-xs md:text-sm tracking-wider text-[#2ecc71] font-medium">
            JANUARY 16-18, 2026
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc71]" />
          <span className="font-mono text-xs md:text-sm tracking-wider text-gray-300">
            NIT JAMSHEDPUR
          </span>
        </motion.div>

        {/* Main Title with Periodic Table Style */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3.5 md:gap-3 flex-wrap"
          >
            {/* Te */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <PeriodicElement
                symbol="Te"
                number="52"
                name="Tellurium"
                size="lg"
              />
            </motion.div>

            {/* C */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-24 h-28 relative flex flex-col items-center justify-center 
                border-2 border-[#2ecc71] bg-black/80"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
              }}
            >
              <span className="absolute top-1 left-1.5 text-xs font-mono text-[#2ecc71]/80">
                6
              </span>
              <span className="font-display font-bold text-4xl text-[#2ecc71] leading-none">
                C
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-1">
                Carbon
              </span>
            </motion.div>

            {/* H */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <PeriodicElement
                symbol="H"
                number="1"
                name="Hydrogen"
                size="lg"
              />
            </motion.div>

            {/* Ni */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <PeriodicElement
                symbol="Ni"
                number="28"
                name="Nickel"
                size="lg"
              />
            </motion.div>

            {/* Ca */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <PeriodicElement
                symbol="Ca"
                number="20"
                name="Calcium"
                size="lg"
              />
            </motion.div>
          </motion.div>

          {/* TECHNICA text below - letter by letter animation */}
          <motion.h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] mt-5 flex justify-center">
            {technicaLetters.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, #2ecc71 0%, #0be881 50%, #10ac84 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-mono text-sm md:text-base tracking-wider text-gray-400 uppercase mb-8"
        >
          Annual Branch Fest of{" "}
          <span className="text-white">
            Metallurgical & Materials Engineering
          </span>
        </motion.p>

        {/* Tagline - Breaking Bad "Engineering The Unbreakable" with glitch effect */}
        <motion.div
          variants={glitchVariants}
          initial="initial"
          animate="animate"
          className="relative inline-block"
        >
          {/* Glitch layers */}
          <motion.span
            className="absolute inset-0 text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-wide text-[#2ecc71] opacity-0"
            animate={{
              opacity: [0, 0.8, 0],
              x: [-2, 2, -2],
              transition: {
                delay: 2,
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 4,
              },
            }}
          >
            "Engineering The Unbreakable"
          </motion.span>
          <motion.span
            className="absolute inset-0 text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-wide text-[#0be881] opacity-0"
            animate={{
              opacity: [0, 0.8, 0],
              x: [2, -2, 2],
              transition: {
                delay: 2.05,
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 4,
              },
            }}
          >
            "Engineering The Unbreakable"
          </motion.span>

          {/* Main text with shimmer effect */}
          <motion.span
            className="relative text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-wide"
            style={{
              background:
                "linear-gradient(90deg, #2ecc71 0%, #0be881 50%, #2ecc71 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          >
            "Engineering The Unbreakable"
          </motion.span>

          {/* Subtle glow behind tagline */}
          <motion.div
            className="absolute inset-0 blur-2xl bg-[#2ecc71]/30 -z-10"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Chemical formula decoration with typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-4 text-gray-500 font-mono text-xs"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.3 }}
          >
            C₁₀H₁₅N
          </motion.span>
          <motion.span
            className="w-8 h-px bg-gradient-to-r from-transparent via-[#2ecc71]/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.2, duration: 0.4 }}
          />
          <motion.div
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 2.4, duration: 0.5 }}
          >
            <FlaskConical className="w-4 h-4 text-[#2ecc71]/50" />
          </motion.div>
          <motion.span
            className="w-8 h-px bg-gradient-to-r from-transparent via-[#2ecc71]/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.6, duration: 0.4 }}
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0.7, 1] }}
            transition={{ delay: 2.8, duration: 0.5 }}
            className="text-[#2ecc71]/70"
          >
            99.1% Pure
          </motion.span>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e0d] to-transparent z-[5]" />
    </section>
  );
};

export default Hero;
