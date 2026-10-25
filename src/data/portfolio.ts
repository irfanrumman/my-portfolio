
import myPic from "../images/mypic_1.jpg";
import contactApp from "../images/contactapp.png"
import thatix from "../images/tha_recipe.png"
import rentnest from "../images/rentnest.png"
import courierPro from "../images/courierPro.png"

// ─────────────────────────────────────────────────────────────
// THIS FILE to put in my informations.
// Everything the site displays is driven from here.
// ─────────────────────────────────────────────────────────────

export interface SkillGroup {
  category: string
  items: string[]
}

export interface EducationItem {
  degree: string
  institute: string
  duration: string
  details?: string
}

export interface ExperienceItem {
  role: string
  company: string
  duration: string
  points: string[]
}

export interface Certification {
  name: string
  issuer: string
  duration: string
  url: string
}

export interface Project {
  slug: string
  name: string
  image: string
  shortDescription: string
  description: string
  techStack: string[]
  liveLink: string
  githubLink: string
  challenges: string
  improvements: string
}

export const profile = {
  name: 'Md Irfan Uddin',
  designation: 'Full-Stack Web Developer', // main title
  roles: [ 'Full-Stack Web Developer', 'Frontend Developer', 'Backend Developer',], // shown as rotating typewriter text in the hero
  tagline: "Designing and developing modern web applications with clean code, scalable architecture, and great user experiences.",
  footer_tagline: "Building modern, scalable, and user-focused web applications with clean code.",
  photo: myPic,
  resumeUrl: 'https://drive.google.com/drive/folders/1zJAiWgMyun2GgLOhgN-2orauyLq4gdVy?usp=sharing', 
  email: 'mdirfansayid@gmail.com',
  phone: '+8801628155339',
  whatsapp: '8801628155339',
  socials: {
    github: 'https://github.com/irfanrumman/',
    linkedin: 'https://www.linkedin.com/in/mdirfanuddinrumman/',
  },
  about: `I'm a Full-Stack Web Developer with a passion for building modern, scalable, and user-focused web applications. My journey into programming began with a curiosity about how websites work behind the scenes, and that curiosity has grown into a commitment to continuously learning, solving real-world problems, and creating meaningful digital experiences.

I enjoy developing responsive user interfaces, building reliable backend systems, and designing well-structured databases. My primary expertise includes React, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, and Prisma. I'm particularly interested in writing clean, maintainable code and applying sound software engineering principles to build applications that are both efficient and scalable.

Beyond coding, I believe in continuous growth through hands-on projects, exploring new technologies, and refining my problem-solving skills. Outside of programming, I enjoy reading, travelling, and discovering new ideas that inspire creativity, broaden my perspective, and support lifelong learning.`,
}

export const skills: SkillGroup[] = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'CSS3', 'HTML5',] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Database Design / ERD'] },
  { category: 'Tools', items: ['Git & GitHub', 'VS Code', 'Draw.io', 'Vercel'] },
]


export const education: EducationItem[] = [
  {
    degree: "Bachelor's in Islamic Theology and Philosophy",
    institute: "Al-Azhar University, Cairo, Egypt",
    duration: "2024 — Present",
    details:
      "Currently pursuing undergraduate studies in Islamic Theology and Philosophy while actively building professional expertise in Full-Stack Web Development, Database Design, and modern web technologies.",
  },
  {
    degree: "English Language Course",
    institute: "MEC'S (Madani Education Care), Dhaka, Bangladesh",
    duration: "2022",
    details:
      "Completed an English language course focused on communication, reading, and writing skills.",
  },
  {
    degree: "Alim",
    institute: "Bangladesh Madrasah Education Board",
    duration: "2022",
    details: "Graduated with GPA 5.00 out of 5.00.",
  },
  {
    degree: "Dakhil",
    institute: "Bangladesh Madrasah Education Board",
    duration: "2020",
    details: "Graduated with GPA 4.50 out of 5.00.",
  },
];


