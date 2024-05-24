"use client"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import SectionWrapper from "@/hoc/SectionWrapper"
import { SectionText } from "@ui/SectionText"

import { experiences } from "@/constants"

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        border: "1px solid rgba(243, 243, 243, 0.1)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white sm:text-[24px] text-[20px] font-medium">
          {experience.title}
        </h3>
        <p className="!m-0 text-accent font-thin sm:!text-base !text-sm tracking-wide">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-secondary-foreground font-thin text-sm tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <SectionText
        subText={`Companies I have worked with`}
        headText={`Work Experience.`}
      />

      <div className="mt-16 flex flex-col sm:mx-auto -mx-6">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")
