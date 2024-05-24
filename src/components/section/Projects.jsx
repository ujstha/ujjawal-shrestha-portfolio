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
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/assets/bg.png" alt="bgimg" />
                </div>
                <img src={item.img} alt="cover" className="absolute bottom-0" />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <p key={tag} className={`text-xs text-[#8f8f8f]`}>
                      #{tag}
                    </p>
                  ))}
                </div>

                <a
                  href={item.demo_link}
                  className="flex justify-center items-center"
                >
                  <p className="flex lg:text-base sm:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
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
