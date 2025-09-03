import close_black from './close-black.png';
import close_white from './close-white.png';
import code_icon_dark from './code-icon-dark.png';
import code_icon from './code-icon.png';
import cursor_ai from './cursor-ai.png';
import download_icon from './download-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import edu_icon from './edu-icon.png';
import figma from './figma.png';
import git from './git.png';
import graphics_icon from './graphics-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import aws_white from './languages/aws-light.png';
import aws from './languages/aws.png';
import bitbucket from './languages/bitbucket.png';
import github_white from './languages/github-white.png';
import github from './languages/github.png';
import mysql from './languages/mysql.png';
import redis from './languages/redis.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import mobile_icon from './mobile-icon.png';
import mongodb from './mongodb.png';
import profile_img from './profile-img.png';
import project_icon_dark from './project-icon-dark.png';
import project_icon from './project-icon.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_white from './right-arrow-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import ui_icon from './ui-icon.png';
import user_image from './user-image.png';
import vscode from './vscode.png';
import web_icon from './web-icon.png';

import { BriefcaseBusiness, Code, Figma, Globe, GraduationCap, Image as ImageIcon, Wallpaper } from 'lucide-react';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    aws,
    github,
    bitbucket,
    mysql,
    redis,
    github_white,
    aws_white,
    cursor_ai
};

// Import project images at the top of the file
import work1 from './projects/work-1.png';
import work2 from './projects/work-2.png';
import work3 from './projects/work-3.png';
import work4 from './projects/work-4.png';

export const workData = [
    {
        title: 'AiVista Analytics',
        description: 'Web Development, UI/UX Design',
        bgImage: work1,
        link: 'https://aivistaanalytics.com/'
    },
    {
        title: 'Unisellergy',
        description: 'Backend Development',
        bgImage: work2,
        link: 'https://unisellergy.in/'
    },
    {
        title: 'Pawfriend',
        description: 'Web Development, UI/UX Design',
        bgImage: work3,
        link: 'https://pawfriend.in/'
    },
    {
        title: 'ProjectChetna',
        description: 'Web Development, UI/UX Design',
        bgImage: work4,
        link: 'https://projectchetna.in/'
    },
]

export const serviceData = [
    {
        icon: <Globe className='w-10 text-white dark:text-darkHover' />,
        title: 'Web development',
        description: 'Web development is the process of building, programming and maintaining websites and web applications.',
        link: ''
    },
    {
        icon: <Figma className='w-10 text-white dark:text-darkHover' />,
        title: 'UI/UX design',
        description: 'UI/UX design focuses on creating a seamless user experience and intuitive interfaces.',
        link: ''
    },
    {
        icon: <Wallpaper className='w-10 text-white dark:text-darkHover' />,
        title: 'Wordpress design',
        description: 'WordPress design involves creating custom themes and layouts for content management systems.',
        link: ''
    },
    {
        icon: <ImageIcon className='w-10 text-white dark:text-darkHover' />,
        title: 'Graphics design',
        description: 'Creative design solutions to enhance visual communication and brand identity through compelling graphics.',
        link: ''
    },
]

export const infoList = [
    {
        icon: <Code className='w-8 text-gray-700 dark:text-white' />,
        title: 'Languages',
        description: 'ReactJs, NextJs, JavaScript, PHP, SQL, Laravel, TypeScript, HTML, CSS, etc.'
    },
    {
        icon: <GraduationCap className='w-8 text-gray-700 dark:text-white' />,
        title: 'Education',
        description: 'B.Sc in Computer Science'
    },
    {
        icon: <BriefcaseBusiness className='w-8 text-gray-700 dark:text-white' />,
        title: 'Projects',
        description: 'Built more than 4 projects'
    }
];

export const toolsData = [
    {
        icon: assets.cursor_ai,
        title: 'Cursor AI IDE'
    },
    {
        icon: assets.vscode,
        title: 'VS Code'
    },
    {
        icon: assets.git,
        title: 'Git'
    },
    {
        icon: assets.github,
        iconDark: assets.github_white,
        title: 'Github'
    },
    {
        icon: assets.bitbucket,
        title: 'Bitbucket'
    },
    {
        icon: assets.mysql,
        title: 'MySQL'
    },
    {
        icon: assets.mongodb,
        title: 'MongoDB'
    },
    {
        icon: assets.redis,
        title: 'Redis'
    },
    {
        icon: assets.aws,
        iconDark: assets.aws_white,
        title: 'AWS'
    },
    {
        icon: assets.figma,
        title: 'Figma'
    }
];