import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/krish-gupta-1aabbb1b3/" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/krishgupta123" },
  { Icon: SiLeetcode, label: "LeetCode", href: "https://leetcode.com/u/krishgupta123/" }
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 16px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 }
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } }
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[140px]" />
      </div>

      <motion.div
        className="relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1
          className="font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 text-center select-none tracking-tight"
          style={{
            fontSize: "clamp(3.5rem, 14vw, 13rem)",
            lineHeight: 0.85,
            whiteSpace: "nowrap",
            textShadow: "0 4px 30px rgba(0,0,0,0.5)"
          }}
        >
          Krish Gupta
        </h1>

        <div className="flex gap-6 text-2xl md:text-3xl justify-center pt-2">
          {socials.map(({ Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              aria-label={label}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10 w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Krish Gupta. All rights reserved.</p>
          <a
            href="#home"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            Back to Top ↑
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
