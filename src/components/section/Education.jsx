"use client"

import { MovingBorders } from "@ui/MovingBorders"
import { SectionText } from "@ui/SectionText"
import SectionWrapper from "@/hoc/SectionWrapper"

import { educations } from "@/constants"

const Education = () => {
  return (
    <>
      <SectionText subText={`Where I studied`} headText={`Education`} />

      <div className="w-full mt-16 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {educations
          .sort((a, b) => (a.id > b.id ? -1 : 1))
          .map((edu) => (
            <MovingBorders
              key={edu.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="w-full justify-start"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={`/assets/edu.svg`}
                  alt={`education-${edu.degree}`}
                  className="lg:w-24 md:w-20 w-16"
                />
                <div className="lg:ms-5 w-full flex-1">
                  <span className="block text-start">
                    {edu.start_year} - {edu.end_year}
                  </span>
                  <p className="text-start text-xl md:text-2xl font-bold">
                    {edu.degree}
                  </p>

                  <p className="text-start text-lg text-white-100 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-start text-white-100 mt-3">{edu.place}</p>
                </div>
              </div>
            </MovingBorders>
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(Education, "education")
