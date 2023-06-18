import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  bootstrap,
  java,
  mysql,
  threejs,
  php,
  ebrandz,
  wordpress,
  frontend,
  github,
  gnc,
  siws,
  resumet,
  kulfi,
  tailor,
} from '../assets';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FrontEnd Web Developer",
    icon: frontend,
  },
  {
    title: "WordPress Designer",
    icon: wordpress,
  },
  {
    title: "UI/UX Designer",
    icon: figma,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "wordpress",
    icon: wordpress,
  }
];

const experiences = [
  {
    title: "Jr. Web Developer",
    company_name: "Ebrandz LLP",
    icon: ebrandz,
    iconBg: "#f3f3f3",
    date: "Sept 2022 - Present",
    points: [
      "Developing and designing websites on WordPress and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility."
    ],
  },
];

const educations = [
  {
    degree: "Master of Science in Information Technology",
    institute_detail: "Guru Nanak College of Arts, Science & Commerece, Sion, IN",
    icon: gnc,
    iconBg: "#f3f3f3",
    date: "Sept 2021 - Present",
    points: [],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institute_detail: "South Indian Welfare Society(S.I.W.S), Wadala, IN",
    icon: siws,
    iconBg: "#f3f3f3",
    date: "Aug 2018 - Apr 2021",
    points: [
      "CGPA: 8.14/10"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Resumet",
    description:
      `Resume Analyzer is a system for determining whether a candidate is qualified for a role based on
      his or her education, experience, skills, and other information captured on their resume.`,
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: resumet,
    source_code_link: "https://github.com/JameelShaikh32/Resumet",
    live_link: "",
  },
  {
    name: "Agarwal Kulfi Roll",
    description:
      "A landing page for a Kulfi and Ice-Cream Shop",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: kulfi,
    source_code_link: "https://github.com/JameelShaikh32/Kulfi-Shop-Website",
    live_link: "https://jameelshaikh32.github.io/kulfi/",
  },
  {
    name: "Tailor Shop Management System",
    description:
      `A software for tailors to maintain their customers details, 
      measurements, etc digitally. And this software has online payment 
      feature i.e., integrated with 'PayUmoney'.`,
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tailor,
    source_code_link: "https://github.com/JameelShaikh32/TailorShop-Management-System",
    live_link: "",
  },
];

export { services, technologies, experiences, educations, testimonials, projects };
