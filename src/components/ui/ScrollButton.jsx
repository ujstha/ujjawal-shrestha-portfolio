"use client"

import { motion } from "framer-motion"

export const ScrollButton = () => {
  return (
    <div className="absolute sm:bottom-20 xl:bottom-10 bottom-8 w-full flex justify-center items-center z-10">
      <a href="#experience">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-accent-foreground flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-accent-foreground mb-1"
          />
        </div>
      </a>
    </div>
  )
}
