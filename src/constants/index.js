import { webdevIcon, uiuxIcon, wpdevIcon, logoDesignIcon, ebrandz, uom, bitshala, pawfriend, kulfi, resumet, tailor, unisellergy, projectchetna } from "../assets";

export const services = [
    {
        title: 'Web Development',
        icon: webdevIcon
    },
    {
        title: 'UI/UX Development',
        icon: uiuxIcon
    },
    {
        title: 'WordPress Design',
        icon: wpdevIcon
    },
    {
        title: 'Logo Design',
        icon: logoDesignIcon
    }
];

export const experiences = [
    {
        id: 1,
        title: "Senior Software Developer",
        company_name: "Ebrandz LLP",
        location: "Mumbai, Maharashtra, IN",
        icon: ebrandz,
        iconBg: "#f3f3f3",
        date: "Oct 2024 - Present",
        points: [
            "Experience with GraphQL API integration, AWS (S3, SNS, SQS, Lambda Functions, etc.).",
            "Experience with web performance optimization techniques and security best practices.",
        ],
    },
    {
        id: 2,
        title: "PHP Developer",
        company_name: "Ebrandz LLP",
        location: "Mumbai, Maharashtra, IN",
        icon: ebrandz,
        iconBg: "#f3f3f3",
        date: "Aug 2023 - Oct 2024",
        points: [
            "Experience with integrations like Shopify, Flipkart, and Amazon.",
            "Experience developing REST applications on modern MVC PHP frameworks such as CodeIgniter 4 and Laravel 10.",
            "Experience with system documentation or the ability to help document specialists in developing systems documentation.",
            "Experience with REST APIs with a basic understanding of object-oriented programming (OOP) design patterns.",
            "Working on all-in-one marketplaces dashboard.",
            "Working experience with Bitbucket (as well as the Git code repository, including code-reviewing tools."
        ],
    },
    {
        id: 3,
        title: "Jr. Web Developer",
        company_name: "Ebrandz LLP",
        location: "Mumbai, Maharashtra, IN",
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

export const educations = [
    {
        id: 1,
        degree: "Bachelor of Science in Computer Science",
        institute_detail: "University of Mumbai",
        icon: uom,
        iconBg: "#f3f3f3",
        date: "Aug 2018 - Apr 2021",
        points: [
            "CGPA: 8.14/10"
        ],
    },
];

export const projects = [
    {
        name: "Unisellergy",
        description:
            "Unisellergy is a powerful e-commerce solution that integrates all sales channels, offering a comprehensive builder and courier system for managing inventory and shipments from a single dashboard.",
        role: "Working as a Backend Developer",
        tags: ["php", "laravel", "angular", "scss", "typescript", "mysql", "redis", "aws", "graphql", "& more.."],
        image: unisellergy,
        source_code_link: "",
        live_link: "https://unisellergy.in",
    },
    {
        name: "ProjectChetna",
        description:
            "Project Chetna is a caring initiative in India dedicated to helping millions of people affected by Dementia and Alzheimer's disease.",
        role: "Working as a Frontend Developer",
        tags: ["nextjs", "html", "css", "typescript", "tailwindcss", "react", "mongodb"],
        image: projectchetna,
        source_code_link: "",
        live_link: "https://projectchetna.in",
    },
    {
        name: "Pawfriend",
        description:
            "PawFriend.in, founded by Akshay Ridlan, is a cutting-edge technology that leverages QR codes to enhance pet safety and provide reassurance for pet owners. ",
        role: "Working as a Frontend Developer",
        tags: ["nextjs", "html", "css", "typescript", "tailwindcss", "react", "mongodb"],
        image: pawfriend,
        source_code_link: "",
        live_link: "https://pawfriend.in",
    },
    // {
    //     name: "BitShala",
    //     description:
    //         "BitShala is the student communities website that provides a one-stop platform for students to learn new skills, network with peers, apply for internships & jobs and grow as an individual. ",
    //     tags: ["react", "html", "css", "javascript", "next.js", "mongodb"],
    //     image: bitshala,
    //     source_code_link: "",
    //     live_link: "https://bitshala.in",
    // },
    // {
    //     name: "Resumet",
    //     description:
    //         `Resume Analyzer is a system for determining whether a candidate is qualified for a role based on
    //     his or her education, experience, skills, and other information captured on their resume.`,
    //     tags: ["python", "mysql", "streamlit"],
    //     image: resumet,
    //     source_code_link: "https://github.com/JameelShaikh32/Resume-Analyzer",
    //     live_link: "",
    // },
    // {
    //     name: "Agarwal Kulfi Roll",
    //     description:
    //         "A landing page for a Kulfi and Ice-Cream Shop",
    //     tags: ["html", "css", "javascript", "bootstrap"],
    //     image: kulfi,
    //     source_code_link: "https://github.com/JameelShaikh32/Kulfi-Shop-Website",
    //     live_link: "https://jameelshaikh32.github.io/kulfi/",
    // },
    // {
    //     name: "Tailor Shop Management System",
    //     description:
    //         `A software for tailors to maintain their customers details, 
    //     measurements, etc digitally. And this software has online payment 
    //     feature i.e., integrated with 'PayUmoney'.`,
    //     tags: ["java", "mysql", "html", "css"],
    //     image: tailor,
    //     source_code_link: "https://github.com/JameelShaikh32/TailorShop-Management-System",
    //     live_link: "",
    // },
];