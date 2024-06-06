"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

import { PinContainer } from "@ui/Pin"
import { LinkButton } from "@ui/LinkButton"
import { SectionText } from "@ui/SectionText"
import SectionWrapper from "@/hoc/SectionWrapper"

import { fadeIn } from "@utils/motion"
import { client, urlFor } from "@utils/sanity"
import { GITHUB_ICON, LOCATION_ICON, projectQuery } from "@/constants"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@ui/Drawer"
import { stringToArray } from "../../utils/stringToArray"

const ProjectCard = ({ project, index }) => (
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
          alt="cover"
          className="object-cover !object-top absolute top-0"
        />
      </div>

      <h3 className="font-bold lg:text-xl text-lg line-clamp-1">
        {project.title}
      </h3>

      <p className="text-secondary line-clamp-2 my-[1vh] mx-0">
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

const Projects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    client.fetch(projectQuery).then((data) => setProjects(data))
  }, [])

  return (
    <div>
      <SectionText
        subText={`A small selection of my work`}
        headText={`Recent Projects.`}
      />

      <div className="flex relative flex-wrap items-center justify-center p-4 gap-x-24 gap-y-16 mt-10">
        {projects?.map((project, index) => {
          const {
            slug,
            title,
            smallDescription,
            techs,
            projectImage,
            demo_link,
            source_code_link,
          } = project
          return (
            <Drawer key={slug}>
              <DrawerTrigger>
                <ProjectCard project={project} index={index} />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>{title}</DrawerTitle>
                  <DrawerDescription>{smallDescription}</DrawerDescription>
                </DrawerHeader>
                <div className="p-8 max-h-[70dvh] overflow-y-auto drawer-desc">
                  <h5 className="text-lg font-semibold text-secondary">
                    Project Information
                  </h5>
                  <div>
                    <p>
                      Technologies Used:{" "}
                      {stringToArray(techs).map((tag) => (
                        <p
                          key={tag}
                          className={`md:text-sm text-[12px] lowercase text-[#18CCFC]`}
                        >
                          #{tag}
                        </p>
                      ))}
                    </p>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose>
                    <LinkButton
                      variant="outline"
                      href={source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon icon={GITHUB_ICON} />
                    </LinkButton>
                  </DrawerClose>
                  <LinkButton
                    href={demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Demo Site &nbsp;
                    <Icon icon={LOCATION_ICON} />
                  </LinkButton>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          )
        })}
      </div>
    </div>
  )
}

export default SectionWrapper(Projects, "projects")
