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
  const [show, setShow] = useState(true);

  useEffect(() => {
    let mainTimeout;
    let switchTimeout;

    // Faster timings
    if (index === greetings.length - 1) {
      mainTimeout = setTimeout(() => {
        setShow(false);

        switchTimeout = setTimeout(() => {
          onFinish?.();
        }, 250);
      }, 700);
    } else {
      mainTimeout = setTimeout(() => {
        setShow(false);

        switchTimeout = setTimeout(() => {
          setIndex((prev) => prev + 1);
          setShow(true);
        }, 180);
      }, 550);
    }

    return () => {
      clearTimeout(mainTimeout);
      clearTimeout(switchTimeout);
    };
  }, [index, greetings.length, onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={greetings[index]}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="px-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-500 text-center">
              {greetings[index]}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}