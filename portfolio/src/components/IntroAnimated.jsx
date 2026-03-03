import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimated({ onFinish }) {
  const greetings = useMemo(
    () => [
      "Hello",
      "नमस्ते",
      "Hola",
      "Bonjour",
      "Ciao",
      "Olá",
      "Здравствуйте",
      "Merhaba",
      "Γειά",
      "Hej",
      "Hallo",
      "Salam",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout;

    if (index < greetings.length - 1) {
      timeout = setTimeout(() => {
        setVisible(false);

        setTimeout(() => {
          setIndex((prev) => prev + 1);
          setVisible(true);
        }, 180);
      }, 1000);
    } else {
      timeout = setTimeout(() => {
        setVisible(false);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [index, greetings.length]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-index: 9999;">
      <AnimatePresence mode="wait" onExitComplete={onFinish}>
        {visible && (
          <motion.div
            key={greetings[index]}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg">
              {greetings[index]}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}