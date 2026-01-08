'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/_technica?igsh=MXN4NjVqbndreGMxaw==', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:technica@nitjsr.ac.in', label: 'Email' },
  ];

  return (
    <footer className="relative bg-toxic-bg border-t border-toxic-green/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              <span className="text-toxic-green font-semibold">TECHNICA</span> © 2026
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.href}
                  aria-label={social.label}
                  target='_blank'
                  className="p-0 sm:p-2 bg-toxic-green/10 rounded-lg hover:bg-toxic-green/20 transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-toxic-green group-hover:text-toxic-green/80 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
