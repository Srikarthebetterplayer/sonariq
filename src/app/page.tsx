'use client';

import Image from "next/image";
import SonarIQlogo from './SonarIQlogo.svg';
import { motion } from 'framer-motion';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#fdf6e3] text-black font-sans px-4">
      <div className="text-center">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to <span className="text-indigo-600">SonarIQ</span>
        </motion.h1>

        <motion.p 
          className="text-lg max-w-xl mx-auto mb-8"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
        >
          Intelligent sound analytics. Noise-aware tech for the future of hearing.
        </motion.p>

        <motion.div
          {...scaleIn}
          transition={{ ...scaleIn.transition, delay: 0.6 }}
        >
          <Image
            src={SonarIQlogo}
            alt="SonarIQ Logo"
            width={120}
            height={120}
            className="mx-auto mb-6"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="https://github.com/Srikarthebetterplayer/sonariq"
            target="_blank"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded transition hover:scale-105 transform"
          >
            View on GitHub
          </a>
        </motion.div>
      </div>

      <motion.footer 
        className="mt-16 text-sm text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        &copy; {new Date().getFullYear()} SonarIQ · Built with Next.js
      </motion.footer>
    </main>
  );
}
