'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-toxic-bg">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1b4332,_#0b0f0d_70%)]" />

      {/* Toxic Fog */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(46,204,113,0.08),transparent)] animate-fog" />
      </div>

      {/* Hex Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImhleCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoMzApIj48cG9seWdvbiBwb2ludHM9IjMwLDAgMTAsMjAgMTAsNDAgMzAsNjAgNTAsNDAgNTAsMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJlY2M3MSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjaGV4KSIvPjwvc3ZnPg==')]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Title */}
          <h1 className="font-space-grotesk text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-toxic-green via-emerald-400 to-toxic-green bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(46,204,113,0.35)]">
              TECHNICA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Annual Branch Fest of{' '}
            <span className="text-toxic-green font-semibold">
              Metallurgical & Materials Engineering
            </span>
            <br />
            NIT Jamshedpur
          </p>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-space-grotesk text-toxic-green/80 italic">
            Where Innovation is Forged
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <Link
              href="#register"
              className="px-8 py-4 bg-toxic-green text-toxic-bg font-semibold rounded-lg transition-all hover:shadow-[0_0_35px_rgba(46,204,113,0.45)]"
            >
              Register Now
            </Link>

            <Link
              href="#events"
              className="px-8 py-4 border border-toxic-green/60 text-toxic-green font-semibold rounded-lg hover:bg-toxic-green/10 transition-all"
            >
              View Events <ChevronRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
