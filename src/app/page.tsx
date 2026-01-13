'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#fdf6e3] text-black font-sans px-4">
      <div className="text-center">

        {/* Title */}
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to <span className="text-indigo-600">SonarIQ</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Intelligent sound analytics. Noise-aware tech for the future of hearing.
        </motion.p>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Image
            src="/SonarIQlogo.svg"
            alt="SonarIQ Logo"
            width={120}
            height={120}
            priority
            className="mx-auto mb-6"
          />
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <a
            href="https://github.com/Srikarthebetterplayer/sonariq"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded transition-transform hover:scale-105"
          >
            View on GitHub
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-16 text-sm text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        &copy; {new Date().getFullYear()} SonarIQ · Built with Next.js
      </motion.footer>
    </main>
  );
}
