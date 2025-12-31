'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Beaker, Code, Zap, Trophy, Brain, Cpu } from 'lucide-react';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const events = [
    {
        id: 1,
        name: 'MetalForge',
        description: 'Metallurgical case study competition',
        icon: Beaker,
        gradient: 'from-toxic-green/20 to-emerald-900/20',
    },
    {
        id: 2,
        name: 'CodeCrystal',
        description: 'Competitive programming hackathon',
        icon: Code,
        gradient: 'from-toxic-green/20 to-teal-900/20',
    },
    {
        id: 3,
        name: 'MaterialQuest',
        description: 'Materials science treasure hunt',
        icon: Zap,
        gradient: 'from-emerald-900/20 to-toxic-green/20',
    },
    {
        id: 4,
        name: 'Innovation Pitch',
        description: 'Startup idea presentation',
        icon: Trophy,
        gradient: 'from-teal-900/20 to-toxic-green/20',
    },
    {
        id: 5,
        name: 'TechQuiz',
        description: 'Technical trivia championship',
        icon: Brain,
        gradient: 'from-toxic-green/20 to-emerald-900/20',
    },
    {
        id: 6,
        name: 'RoboWars',
        description: 'Robotics combat competition',
        icon: Cpu,
        gradient: 'from-emerald-900/20 to-teal-900/20',
    },
];

const testimonials = [
    {
        quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Sarah Chen",
        designation: "Product Manager at TechFlow",
        src: "/images/image.png",
    },
    {
        quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Michael Rodriguez",
        designation: "CTO at InnovateSphere",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Emily Watson",
        designation: "Operations Director at CloudScale",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
        name: "James Kim",
        designation: "Engineering Lead at DataPro",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        name: "Lisa Thompson",
        designation: "VP of Technology at FutureNet",
        src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
export default function Eventscards() {
    return (
        <section id="events" className="relative py-24 md:py-32 overflow-hidden">
            <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-toxic-bg via-toxic-bg/95 to-toxic-bg"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-white mb-4">
                            Featured <span className="text-toxic-green">Events</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Compete, innovate, and showcase your skills across diverse technical challenges
                        </p>
                    </motion.div>

                    <div className="bg-gradient-to-br from-toxic-green/10 to-emerald-900/10 p-8 rounded-3xl shadow-lg">
                        {/* {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative bg-toxic-bg/50 backdrop-blur-sm border border-toxic-green/20 rounded-2xl p-6 hover:border-toxic-green/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-toxic-green/10 rounded-lg group-hover:bg-toxic-green/20 transition-colors duration-300">
                    <event.icon className="w-6 h-6 text-toxic-green" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-toxic-green" />
                  </div>
                </div>

                <h3 className="text-xl font-space-grotesk font-bold text-white mb-2 group-hover:text-toxic-green transition-colors duration-300">
                  {event.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-6 pt-4 border-t border-toxic-green/10">
                  <span className="text-toxic-green text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))} */}
                        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />


                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-center mt-12"
                        >
                            <Link
                                href="/events"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-toxic-green text-toxic-green font-semibold rounded-lg hover:bg-toxic-green hover:text-toxic-bg transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,204,113,0.3)] group"
                            >
                                View All Events
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

