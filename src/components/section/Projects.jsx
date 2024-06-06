"use client"

import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  LinkButton,
  ProjectCard,
  SectionText,
} from "@/components/ui"
import SectionWrapper from "@/hoc/SectionWrapper"

import { client } from "@/utils"
import { GITHUB_ICON, LOCATION_ICON, projectQuery } from "@/constants"

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
                  <h5 className="mb-2 text-lg font-semibold text-secondary">
                    Project Information
                  </h5>
                  <div>
                    <p>
                      <span className="font-medium">Technologies:</span> {techs}
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
                  <DrawerClose>
                    <LinkButton
                      href={demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check Demo Site &nbsp;
                      <Icon icon={LOCATION_ICON} />
                    </LinkButton>
                  </DrawerClose>
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
