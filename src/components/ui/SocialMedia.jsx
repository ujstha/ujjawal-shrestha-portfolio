"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

import { socialMedia } from "@/constants"

export const SocialMedia = () => {
  return socialMedia.map((item) => (
    <motion.a
      key={item.id}
      href={item.site_link}
      target="_blank"
      rel="noreferral noopener"
      className="relative overflow-hidden z-40 w-10 h-10 cursor-pointer inline-flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-colors duration-150 hover:border-accent"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
    >
      <Icon icon={item.icon} fontSize={20} className="z-50 relative" />
    </motion.a>
  ))
}
