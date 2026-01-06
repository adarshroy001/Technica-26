"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { eventsData } from "@/components/Events";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

// Image Gallery Component for each event
const ImageGallery = ({ images, eventName }: { images: string[]; eventName: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-64 md:h-80 lg:h-96 bg-gray-900 overflow-hidden group">
      {/* Placeholder background - replace with actual images when available */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71]/20 via-gray-900 to-black flex items-center justify-center">
        <span className="font-mono text-[#2ecc71]/20 text-8xl md:text-9xl font-bold">
          {eventName.charAt(0)}
        </span>
      </div>
      
      {/* Uncomment when you have actual images */}
      {/* <Image
        src={images[currentIndex]}
        alt={`${eventName} - Image ${currentIndex + 1}`}
        fill
        className="object-cover transition-opacity duration-500"
      /> */}

      {/* Navigation arrows - only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 border border-[#2ecc71]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#2ecc71] hover:text-black"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 border border-[#2ecc71]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#2ecc71] hover:text-black"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Image indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#2ecc71] w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 border border-gray-700 font-mono text-xs text-gray-300">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,204,113,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232ecc71' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#2ecc71] transition-colors font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-[#2ecc71] text-sm tracking-[0.3em] uppercase mb-4 block">
              All Competitions
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              <span className="text-white">OUR </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] via-[#0be881] to-[#10ac84]">
                EVENTS
              </span>
            </h1>
            <p className="text-gray-400 font-mono text-lg max-w-2xl mx-auto">
              Six flagship events. World-class competition.<br/>
              <span className="text-[#2ecc71]">This is where empires are built.</span>
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20"
          >
            {[
              { label: "Events", value: "6" },
              { label: "Prize Pool", value: "₹3.3L+" },
              { label: "Days", value: "3" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#2ecc71]">{stat.value}</div>
                <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="relative pb-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              id={event.name.toLowerCase().replace(/\s+/g, '-')}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="scroll-mt-24"
            >
              <div className={`grid md:grid-cols-2 gap-0 bg-gray-900/30 border border-gray-800 overflow-hidden hover:border-[#2ecc71]/30 transition-all duration-500 ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}>
                {/* Image Gallery */}
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <ImageGallery images={event.images} eventName={event.name} />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  {/* Event number */}
                  <span className="font-mono text-[#2ecc71]/30 text-6xl md:text-7xl font-black mb-4">
                    0{event.id}
                  </span>

                  {/* Event name */}
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                    {event.name}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 font-mono leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Prize pool if available */}
                  {event.prizepool && (
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#2ecc71]/10 border border-[#2ecc71]/30">
                        <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">Prize Pool</span>
                        <span className="font-mono text-xl font-bold text-[#2ecc71]">{event.prizepool}</span>
                      </div>
                    </div>
                  )}

                  {/* Photo count indicator */}
                  <div className="font-mono text-xs text-gray-500">
                    {event.images.length} {event.images.length === 1 ? "photo" : "photos"} available
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
              <ArrowLeft className="w-4 h-4" />
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
}
