import {
  SiSass,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiGmail,
  SiExpress,
  SiPostman,
  SiJira,
  SiPrisma,
  SiMongoose,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaFigma,
  FaGithub,
  FaGitAlt,
  FaLinkedin,
  FaNodeJs,
  FaConfluence,
} from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { DiMongodb } from "react-icons/di";
import { SiEjs, SiRender } from "@icons-pack/react-simple-icons";

import {
  CertificateProps,
  ExperienceProps,
  NavLinkProps,
  ProjectProps,
  SkillProps,
  SocialProps,
} from "./types";

const navLinks: NavLinkProps[] = [
  {
    url: "/#projects",
    label: "Projects",
    target: "_self",
  },
  {
    url: "/achievements",
    label: "Achievements",
    target: "_self",
  },
  {
    url: "/#contact",
    label: "Contact",
    target: "_self",
  },
  {
    url: "https://drive.google.com/file/d/1QE62RWTdFjBsEB-w8iNCuRLGuj1ReQ9E/view?usp=sharing",
    label: "Resume",
    target: "_blank",
  },
];

const projectList: ProjectProps[] = [
  {
    id: 1,
    title: "PCRMS",
    lightImg: "/pcrms.JPG",
    darkImg: "/pcrms-dark.JPG",
    desc: "A redeveloped version of my undergraduate thesis project, this solution aims to facilitate pet carrier rentals and enhance services within the pet industry.",
    logo: "/pcrms-logo.png",
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Material UI",
      "Prisma ORM",
      "PostgreSQL",
      "Auth.js",
      "Vercel",
    ],
    siteLink: "https://pcrms.vercel.app/",
    repoLink: "https://github.com/Yaosquared/pcrms",
    target: "_blank",
  },
  // {
  //   id: 1,
  //   title: "MangaSync",
  //   lightImg: "/fetchclick.JPG",
  //   darkImg: "/fetchclick.JPG",
  //   desc: "A full-stack application that integrates a public API to fetch manga data, with added CRUD functionality for efficient tracking of manga readings and session-based authentication for secure user management.",
  //   logo: "/fetchclick-logo.svg",
  //   tech: [
  //     "TypeScript",
  //     "React",
  //     "React Router v7",
  //     "TailwindCSS",
  //     "Drizzle ORM",
  //     "MySQL",
  //     "Session-based Authentication",
  //   ],
  //   siteLink: "https://fetchclick.vercel.app/",
  //   repoLink: "https://github.com/Yaosquared/fetchclick",
  //   target: "_blank",
  // },
  {
    id: 2,
    title: "FethClick",
    lightImg: "/fetchclick.JPG",
    darkImg: "/fetchclick.JPG",
    desc: "A full-stack MERN application that integrates a public API to fetch product data and added CRUD functionality for processing store orders.",
    logo: "/fetchclick-logo.svg",
    tech: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "Mongoose ODM",
      "MongoDB",
      "Vercel",
      "Render",
    ],
    siteLink: "https://fetchclick.vercel.app/",
    repoLink: "https://github.com/Yaosquared/fetchclick",
    target: "_blank",
  },
  {
    id: 3,
    title: "IMS",
    lightImg: "/ims.JPG",
    darkImg: "/ims.JPG",
    desc: "An inventory management system that leverages CRUD operations. Backend application that features credential-based authentication with JWT for secure access and Sass for styling.",
    logo: "/ims-logo.png",
    tech: [
      "JavaScript",
      "EJS",
      "Sass",
      "Node.js",
      "Express.js",
      "Mongoose ODM",
      "MongoDB",
      "JWT-based Authentication",
      "Render",
    ],
    siteLink: "https://ims-mm79.onrender.com/",
    repoLink: "https://github.com/Yaosquared/ims",
    target: "_blank",
  },
  {
    id: 4,
    title: "Portfolio",
    lightImg: "/portfolio.JPG",
    darkImg: "/portfolio-dark.JPG",
    desc: "A personal portfolio showcasing my skills and works. Frontend application powered with shadcn and Framer Motion.",
    logo: "/ysqrd-logo.png",
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "Shadcn UI",
      "Vercel",
    ],
    siteLink: "/",
    repoLink: "https://github.com/Yaosquared/my-portfolio-test-dep",
    target: "_self",
  },
];

