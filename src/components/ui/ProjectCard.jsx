import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

import { PinContainer } from "./Pin"

import { stringToArray, fadeIn, urlFor } from "@/utils"
import { LOCATION_ICON } from "@/constants"

export const ProjectCard = ({ project, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.25, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="lg:min-h-[32.5rem] h-[26rem] flex items-center justify-center sm:w-96 w-[80vw]"
  >
    <PinContainer title={project.slug} href={project.demo_link}>
      <div className="relative rounded-xl flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[25vh] lg:h-[30vh] mb-10">
        <div
          className="relative w-full h-full overflow-hidden lg:rounded-3xl"
          style={{ backgroundColor: "#13162D" }}
        >
          <img src="/assets/bg.png" alt="bgimg" />
        </div>
        <img
          src={urlFor(project.projectImage)}
          alt="project-cover"
          className="object-cover !object-top absolute top-0"
        />
      </div>

      <h3 className="font-bold text-left lg:text-xl text-lg line-clamp-1">
        {project.title}
      </h3>

      <p className="text-secondary text-left line-clamp-2 my-[1vh] mx-0">
        {project.smallDescription}
      </p>

      <div className="flex items-center justify-between mt-7 mb-3">
        <div className="flex items-center flex-wrap gap-1">
          {stringToArray(project?.techs)
            .slice(0, 3)
            .map((tag) => (
              <p
                key={tag}
                className={`md:text-sm text-[12px] lowercase text-[#18CCFC]`}
              >
                #{tag}
              </p>
            ))}
        </div>

        <a
          href={project.demo_link}
          className="flex justify-center items-center text-accent"
        >
          <p className="flex">Check Demo Site</p>
          <Icon icon={LOCATION_ICON} className="ml-2" />
        </a>
      </div>
    </PinContainer>
  </motion.div>
)
