"use client"

import { motion } from "framer-motion"

import { textVariant } from "@utils/motion"
import { styles } from "@/styles"

const SectionText = ({ headText, subText }) => {
  return (
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>{subText}</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>{headText}</h2>
    </motion.div>
  )
}

export { SectionText }
