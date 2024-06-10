"use client"

import { useEffect, useState } from "react"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  ProjectCard,
  ProjectInfo,
  ProjectLink,
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
    <>
      <SectionText
        subText={`A small selection of my work`}
        headText={`Recent Projects`}
      />

      <div className="flex relative flex-wrap items-center justify-center p-4 gap-x-24 gap-y-16 mt-10">
        {projects?.map((project, index) => {
          const { slug, title, source_code_link, demo_link, smallDescription } =
            project
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
                <ProjectInfo project={project} />
                <DrawerFooter>
                  <DrawerClose>
                    <ProjectLink
                      variant="outline"
                      href={source_code_link}
                      icon={GITHUB_ICON}
                    />
                  </DrawerClose>
                  <DrawerClose>
                    <ProjectLink href={demo_link} icon={LOCATION_ICON}>
                      Check Demo Site &nbsp;
                    </ProjectLink>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects")
