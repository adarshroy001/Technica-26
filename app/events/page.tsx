'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Users, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const allEvents = [
  {
    id: 1,
    name: 'MetalForge',
    category: 'Technical',
    description: 'Metallurgical case study competition where teams solve real-world challenges',
    date: 'March 15-16, 2025',
    participants: 'Teams of 3-4',
    prize: '₹50,000',
  },
  {
    id: 2,
    name: 'CodeCrystal',
    category: 'Coding',
    description: 'Competitive programming hackathon with algorithmic challenges',
    date: 'March 16, 2025',
    participants: 'Individual',
    prize: '₹40,000',
  },
  {
    id: 3,
    name: 'MaterialQuest',
    category: 'Adventure',
    description: 'Materials science treasure hunt across campus',
    date: 'March 15, 2025',
    participants: 'Teams of 2-3',
    prize: '₹25,000',
  },
  {
    id: 4,
    name: 'Innovation Pitch',
    category: 'Business',
    description: 'Startup idea presentation competition',
    date: 'March 17, 2025',
    participants: 'Teams of 3-5',
    prize: '₹60,000',
  },
  {
    id: 5,
    name: 'TechQuiz',
    category: 'Quiz',
    description: 'Technical trivia championship covering engineering domains',
    date: 'March 16, 2025',
    participants: 'Teams of 2',
    prize: '₹30,000',
  },
  {
    id: 6,
    name: 'RoboWars',
    category: 'Robotics',
    description: 'Robotics combat competition',
    date: 'March 16-17, 2025',
    participants: 'Teams of 4-6',
    prize: '₹75,000',
  },
];

export default function EventsPage() {
  return (
    <main className="relative min-h-screen bg-toxic-bg">
      <div className="absolute inset-0 bg-gradient-radial from-toxic-green/5 via-toxic-bg to-toxic-bg"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-toxic-green hover:text-toxic-green/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>

            <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold text-white mb-4">
              All <span className="text-toxic-green">Events</span>
            </h1>
            <p className="text-lg text-gray-400 mb-12">
              Explore all competitions and activities at TECHNICA 2025
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-toxic-bg/50 backdrop-blur-sm border border-toxic-green/20 rounded-2xl p-6 hover:border-toxic-green/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,204,113,0.2)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-toxic-green/10 text-toxic-green text-xs font-semibold rounded-full mb-3">
                      {event.category}
                    </span>
                    <h3 className="text-2xl font-space-grotesk font-bold text-white mb-2">
                      {event.name}
                    </h3>
                  </div>
                  <Trophy className="w-6 h-6 text-toxic-green" />
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {event.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-toxic-green/10">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 text-toxic-green" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Users className="w-4 h-4 text-toxic-green" />
                    {event.participants}
                  </div>
                  <div className="flex items-center gap-2 text-toxic-green text-sm font-semibold">
                    <Trophy className="w-4 h-4" />
                    Prize Pool: {event.prize}
                  </div>
                </div>

                <button className="w-full mt-6 px-6 py-3 bg-toxic-green/10 border border-toxic-green text-toxic-green font-semibold rounded-lg hover:bg-toxic-green hover:text-toxic-bg transition-all duration-300">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
