"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// Shared events data - export for use in events page
export const eventsData = [
  {
    id: 1,
    name: "CHITRANKIT",
    description:
      "The Technical Poster Presentation: A platform to showcase research, analysis, and visual storytelling through impactful technical posters in Metallurgy & Materials Engineering.",
    prizepool: "₹8,000",
    images: [
      "/images/events/metalforge-1.jpg",
      "/images/events/metalforge-2.jpg",
      "/images/events/metalforge-3.jpg",
    ],
  },
  {
    id: 2,
    name: "METAL QUIZ",
    description:
      "Test Your Metallurgical Mastery: A high-energy technical quiz designed to test conceptual clarity, speed, and teamwork in Metallurgy & Materials Engineering.",
    prizepool: "₹7,000",
    images: [
      "/images/events/codecrystal-1.jpg",
      "/images/events/codecrystal-2.jpg",
    ],
  },
  {
    id: 3,
    name: "QUIZZICA",
    description:
      "Think Fast. Answer Faster: A thrilling quiz showdown testing your knowledge, reflexes, and teamwork across science, tech, current affairs, logic, and entertainment.",
    prizepool: "₹6,000",
    images: [
      "/images/events/materialquest-1.jpg",
      "/images/events/materialquest-2.jpg",
    ],
  },
  {
    id: 4,
    name: "CODEIAC",
    description:
      "Write the code. Control the outcome: A high-intensity coding battle where logic, speed, and creativity decide the winner.",
    prizepool: "₹5,000",
    images: [
      "/images/events/pitch-1.jpg",
      "/images/events/pitch-2.jpg",
      "/images/events/pitch-3.jpg",
    ],
  },
  {
    id: 5,
    name: "RHETORIX",
    description:
      "An Ultimate Presentation Challenge: Encourages participants to enhance technical knowledge, research aptitude, and presentation skills through core subject concepts.",
    prizepool: "₹10,000",
    images: ["/images/events/techquiz-1.jpg"],
  },
  {
    "id": 6,
    "name": "METAL MORPH",
    "description": "The Metallography Challenge: A hands-on event that lets you transform theory into practice by applying core metallurgical concepts in real lab conditions.",
    "prizepool": "₹6,000",
    images: [
      "/images/events/robowars-1.jpg",
      "/images/events/robowars-2.jpg",
      "/images/events/robowars-3.jpg",
    ],
  },
];

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % eventsData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + eventsData.length) % eventsData.length
    );
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentEvent = eventsData[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <section
      id="events"
      className="relative min-h-screen py-20 md:py-24 overflow-hidden bg-black"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232ecc71' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-mono text-[#2ecc71] text-sm tracking-[0.3em] uppercase mb-4 block">
            The Product Line
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] via-[#0be881] to-[#10ac84]">
              Events
            </span>
          </h2>
        </motion.div>

        {/* Main Showcase */}
        <div className="relative">
          {/* Event Display */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[500px] md:min-h-[600px]">
            {/* Image Side */}
            <div className="relative h-[300px] md:h-[500px] overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                  className="absolute inset-0"
                >
                  {/* Image placeholder with gradient */}
                  <div className="relative w-full h-full bg-gradient-to-br from-[#2ecc71]/20 via-gray-900 to-black">
                    {/* Large letter background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[200px] md:text-[300px] font-black text-[#2ecc71]/10 select-none">
                        {currentEvent.name.charAt(0)}
                      </span>
                    </div>

                    {/* Uncomment when you have images */}
                    {/* <Image
                      src={currentEvent.images[0]}
                      alt={currentEvent.name}
                      fill
                      className="object-cover"
                    /> */}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                    {/* Event number */}
                    <div className="absolute top-6 left-6 font-mono text-[#2ecc71] text-sm tracking-wider">
                      <span className="text-gray-500">0{currentIndex + 1}</span>
                      <span className="mx-2 text-gray-700">/</span>
                      <span className="text-gray-600">
                        0{eventsData.length}
                      </span>
                    </div>

                    {/* Prize badge */}
                    {currentEvent.prizepool && (
                      <div className="absolute top-6 right-6">
                        <div className="px-4 py-2 bg-[#2ecc71] text-black font-mono text-sm font-bold">
                          {currentEvent.prizepool}
                        </div>
                      </div>
                    )}

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#2ecc71]" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#2ecc71]" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Side */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {/* Event Name */}
                  <div>
                    <motion.h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                      {currentEvent.name.split("").map((char, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03, duration: 0.3 }}
                          className={index === 0 ? "text-[#2ecc71]" : ""}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.h3>

                    {/* Animated underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100px" }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="h-1 bg-gradient-to-r from-[#2ecc71] to-transparent mt-4"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-lg md:text-xl font-mono leading-relaxed max-w-lg">
                    {currentEvent.description}
                  </p>

                  {/* Prize info */}
                  {currentEvent.prizepool && (
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                        Prize Pool
                      </span>
                      <span className="font-mono text-2xl font-bold text-[#2ecc71]">
                        {currentEvent.prizepool}
                      </span>
                    </div>
                  )}

                  {/* CTA */}
                  <Link
                    href={`/events#${currentEvent.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-3 text-[#2ecc71] font-mono text-sm uppercase tracking-wider group hover:gap-4 transition-all duration-300"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#2ecc71] hover:text-[#2ecc71] transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#2ecc71] hover:text-[#2ecc71] transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {eventsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-[#2ecc71]"
                      : "w-2 bg-gray-700 hover:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* View all link */}
            <Link
              href="/events"
              className="hidden md:inline-flex items-center gap-2 text-gray-400 hover:text-[#2ecc71] font-mono text-sm uppercase tracking-wider transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mobile View All Button */}
        <motion.div
          className="md:hidden text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#2ecc71] text-[#2ecc71] font-mono text-sm uppercase tracking-wider hover:bg-[#2ecc71] hover:text-black transition-all duration-300"
          >
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-gray-600 tracking-wider flex items-center gap-3">
            <span className="text-[#2ecc71]/50">6 Products</span>
            <span className="w-2 h-2 rounded-full bg-[#2ecc71]/30" />
            <span>99.1% Pure Competition</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
