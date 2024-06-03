import { CHOICELY, EVENTTI, NORDXM } from "../assets"
import { GITHUB_ICON, LINKEDIN_ICON, EMAIL_ICON } from "./icons"

export * from "./icons"
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

export const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "Eventti",
    icon: EVENTTI,
    iconBg: "#383E56",
    date: "Oct 2020 - June 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "Choicely",
    icon: CHOICELY,
    iconBg: "#E6DEDD",
    date: "July 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "NordXM",
    icon: NORDXM,
    iconBg: "#F3F3F3",
    date: "Nov 2023 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/assets/p1.svg",
    tags: ["react", "tailwind", "ts"],
    demo_link: "/ui.earth.com",
    source_code_link: "https://github.com/ujstha",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/assets/p2.svg",
    tags: ["next", "tailwind", "ts"],
    demo_link: "/ui.earth.com",
    source_code_link: "https://github.com/ujstha",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/assets/p3.svg",
    tags: ["react", "taiwind", "threejs"],
    demo_link: "/ui.earth.com",
    source_code_link: "https://github.com/ujstha",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/assets/p4.svg",
    tags: ["next", "threejs", "gsap"],
    demo_link: "/ui.earth.com",
    source_code_link: "https://github.com/ujstha",
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
        <br />I am a full-stack developer.
      </>
    ),
    icon: "",
    img: "",
  },
  {
    id: 2,
    description: () => <></>,
    icon: "",
    img: "/assets/ujjawal.png",
  },
  {
    id: 3,
    description: () => (
      <span className="text-center">
        <h4 className="text-6xl font-semibold">5+</h4>
        <p>Completed Projects</p>
      </span>
    ),
    icon: "",
    img: "",
  },
  {
    id: 4,
    description: () => (
      <span className="text-center">
        <h4 className="text-6xl font-semibold">4+</h4>
        <p>Years of Experience</p>
      </span>
    ),
    icon: "",
    img: "",
  },
  {
    id: 5,
    description: () => "",
    icon: "",
    img: "",
  },
]
