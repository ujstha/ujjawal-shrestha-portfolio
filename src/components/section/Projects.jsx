"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

import { PinContainer } from "@ui/Pin"
import { SectionText } from "@ui/SectionText"
import SectionWrapper from "@/hoc/SectionWrapper"

import { fadeIn } from "@utils/motion"
import { client, urlFor } from "@utils/sanity"
import { LOCATION_ICON, projectQuery } from "@/constants"
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

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-16 mt-10">
        {projects?.map((item, index) => (
          <Drawer>
            <DrawerTrigger>
              <motion.div
                key={item.slug}
                variants={fadeIn("up", "spring", index * 0.25, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="lg:min-h-[32.5rem] h-[26rem] flex items-center justify-center sm:w-96 w-[80vw]"
              >
                <PinContainer title={item.slug} href={item.demo_link}>
                  <div className="relative rounded-xl flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[25vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img src="/assets/bg.png" alt="bgimg" />
                    </div>
                    <img
                      src={urlFor(item.projectImage)}
                      alt="cover"
                      className="object-cover !object-top absolute top-0"
                    />
                  </div>

                  <h3 className="font-bold lg:text-xl text-lg line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-secondary line-clamp-2 my-[1vh] mx-0">
                    {item.smallDescription}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center flex-wrap gap-1">
                      {item?.techs
                        ?.split(", ")
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
                      href={item.demo_link}
                      className="flex justify-center items-center text-accent"
                    >
                      <p className="flex">Check Live Site</p>
                      <Icon icon={LOCATION_ICON} className="ml-2" />
                    </a>
                  </div>
                </PinContainer>
              </motion.div>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>
                  Are you absolutely sure? {item.title} {index}
                </DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <button>Submit</button>
                <DrawerClose>
                  <button variant="outline">Cancel</button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Projects, "projects")
