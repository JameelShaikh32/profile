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
  codeigniter,
  ebrandz,
  wordpress,
  frontend,
  gnc,
  siws,
  byteschool,
  resumet,
  kulfi,
  tailor
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
    title: "Full Stack Web Developer",
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
    name: "codeigniter",
    icon: codeigniter,
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
    title: "PHP Developer",
    company_name: "Ebrandz LLP",
    icon: ebrandz,
    iconBg: "#f3f3f3",
    date: "Aug 2023 - Present",
    points: [
      "Experience developing REST applications on modern MVC PHP frameworks such as CodeIgniter 4.",
      "Experience with system documentation or the ability to help document specialists in developing systems documentation.",
      "Experience with REST APIs with a basic understanding of object-oriented programming (OOP) design patterns.",
      "Working on all-in-one marketplaces dashboard.",
      "Working experience with JIRA and Bitbucket (as well as the Git code repository, including code-reviewing tools."
    ],
  },
  {
    title: "Jr. Web Developer",
    company_name: "Ebrandz LLP",
    icon: ebrandz,
    iconBg: "#f3f3f3",
    date: "Sept 2022 - July 2023",
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

const projects = [
  {
    name: "ByteSchool",
    description:
      `ByteSchool is the student communities website that provides a one-stop platform for students to learn new skills, network with peers, apply for internships & jobs and grow as an individual. `,
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      }
    ],
    image: byteschool,
    source_code_link: "",
    live_link: "https://www.byteschool.in",
  },
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
    source_code_link: "https://github.com/JameelShaikh32/Resume-Analyzer",
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

export { services, technologies, experiences, educations, projects };
