"use client"

import { FaLocationArrow } from "react-icons/fa6"

import { projects } from "@/constants"
import { PinContainer } from "@ui/Pin"
import { SectionText } from "@ui/SectionText"
import SectionWrapper from "@/hoc/SectionWrapper"

const Projects = () => {
  return (
    <>
      <SectionText
        subText={`A small selection of my work`}
        headText={`Recent Projects.`}
      />

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[28rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.demo_link} href={item.demo_link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/assets/bg.png" alt="bgimg" />
                </div>
                <img src={item.img} alt="cover" className="absolute bottom-0" />
              </div>

              <h3 className="font-bold lg:text-xl text-lg line-clamp-1">
                {item.title}
              </h3>

              <p className="text-secondary line-clamp-2 my-[1vh] mx-0">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <p
                      key={tag}
                      className={`md:text-sm text-[12px] text-[#18CCFC]`}
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
                  <FaLocationArrow className="ml-2" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects")
