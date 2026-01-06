"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

// Complete timeline data with all events
const fullTimelineData = [
  {
    day: "Day 1",
    date: "February 14, 2026",
    title: "Genesis",
    subtitle: "The Awakening",
    events: [
      { time: "09:00 AM", title: "Registration & Check-in", description: "Get your badges, lab coats, and starter kits", type: "main" },
      { time: "10:00 AM", title: "Opening Ceremony", description: "Welcome to the empire. Introduction by the kingpin.", type: "highlight" },
      { time: "11:30 AM", title: "Keynote: The Chemistry of Innovation", description: "How to cook up world-changing ideas", type: "talk" },
      { time: "01:00 PM", title: "Lunch Break", description: "Fuel up for the journey ahead", type: "break" },
      { time: "02:00 PM", title: "Workshop: Web3 Fundamentals", description: "Understanding the new frontier of decentralization", type: "workshop" },
      { time: "04:00 PM", title: "Team Formation", description: "Find your partners in crime", type: "main" },
      { time: "05:30 PM", title: "Hackathon Kickoff", description: "Let the cooking begin. 48 hours on the clock.", type: "highlight" },
      { time: "08:00 PM", title: "Dinner & Networking", description: "Build connections, share ideas", type: "break" },
    ]
  },
  {
    day: "Day 2",
    date: "February 15, 2026",
    title: "Synthesis",
    subtitle: "The Cook",
    events: [
      { time: "08:00 AM", title: "Breakfast", description: "Early bird fuel station", type: "break" },
      { time: "09:00 AM", title: "Mentor Sessions Begin", description: "Get guidance from industry experts", type: "main" },
      { time: "10:30 AM", title: "Workshop: AI/ML Integration", description: "Adding intelligence to your formula", type: "workshop" },
      { time: "12:00 PM", title: "Lightning Talks", description: "Quick insights from tech pioneers", type: "talk" },
      { time: "01:00 PM", title: "Lunch Break", description: "Recharge and refocus", type: "break" },
      { time: "02:30 PM", title: "Workshop: System Design", description: "Scaling your empire from garage to global", type: "workshop" },
      { time: "04:00 PM", title: "Progress Check-in", description: "Mid-point review with mentors", type: "main" },
      { time: "06:00 PM", title: "Mini Games & Challenges", description: "Take a break with fun coding challenges", type: "highlight" },
      { time: "08:00 PM", title: "Dinner & Movie Night", description: "Relax with fellow hackers", type: "break" },
      { time: "10:00 PM", title: "Midnight Snacks", description: "Fuel for the night owls", type: "break" },
    ]
  },
  {
    day: "Day 3",
    date: "February 16, 2026",
    title: "Revelation",
    subtitle: "The Empire",
    events: [
      { time: "08:00 AM", title: "Final Stretch Begins", description: "Last hours to perfect your product", type: "main" },
      { time: "10:00 AM", title: "Code Freeze Warning", description: "2 hours to submission", type: "highlight" },
      { time: "12:00 PM", title: "Submissions Close", description: "All projects must be submitted", type: "highlight" },
      { time: "12:30 PM", title: "Lunch Break", description: "Breathe. The hard part is over.", type: "break" },
      { time: "02:00 PM", title: "Demo Preparations", description: "Set up your presentation stations", type: "main" },
      { time: "03:00 PM", title: "Project Demos Begin", description: "Showcase your creation to the judges", type: "highlight" },
      { time: "05:30 PM", title: "Judges Deliberation", description: "The council decides your fate", type: "main" },
      { time: "06:30 PM", title: "Closing Ceremony", description: "Awards, recognition, and farewells", type: "highlight" },
      { time: "08:00 PM", title: "After Party", description: "Celebrate your achievements!", type: "break" },
    ]
  }
];

const getEventTypeStyles = (type: string) => {
  switch (type) {
    case "highlight":
      return "bg-[#2ecc71] text-black";
    case "workshop":
      return "bg-[#2ecc71]/20 text-[#2ecc71] border border-[#2ecc71]/40";
    case "talk":
      return "bg-blue-500/20 text-blue-400 border border-blue-500/40";
    case "break":
      return "bg-gray-700/50 text-gray-400 border border-gray-600/40";
    default:
      return "bg-gray-800 text-gray-300 border border-gray-700";
  }
};

const TimelineFullPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeDay, setActiveDay] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,204,113,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232ecc71' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#2ecc71]/30 to-transparent"
              style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
              animate={{ 
                x: ["-100%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 8, 
                delay: i * 0.5, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-4 top-0"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#2ecc71] transition-colors font-mono text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[#2ecc71] text-sm tracking-[0.3em] uppercase mb-4 block">
              Complete Schedule
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="text-white">FULL </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] via-[#0be881] to-[#10ac84]">
                TIMELINE
              </span>
            </h1>
            <p className="mt-6 text-gray-400 font-mono text-lg max-w-2xl mx-auto">
              Every moment, every event, every opportunity.<br/>
              <span className="text-[#2ecc71]">Three days. One empire.</span>
            </p>
          </motion.div>

          {/* Day selector pills */}
          <motion.div 
            className="flex justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {fullTimelineData.map((day, index) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(index)}
                className={`px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 border ${
                  activeDay === index
                    ? "bg-[#2ecc71] text-black border-[#2ecc71]"
                    : "bg-transparent text-gray-400 border-gray-700 hover:border-[#2ecc71]/50 hover:text-[#2ecc71]"
                }`}
              >
                {day.day}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Content */}
      <section ref={containerRef} className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Show only the active day */}
          {(() => {
            const dayData = fullTimelineData[activeDay];
            return (
              <motion.div
                key={dayData.day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Day Header */}
                <motion.div 
                  className="mb-16 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block">
                    <span className="font-mono text-[#2ecc71] text-xs tracking-[0.3em] uppercase block mb-2">
                      {dayData.date}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-2">
                      {dayData.day}: <span className="text-[#2ecc71]">{dayData.title}</span>
                  </h2>
                  <p className="font-mono text-gray-500 tracking-wider">
                    "{dayData.subtitle}"
                  </p>
                </div>
              </motion.div>

              {/* Events Grid */}
              <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-800/50 md:-translate-x-1/2">
                  <motion.div
                    style={{ height: lineProgress }}
                    className="w-full bg-gradient-to-b from-[#2ecc71] to-[#0be881]"
                  />
                </div>

                {/* Events */}
                <div className="space-y-8">
                  {dayData.events.map((event, eventIndex) => (
                    <motion.div
                      key={event.time}
                      initial={{ opacity: 0, x: eventIndex % 2 === 0 ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: eventIndex * 0.05 }}
                      className={`relative flex items-start gap-6 ${
                        eventIndex % 2 === 0 
                          ? "md:flex-row md:pr-[50%] md:text-right" 
                          : "md:flex-row-reverse md:pl-[50%] md:text-left"
                      } flex-row pl-8 md:pl-0`}
                    >
                      {/* Timeline node */}
                      <div className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10`}>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          event.type === "highlight" 
                            ? "bg-[#2ecc71] border-[#2ecc71]" 
                            : "bg-black border-[#2ecc71]/50"
                        }`}>
                          {event.type === "highlight" && (
                            <div className="absolute inset-0 rounded-full bg-[#2ecc71] animate-ping opacity-50" />
                          )}
                        </div>
                      </div>

                      {/* Event content */}
                      <div className={`flex-1 ${eventIndex % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                        <div className={`p-6 bg-gray-900/50 border border-gray-800 hover:border-[#2ecc71]/30 transition-all duration-300 group`}>
                          <div className={`flex items-center gap-3 mb-3 ${eventIndex % 2 === 0 ? "md:justify-end" : ""}`}>
                            <span className="font-mono text-[#2ecc71] text-sm font-bold">
                              {event.time}
                            </span>
                            <span className={`px-2 py-0.5 text-xs font-mono uppercase tracking-wider rounded ${getEventTypeStyles(event.type)}`}>
                              {event.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#2ecc71] transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-gray-400 font-mono text-sm">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            );
          })()}
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-700 text-gray-300 font-mono font-bold tracking-wider uppercase text-sm hover:border-[#2ecc71]/50 hover:text-[#2ecc71] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </motion.div>

          {/* Chemical formula decoration */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-xs text-gray-600 tracking-wider flex items-center justify-center gap-3">
              <span className="text-[#2ecc71]/50">C₁₀H₁₅N</span>
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]/30" />
              <span>99.1% Pure</span>
              <span className="w-2 h-2 rounded-full bg-[#2ecc71]/30" />
              <span className="text-[#2ecc71]/50">TECHNICA 2026</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TimelineFullPage;
