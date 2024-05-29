import React from "react"
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid"
import { infos } from "../../constants"

const About = () => {
  return (
    <BentoGrid>
      {infos.map((info, index) => (
        <BentoGridItem
          key={info.id}
          title={info.title}
          icon={info.icon}
          className={index === 3 || index === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  )
}

export default About
