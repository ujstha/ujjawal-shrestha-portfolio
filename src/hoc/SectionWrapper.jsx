"use client"

import { motion } from "framer-motion"

import { staggerContainer } from "@utils/motion"
import { styles } from "../styles"

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`max-w-7xl pt-12 sm:pt-28 mx-auto relative`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    )
  }

export default SectionWrapper
