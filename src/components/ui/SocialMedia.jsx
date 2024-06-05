"use client"

import { motion } from "framer-motion"

import { socialMedia } from "@/constants"

export const SocialMedia = () => {
  return socialMedia.map((item) => (
    <motion.a
      key={item.id}
      href={item.site_link}
      target="_blank"
      rel="noreferral noopener"
      className="relative overflow-hidden z-40 w-10 h-10 cursor-pointer inline-flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-colors duration-150 hover:border-[#d3b5f8]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
    >
      <Icon icon={item.icon} fontSize={20} className="z-50 relative" />
      {/* <img
        src={item.img}
        alt="icons"
        width={20}
        height={20}
        className="z-50 relative"
      /> */}
    </motion.a>
  ))
}

import * as React from "react"
import { Icon } from "@iconify/react"
const LinkedIn = (props) => (
  <svg
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
      fill="#0A66C2"
    />
  </svg>
)
export default LinkedIn
