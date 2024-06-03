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
            id={info.id}
            key={info.id}
            icon={info.icon}
            description={info.description()}
            img={info.img}
            bgImg={info.bgImg}
            className={info.className}
          />
        ))}
      </BentoGrid>
    </>
  )
}

export default SectionWrapper(About, "about")
