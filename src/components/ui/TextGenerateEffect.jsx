"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "framer-motion"

import { cn } from "@utils/cn"

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate()
  let wordsArray = words.split(" ")
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    )
  }, [scope.current])

  const renderWords = () => {
    return (
      <motion.p ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // change here if idx is greater than 3, change the text color to #CBACF9
              className={`text-muted opacity-0 font-thin`}
            >
              {word}{" "}
            </motion.span>
          )
        })}
      </motion.p>
    )
  }

  return (
    <div className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
