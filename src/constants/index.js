import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  // mongodb,
  git,
  figma,
  // docker,
  urja,
  goldenmace,
  mumbaiuniv,
  nirmala,
  threejs,
} from "../assets";

import SteelMart from "../assets/SteelMart.png";
import AppLab from "../assets/AppLab.png";
import AcuSoft from "../assets/Acusoft.png";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Designer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "UI Designer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Jr. Web Designer",
    company_name: "Urja Communications",
    icon: urja,
    iconBg: "#383E56",
    date: "Sept 2021 - Mar 2022",
    points: [
      "Collaborated with the client servicing team to understand requirements and convert them into functional websites.",
      "Developed responsive layouts using media queries for various screen sizes and devices.",
      "Fixed layout and style issues, enhanced existing code, and improved website performance.",
      "Troubleshot CSS and JavaScript bugs in mailers and websites across platforms like Gmail, Yahoo, and Outlook.",
      "Tested and validated email templates on actual mobile phones to ensure cross-platform compatibility.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Goldenmace IT Solutions",
    icon: goldenmace,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Mar 2020",
    points: [
      "Created websites and landing pages from scratch using HTML, CSS, and JavaScript.",
      "Worked on the Sofbox Admin - Ecommerce Admin Panel, designing UI templates and cards.",
    ],
  },
  {
    title: "M.Sc. Computer Science",
    company_name: "University of Mumbai",
    icon: mumbaiuniv,
    iconBg: "#383E56",
    date: "Graduated: 2021",
    points: [
      "Completed Master's in Computer Science with CGPA of 9.5.",
      "Focused on frontend development, responsive design, and web application architecture.",
    ],
  },
  {
    title: "B.Sc. Computer Science",
    company_name: "Nirmala Memorial Foundation College",
    icon: nirmala,
    iconBg: "#E6DEDD",
    date: "Graduated: 2019",
    points: [
      "Completed Bachelor’s in Computer Science with CGPA of 6.18.",
      "Built foundation in HTML, CSS, JavaScript, and software fundamentals.",
    ],
  },
];


const testimonials = [
  {
    name: "React.js",
    designation: "Frontend Library",
    company: "Modern UI",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    testimonial:
      "Built interactive, responsive interfaces using React components with state and props for efficient UI logic.",
  },
  {
    name: "Figma to Code",
    designation: "Design to Dev",
    company: "Pixel Perfect",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    testimonial:
      "Transformed high-fidelity Figma designs into accessible, responsive web pages with semantic HTML and reusable components.",
  },
  {
    name: "Bootstrap",
    designation: "CSS Framework",
    company: "Responsive UI",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    testimonial:
      "Utilized Bootstrap’s grid and components to build mobile-first UIs while customizing themes for project needs.",
    
  },
];

const projects = [
  {
    name: "SteelMart",
    description:
      "Custom UI for the metal manufacturing sector, focused on clean navigation and industrial-grade design.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "blue-text-gradient",
      // },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: SteelMart,
    live_demo_link: "https://sheikhmohammadirfan.github.io/EcommerceWebsite/",
    source_code_link: "https://github.com/sheikhmohammadirfan/EcommerceWebsite"
  },
  {
    name: "AppLab",
    description:
      "Developed for AppLab, this responsive website ensures compatibility across devices and browsers.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: AppLab,
    live_demo_link: "https://sheikhmohammadirfan.github.io/StaticResponsiveWebsite/",
    source_code_link: "https://github.com/sheikhmohammadirfan/StaticResponsiveWebsite",
  },
  {
    name: "Acusoft",
    description:
      "A responsive admin dashboard that adapts to different screen sizes for enhanced user experience.",
    tags: [
      { 
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      // {
      //   name: "VSC",
      //   color: "pink-text-gradient",
      // },
    ],
    image: AcuSoft,
    live_demo_link: "https://sheikhmohammadirfan.github.io/AdminDashboard/",
    source_code_link: "https://github.com/sheikhmohammadirfan/AdminDashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };