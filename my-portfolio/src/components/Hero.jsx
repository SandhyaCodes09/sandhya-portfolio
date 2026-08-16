import { motion } from "framer-motion";
import {
  FiArrowDownRight,
  FiGithub,
  FiLinkedin,
  FiDownload,
} from "react-icons/fi";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center px-6 pt-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">

          {/* Small Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-violet-400" />

            <span className="text-sm uppercase tracking-[0.25em] text-violet-300">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Sandhya
            <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              Verma.
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-xl sm:text-2xl text-gray-300 font-medium"
          >
            Full Stack / MERN Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 max-w-2xl text-gray-400 leading-8 text-base sm:text-lg"
          >
            {/* I build modern, responsive and user-focused web applications
            using React, Node.js, Express and MongoDB, with a strong focus
            on clean UI and practical solutions. */}
             I’m a Computer Science Engineering graduate passionate about
            building modern, responsive and user-focused web applications
            using React, Node.js, Express and MongoDB.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-violet-400 hover:text-white transition-all duration-300"
            >
              View My Work

              <FiArrowDownRight
                className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
              />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 text-white hover:bg-white/5 transition-all duration-300"
            >
              <FiDownload size={17} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-5 mt-10"
          >
            <span className="text-sm text-gray-600">
              Find me on
            </span>

            <a
              href="https://github.com/SandhyaCodes09"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/sandhya-verma-97447a255/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiLinkedin size={21} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.a>
    </section>
  );
}

export default Hero;