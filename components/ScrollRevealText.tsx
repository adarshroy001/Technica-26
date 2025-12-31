"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ScrollWordReveal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.3", "end 0.8"],
  })

  const aboutText = `Technica is a celebration of innovation, collaboration, and the relentless pursuit of knowledge. Our mission is to bring together passionate minds from diverse backgrounds to create, inspire, and lead the future of technology. Through hands-on events, thought-provoking talks, and a vibrant community, we empower individuals to push boundaries and turn ideas into reality.`;
  const words = aboutText.split(" ");

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <h2 className="text-5xl md:text-7xl font-space-grotesk font-extrabold text-toxic-green mb-8 text-center drop-shadow-lg">
        About Us
      </h2>
      <p className="max-w-4xl text-xl md:text-3xl lg:text-4xl leading-relaxed font-sans text-gray-300">
        {words.map((word, index) => {
          const start = Math.max(0, index / words.length - 0.1)
          const end = Math.min(1, index / words.length + 0.15)

          return (
            <Word key={index} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          )
        })}
      </p>
    </div>
  );
}

interface WordProps {
  children: string
  progress: any
  range: [number, number]
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1])
  const extendedOpacity = useTransform(opacity, (value) => Math.max(value, opacity.get()))
  const y = useTransform(progress, range, [10, 0])
  const extendedY = useTransform(y, (value) => Math.min(value, 0))

  return (
    <motion.span
      style={{ opacity: extendedOpacity, y: extendedY }}
      className="inline-block mr-2 md:mr-3 transition-colors"
    >
      {children}
    </motion.span>
  )
}
