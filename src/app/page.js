import Navbar from "@layout/Navbar"
import { TracingBeam } from "@ui/TracingBeam"
import Hero from "@section/Hero"
import Experience from "@section/Experience"
import Projects from "@section/Projects"
import Contact from "@section/Contact"
import Education from "@section/Education"
import Footer from "@layout/Footer"
import StarsCanvas from "@canvas/Stars"
import About from "@section/About"

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <TracingBeam>
          <Hero />
          <Experience />
          <Projects />
          <Education />
          <About />
        </TracingBeam>
      </div>
      <div className="w-full relative z-0 pb-36">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </main>
  )
}