const skillList: SkillProps[] = [
  {
    id: 1,
    text: "HTML",
    icon: FaHtml5,
  },
  {
    id: 2,
    text: "CSS",
    icon: FaCss3Alt,
  },
  {
    id: 3,
    text: "Sass",
    icon: SiSass,
  },
  {
    id: 4,
    text: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    id: 5,
    text: "JavaScript",
    icon: SiJavascript,
  },
  {
    id: 6,
    text: "TypeScript",
    icon: SiTypescript,
  },
  {
    id: 7,
    text: "React",
    icon: SiReact,
  },
  {
    id: 8,
    text: "Next.js",
    icon: SiNextdotjs,
  },
  {
    id: 9,
    text: "Node.js",
    icon: FaNodeJs,
  },
  {
    id: 10,
    text: "Express.js",
    icon: SiExpress,
  },
  {
    id: 11,
    text: "EJS",
    icon: SiEjs,
  },
  {
    id: 12,
    text: "Python",
    icon: FaPython,
  },
  {
    id: 13,
    text: "SQL",
    icon: GoDatabase,
  },
  {
    id: 14,
    text: "Prisma",
    icon: SiPrisma,
  },
  {
    id: 15,
    text: "MongoDB",
    icon: DiMongodb,
  },

  {
    id: 16,
    text: "Mongoose",
    icon: SiMongoose,
  },
  {
    id: 17,
    text: "Git",
    icon: FaGitAlt,
  },
  {
    id: 18,
    text: "GitHub",
    icon: FaGithub,
  },
  {
    id: 19,
    text: "Figma",
    icon: FaFigma,
  },
  {
    id: 20,
    text: "Vercel",
    icon: IoLogoVercel,
  },
  {
    id: 21,
    text: "Render",
    icon: SiRender,
  },
  {
    id: 22,
    text: "Postman",
    icon: SiPostman,
  },
  {
    id: 23,
    text: "Jira",
    icon: SiJira,
  },
  {
    id: 24,
    text: "Confluence",
    icon: FaConfluence,
  },
];

const educCerts: CertificateProps[] = [
  {
    id: 1,
    img: "/third-year-certificate.jpg",
    alt: "Third year college Dean's Lister certificate",
    width: 1000,
    height: 1000,
  },
  {
    id: 2,
    img: "/first-year-certificate.jpg",
    alt: "First semester of first year college Dean's Lister certificate",
    width: 1000,
    height: 1000,
  },
  {
    id: 3,
    img: "/grade-twelve-certificate.jpg",
    alt: "Grade 12 With Honors certificate",
    width: 650,
    height: 650,
  },
  {
    id: 4,
    img: "/grade-eleven-certificate.jpg",
    alt: "Grade 11 With Honors certificate",
    width: 1000,
    height: 1000,
  },
];

const carreerCerts: CertificateProps[] = [
  {
    id: 1,
    img: "/backend-training-certificate.jpg",
    alt: "Completion certificate of Back-End Web Development Training by Bayan Academy",
    width: 1000,
    height: 1000,
  },
  {
    id: 2,
    img: "/internship-certificate.jpg",
    alt: "Completion certificate of internship at E-Science Corporation",
    width: 550,
    height: 550,
  },
  {
    id: 3,
    img: "/python-essentials-certificate.jpg",
    alt: "Completion certificate of Cisco's Python Essentials 1 course",
    width: 1000,
    height: 1000,
  },
  {
    id: 4,
    img: "/javascript-essentials-certificate.jpg",
    alt: "Completion certificate of Cisco's JavaSvript Essentials 1 course",
    width: 1000,
    height: 1000,
  },
  {
    id: 5,
    img: "/data-visualization-certificate.png",
    alt: "Data Visualization Workshop certificate from ZUITT Bootcamp",
    width: 1000,
    height: 1000,
  },
];

const expList: ExperienceProps[] = [
  {
    id: 1,
    title: "Student",
    location: "Technological University of the Philippines - Cavite",
    description:
      "Enrolled at Bachelor of Engineering Technology, Major in Computer Engineering Technology Program.",
    date: "2020 - 2025",
    img: "/tup-logo.png",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Python",
      "C++",
      "C#",
      "SQL",
      "Figma",
    ],
  },
  {
    id: 2,
    title: "Quality Assurance Engineer Intern",
    location: "E-Science Corporation",
    description: "Manual Tester for the company's web and mobile applications.",
    date: "July - Dec 2024",
    img: "/escience-logo.png",
    tech: [
      "MySQL",
      "AWS CloudWatch",
      "Postman",
      "Agile Methodologies",
      "JIRA",
      "Confluence",
    ],
  },
  {
    id: 3,
    title: "Software Engineer",
    location: "Quantum Technology Inc.",
    description:
      "Responsible for developing and maintaining web and mobile applications, utilizing modern technologies to create efficient, scalable, and user-friendly solutions.",
    date: "Mar 2025 - Present",
    img: "/qtech-logo.jpg",
    tech: [
      "React",
      "React Native",
      "Expo",
      "TailwindCSS",
      "NativeWind",
      "TypeScript",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "MySQL",
      "Firebase",
      "OAuth",
    ],
  },
];

const socialList: SocialProps[] = [
  {
    id: 1,
    label: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/marioyaoyaoii/",
  },
  {
    id: 2,
    label: "Github",
    icon: FaGithub,
    link: "https://github.com/Yaosquared",
  },
  {
    id: 3,
    label: "Email",
    icon: SiGmail,
    link: "mailto:marioyaoyao14@gmail.com",
  },
];

export {
  navLinks,
  projectList,
  skillList,
  educCerts,
  carreerCerts,
  expList,
  socialList,
};
