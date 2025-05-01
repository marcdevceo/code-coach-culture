/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
      <motion.h1
        className="text-2xl md:text-6xl font-extrabold leading-tight mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Blueprint
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I’m Marcus Kimber—The People Developer.
        I build tools, coach leaders, and cultivate teams that thrive.
        This isn’t just a blog. It’s a blueprint for those who want to lead with clarity, 
        build with confidence, and grow with intention.      
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex flex-col"
      >
        <Link
          href="/about-me"
          className="inline-block px-6 py-3 mb-5 text-lg font-semibold bg-slate-900 text-gray-200 rounded-2xl shadow-md hover:bg-green-700 transition-all"
        >
          Take control of your career – Meet the Leader within
        </Link>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 text-lg font-semibold bg-slate-900 text-gray-200 rounded-2xl shadow-md hover:bg-green-700 transition-all"
        >
          Let's Work Together
        </Link>
      </motion.div>
    </section>
  );
}