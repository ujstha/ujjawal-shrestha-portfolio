import Navbar from "@layout/Navbar"
import { TracingBeam } from "@ui/TracingBeam"
import Hero from "@section/Hero"
import Experience from "@section/Experience"
import Projects from "@section/Projects"
import Contact from "@section/Contact"
import Footer from "@layout/Footer"
import StarsCanvas from "@canvas/Stars"

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <TracingBeam>
          <Hero />
          <Experience />
          <Projects />
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
