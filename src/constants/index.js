import { CHOICELY, EVENTTI, NORDXM } from "../assets"

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