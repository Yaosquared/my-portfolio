import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiCsharp,
  SiGmail,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaPython,
  FaFigma,
  FaGithub,
  FaGitAlt,
  FaLinkedin,
} from "react-icons/fa";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";

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
    title: "My Portfolio",
    lightImg: "/portfolio.JPG",
    darkImg: "/portfolio-dark.JPG",
    desc: "A simple portfolio showcasing my skills and works. Front end based application powered with shadcn and Framer Motion.",
    logo: "/portfolio-logo.svg",
    tech: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    siteLink: "/",
    repoLink: "https://github.com/Yaosquared/my-portfolio-test-dep",
    target: "_self",
  },
  {
    id: 2,
    title: "PCRMS (Client Side)",
    lightImg: "/pcrms.JPG",
    darkImg: "/pcrms-dark.JPG",
    desc: "A reworked client-side version of my undergraduate thesis project, this solution aims to facilitate pet carrier rentals and enhance services within the pet industry.",
    logo: "/pcrms-logo.png",
    tech: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    siteLink: "https://pcrms.vercel.app/",
    repoLink: "https://github.com/Yaosquared/pcrms",
    target: "_blank",
  },
  {
    id: 3,
    title: "CarHub",
    lightImg: "/carhub.JPG",
    darkImg: "/carhub-dark.JPG",
    desc: "CarHub is a car showcase application that displays car information and details through an API.",
    logo: "/carhub-logo.ico",
    tech: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    siteLink: "https://cars-showcase-snowy.vercel.app/",
    repoLink: "https://github.com/Yaosquared/carhub",
    target: "_blank",
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
    icon: FaSass,
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
    text: "NextJS",
    icon: SiNextdotjs,
  },
  {
    id: 9,
    text: "Python",
    icon: FaPython,
  },
  {
    id: 10,
    text: "C++",
    icon: BiLogoCPlusPlus,
  },
  {
    id: 11,
    text: "C#",
    icon: SiCsharp,
  },
  {
    id: 12,
    text: "SQL",
    icon: GoDatabase,
  },
  {
    id: 13,
    text: "Git",
    icon: FaGitAlt,
  },
  {
    id: 14,
    text: "GitHub",
    icon: FaGithub,
  },
  {
    id: 15,
    text: "Figma",
    icon: FaFigma,
  },
  {
    id: 16,
    text: "Vercel",
    icon: IoLogoVercel,
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
    img: "/python-essentials-certificate.jpg",
    alt: "Completion certificate of Cisco's Python Essentials 1 course",
    width: 1000,
    height: 1000,
  },
  {
    id: 2,
    img: "/javascript-essentials-certificate.jpg",
    alt: "Completion certificate of Cisco's JavaSvript Essentials 1 course",
    width: 1000,
    height: 1000,
  },
  {
    id: 3,
    img: "/data-visualization-certificate.png",
    alt: "Data Visualization Workshop certificate from ZUITT Bootcamp",
    width: 1000,
    height: 1000,
  },
  {
    id: 4,
    img: "/introduction-to-packet-tracer-certificate.jpg",
    alt: "Completion certificate of Cisco's Introduction to Packet Tracer course",
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
      "Enrolled at Bachelor of Engineering Technology - Major in Computer Engineering Technology Program.",
    date: "2020 - 2024",
    img: "/tup-logo.png",
    tech: ["ReactJS", "Python", "C++", "C#", "SQL"],
  },
  {
    id: 2,
    title: "Software Quality Assurance Intern",
    location: "E-Science Corporation",
    description: "Manual Tester for the company's web and mobile applications.",
    date: "July - Nov 2024",
    img: "/escience-logo.png",
    tech: ["MySQL", "AWS", "Postman", "JIRA"],
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
