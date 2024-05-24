import { FaLocationArrow } from "react-icons/fa6"

import { Spotlight } from "@ui/Spotlight"
import { MagicButton } from "@ui/MagicButton"
import { ScrollButton } from "@ui/ScrollButton"

import ComputersCanvas from "@canvas/Computers"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#F3F3F3"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#915EFF"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-2 flex flex-row items-start gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-accent" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}

        <div>
          <h1
            className={`mt-4 font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]`}
          >
            Hi, I'm <span className="text-accent">Ujjawal</span>
          </h1>
          <p
            className={`sm:mt-4 mt-2 text-muted lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]`}
          >
            I am a Full-stack Developer
          </p>
          <a href="#projects" className="relative z-10 block sm:mt-6 mt-10">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      <ComputersCanvas />

      <ScrollButton />
    </section>
  )
}

export default Hero