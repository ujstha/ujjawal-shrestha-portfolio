import { CHOICELY, EVENTTI, NORDXM } from "../assets"
import { GITHUB_ICON, LINKEDIN_ICON, EMAIL_ICON } from "./icons"

export * from "./icons"
export * from "./sanity-queries"

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

export const educations = [
  {
    id: 1,
    degree: "High School Diploma",
    institution: "Prasadi Adacemy Higher Secondary School",
    place: "Kathmandu, Nepal",
    start_year: "2013",
    end_year: "2015",
  },
  {
    id: 2,
    degree: "Bachelor in Information Technology",
    institution: "Oulu University of Applied Sciences",
    place: "Oulu, Finland",
    start_year: "2016",
    end_year: "2020",
  },
]

export const socialMedia = [
  {
    id: 1,
    site_link: "https://github.com/ujstha",
    icon: GITHUB_ICON,
  },
  {
    id: 2,
    site_link: "https://www.linkedin.com/in/ujjawal-shrestha-855682159/",
    icon: LINKEDIN_ICON,
  },
  {
    id: 3,
    site_link: `mailto:${process.env.NEXT_PUBLIC_RECIPIENT_EMAIL}`,
    icon: EMAIL_ICON,
  },
]

export const infos = [
  {
    id: 1,
    description: () => (
      <>
        I am Ujjawal Shrestha.
        <br />
        <br />
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like NextJS, React, Node.js, and
        Three.js.
        <br />
        <br />
        I&apos;m a quick learner and collaborate closely with clients to create
        efficient, scalable, and user-friendly solutions that solve real-world
        problems. Let&apos;s work together to bring ideas to life!
      </>
    ),
    className: "md:col-span-4 lg:col-span-3",
    icon: "",
    img: "",
    bgImg: "/assets/grid.svg",
  },
  {
    id: 2,
    description: () => <></>,
    className: "md:col-span-2",
    icon: "",
    img: "/assets/ujjawal.png",
    bgImg: "",
  },
  {
    id: 3,
    description: () => (
      <span className="text-center">
        <h3 className="text-5xl md:text-6xl font-semibold">5+</h3>
        <p>Completed Projects</p>
      </span>
    ),
    className: "col-span-3 lg:col-span-1",
    icon: "",
    img: "",
    bgImg: "",
  },
  {
    id: 4,
    description: () => (
      <span className="text-center">
        <h3 className="text-5xl md:text-6xl font-semibold">4+</h3>
        <p>Years of Experience</p>
      </span>
    ),
    className: "col-span-3 lg:col-span-1",
    icon: "",
    img: "",
    bgImg: "",
  },
  {
    id: 5,
    description: () => (
      <>
        <p className="text-center text-3xl font-bold">My Tech Skills</p>
      </>
    ),
    className: "lg:col-span-3 lg:row-span-2",
    icon: "",
    img: "",
    bgImg: "",
  },
  {
    id: 6,
    description: () => (
      <>
        <h3 className="font-bold -mt-2">
          Tech enthusiast with a passion for development.
        </h3>
      </>
    ),
    className: "lg:col-span-2 text-2xl md:text-3xl",
    icon: "",
    img: "",
    bgImg: "/assets/grid.svg",
  },
]

export const skills = [
  "css",
  "html",
  "typescript",
  "javascript",
  "next",
  "reactjs",
  "docker",
  "git",
  "tailwind",
  "redux",
  "nodejs",
  "mongodb",
  "threejs",
  "php",
]