export const projects: Project[] = [
  {
    slug: 'RentNest',
    name: 'RentNest',
    image: rentnest,
    shortDescription:   'A full-stack rental property marketplace connecting tenants and landlords, with role-based dashboards, secure payments, and a custom design system.',
    description: `A production-grade rental marketplace built with Next.js and TypeScript, connecting tenants and landlords through role-based dashboards (Tenant/Landlord/Admin). Features include property listing and search with filters, a full rental request lifecycle (pending → approved → active → completed), secure Stripe payment integration, JWT-based authentication with httpOnly cookies, and a custom light/dark design system built on Tailwind and shadcn/ui.`,
    techStack: ['Next.js',
    'TypeScript',
    'Tailwind CSS',
    'shadcn/ui',
    'Prisma',
    'PostgreSQL',
    'Stripe',
    'JWT Auth',],
    liveLink: 'https://l2-b7-assignment-5.vercel.app/',
    githubLink: 'https://github.com/irfanrumman/L2B7-Assignment-5',
    challenges:    'Implementing role-based route protection with middleware, handling the full rental request and payment lifecycle with React 19 useOptimistic, preventing double-fires in Stripe checkout under Strict Mode, and building a cohesive light/dark theme system from scratch.',
    improvements:  'Add real-time notifications for rental request status changes, further optimize image loading and Core Web Vitals, and expand automated test coverage across the auth and payment flows.',
  },
  {
    slug: 'CourierPro-Logistics',
    name: 'CourierPro Logistics',
    image: courierPro,
    shortDescription:   'A courier and logistics management platform where merchants and customers send parcels, and couriers and hubs move them from pickup to delivery.',
    description: `A full-stack courier management platform with a Node.js backend and a Next.js frontend. Customers and merchants create shipments and pay online with bKash or Stripe, or use cash on delivery for the product price. Each shipment moves through three stages: pickup to the origin hub, transfer between hubs, and last mile delivery, with a separate courier assigned to each stage. The system has six roles (Super Admin, Admin, Customer, Merchant, Courier, and Hub Manager), and merchants must submit their documents and get verified before they can start.`,
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'JWT', 'Stripe', 'bKash'],
    liveLink: 'https://courier-logistics-management-fronte-pi.vercel.app/',
    githubLink: 'https://github.com/irfanrumman/Courier-Logistics-Management-Frontend',
    challenges:  'Modelling the delivery flow so one shipment can have different couriers for pickup, hub transfer, and last mile delivery. Building a payment flow that supports retries with two gateways, and handling cash on delivery collection safely. The backend runs on Vercel serverless, so scheduled jobs had to be planned differently.',
    improvements: 'Add live shipment tracking, email and SMS notifications for status changes, scheduled jobs through an external scheduler, and dashboards with delivery and revenue reports for admins and merchants.',
  },
  {
    slug: 'Thatix-Cookingrecipe',
    name: 'Thatix Cookingrecipe',
    image: thatix,
    shortDescription:   'A responsive recipe website that allows users to explore delicious recipes with a clean and intuitive interface.',
    description: `A modern frontend recipe application built with HTML, CSS, and JavaScript. The project focuses on responsive design, clean layouts, intuitive navigation, and an engaging user experience. Users can browse recipes, explore food categories, and enjoy a visually appealing interface optimized for both desktop and mobile devices.`,
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    liveLink: 'https://irfanrumman.github.io/thatix-cookingrecipe/',
    githubLink: 'https://github.com/irfanrumman/thatix-cookingrecipe',
    challenges:  'Creating a fully responsive layout while maintaining a consistent user experience across different screen sizes and organizing the project with clean, maintainable code.',
    improvements: 'Introduce recipe search, category filtering, bookmarking favorite recipes, and additional UI enhancements to further improve the overall user experience.',
  },
  {
   slug: 'Contact App',
    name: 'Contact App',
     image: contactApp,
    shortDescription:   'A responsive React application built with modern frontend technologies, focusing on clean UI, reusable components, and smooth user experience.',
    description: `A frontend web application developed using React and Vite with a focus on component-based architecture and responsive design. The project demonstrates clean code organization, reusable UI components, modern styling practices, and an intuitive user experience across desktop and mobile devices.`,
    techStack: ['React', 'Vite', 'React Router', 'JavaScript','Bootstrap',],
    liveLink: 'https://contactapp-rumman.vercel.app/',
    githubLink: 'https://github.com/irfanrumman/assignment5',
    challenges:   'Managing component structure, implementing responsive layouts, handling client-side routing, and maintaining a clean and scalable codebase throughout the project.',
    improvements: 'Further enhance accessibility, optimize performance, and add more interactive UI animations to improve the overall user experience.',
  },
]
