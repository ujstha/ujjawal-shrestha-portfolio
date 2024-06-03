"use client"

import { BentoGrid, BentoGridItem } from "@ui/BentoGrid"
import { SectionText } from "@ui/SectionText"
import SectionWrapper from "@/hoc/SectionWrapper"

import { infos } from "@/constants"

const About = () => {
  return (
    <>
      <SectionText subText={`Get to know me`} headText={`About.`} />
      <BentoGrid className="mt-16">
        {infos.map((info, index) => (
          <BentoGridItem
            key={info.id}
            icon={info.icon}
            description={info.description()}
            img={info.img}
            className={
              index === 0 || index === 4
                ? "md:col-span-3"
                : index === 1
                ? "md:col-span-2"
                : ""
            }
          />
        ))}
      </BentoGrid>
    </>
  )
}

export default SectionWrapper(About, "about")
