import Navbar from "@layout/Navbar"
import Hero from "@section/Hero"
import Experience from "@section/Experience"
import Projects from "@section/Projects"
import { TracingBeam } from "@ui/TracingBeam"
import Footer from "@layout/Footer"

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <TracingBeam>
          <Hero />
          <Experience />
          <Projects />
          <Footer />
        </TracingBeam>
      </div>
    </main>
  )
}
