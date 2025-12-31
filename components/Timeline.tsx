'use client';

import { motion } from 'framer-motion';
import { Calendar, Flag, Trophy } from 'lucide-react';

const timelineEvents = [
  {
    day: 'Day 1',
    date: 'March 15, 2025',
    title: 'Inauguration & Prelims',
    description: 'Opening ceremony and preliminary rounds for all events',
    icon: Flag,
  },
  {
    day: 'Day 2',
    date: 'March 16, 2025',
    title: 'Core Competitions',
    description: 'Main event rounds, workshops, and technical sessions',
    icon: Calendar,
  },
  {
    day: 'Day 3',
    date: 'March 17, 2025',
    title: 'Finals & Closing',
    description: 'Final rounds, prize distribution, and closing ceremony',
    icon: Trophy,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-toxic-bg to-toxic-bg/95"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-white mb-4">
            Event <span className="text-toxic-green">Timeline</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Three days of innovation, competition, and celebration
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-toxic-green via-toxic-green/50 to-toxic-green"></div>

          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-toxic-bg/50 backdrop-blur-sm border border-toxic-green/20 rounded-2xl p-6 hover:border-toxic-green/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,204,113,0.2)]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-toxic-green/10 rounded-lg">
                        <event.icon className="w-6 h-6 text-toxic-green" />
                      </div>
                      <div>
                        <div className="font-jetbrains text-toxic-green text-sm font-bold">{event.day}</div>
                        <div className="text-gray-400 text-xs">{event.date}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-space-grotesk font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-toxic-green rounded-full border-4 border-toxic-bg transform -translate-x-1/2 shadow-[0_0_20px_rgba(46,204,113,0.6)] z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 bg-toxic-green/10 border border-toxic-green/30 rounded-full">
            <span className="text-toxic-green font-jetbrains text-sm font-bold">
              March 15-17, 2025 | NIT Jamshedpur
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
