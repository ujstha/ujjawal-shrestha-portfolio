"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import SectionWrapper from "@/hoc/SectionWrapper"
import { SectionText } from "@ui/SectionText"

import { experienceQuery } from "@/constants"
import { client, urlFor } from "@/utils"

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(2px)",
        boxShadow: "none",
        border: "1px solid rgba(243, 243, 243, 0.1)",
        borderRadius: "16px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={urlFor(experience.icon)}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <motion.div>
        <h3 className="text-white sm:text-[24px] text-[20px] font-medium">
          {experience.title}
        </h3>
        <a
          href={experience.company_link}
          target="_blank"
          rel="noreferrer noopener"
          className="!m-0 text-accent sm:!text-base !text-sm tracking-wide"
        >
          {experience.company_name}
        </a>
      </motion.div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-secondary font-thin text-sm tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  const [experiences, setExperiences] = useState([])
  useEffect(() => {
    client.fetch(experienceQuery).then((data) => setExperiences(data))
  }, [])

  return experiences?.length > 0 ? (
    <>
      <SectionText
        subText={`Companies I have worked with`}
        headText={`Professional Experience`}
      />

      <div className="mt-16 flex flex-col sm:mx-auto -mx-6">
        <VerticalTimeline>
          {experiences?.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  ) : null
}

export default SectionWrapper(Experience, "experience")
