import { IProfile } from "./types";

export const profileData: IProfile = {
    hero: {
        name: "Muhammad Ahmed",
        title: "MERN Stack Developer",
        subtitle: "Building scalable web applications with modern technologies",
        resume: "https://drive.google.com/file/d/1hhp7Znc7_VzXRjF7yOpW0ApU6AssyJgU/view?usp=drivesdk",
        social_links: {
            github: "https://github.com/Muhammad-Ahmed-Official",
            linkedin: "https://www.linkedin.com/in/muhammad-ahmed-88b843202",
        },
    },
    about: {
        description: "Passionate MERN Stack Developer with expertise in React, Node.js, and MongoDB. Dedicated to writing clean and scalable code, optimizing application performance, and mentoring aspiring developers.",
        expertise: [
            {
                icon: "Palette",
                title: "Frontend Development",
                skills: ["React.js", "Next.js", "TypeScript", "Shadcn", "TailwindCSS", "Bootstrap", "Ant Design", "Material UI"],
            },
            {
                icon: "Server",
                title: "Backend Development",
                skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "Redis", "BullMQ", "Cloudinary", "ImageKit"],
            },
            {
                icon: "Code2",
                title: "Cloud & DevOps",
                skills: ["Git", "GitHub", "Vercel", "Render", "Netlify", "Firebase"],
            },
        ],
    },
    experiences: [
        {
            title: "Web & App Development Trainer",
            company: "SMIT, Karachi",
            period: "Feb 2025 - Present",
            description: "Conducted training sessions, mentored students, and developed course content.",
            skills: ["Teaching", "Mentorship", "Curriculum Development"],
        },
        {
            title: "Full Stack Developer",
            company: "FoxMindTech",
            period: "Dec 2024 - Feb 2025",
            description: "Designed and developed full-stack applications using MERN stack.",
            skills: ["MERN", "API Integration", "Frontend Development", "Backend Development", "Cloud Deployment"],
        },
        {
            title: "Frontend Intern",
            company: "UxBolt",
            period: "Sep 2024 - Nov 2024",
            description: "Worked on UI development and optimized frontend performance.",
            skills: ["React.js", "Next.js", "TailwindCSS", "Ant Design"],
        },
    ],
    // *************
    projects: [
         {
            title: "Ai Medical Agent",
            description: "Reimagining healthcare with AI — AI Medical Assistance, a SaaS platform where patients chat with an AI-powered doctor agent in real time, automatically generating clear, structured medical reports for faster, smarter care.",
            images: ["/assets/AI Medical Agent.png"],
            technologies: ["Full Stack", "Next.js", "PostgreSQL", "Node.js", "Clerk", "Gemini Api", "Image Kit"],
            links: {
                live: "https://aihealthagent.vercel.app",
                github: "https://github.com/Muhammad-Ahmed-Official/aihealthagent"
            }
        },
        {
            title: "Blogging Site",
            description: "A feature-rich MERN blogging platform for seamless reading, writing, and management with modern design and smooth performance.",
            images: ["/assets/Blogging Site Mockup.png"],
            technologies: ["MERN", "React.js", "MongoDB", "Express.js", "Node.js", "React Query", "Cloudinary"],
            links: {
                live: "https://blog-spark.vercel.app",
                github: "https://github.com/Muhammad-Ahmed-Official/BlogSpark.git"
            }
        },
         {
            title: "Skill Mint",
            description: "Built SkillMint, an AI-powered interview preparation platform. The platform allows users to take mock quizzes, explore detailed explanations, pin important questions, and receive personalized improvement suggestions.",
            images: ["/assets/AI Interview.png"],
            technologies: ["MERN", "Gemini API", "MongoDB", "Express.js", "React.js", "Node.js"],
            links: {
                live: "https://skill-mint.vercel.app",
                github: "https://github.com/Muhammad-Ahmed-Official/Skill_Mint.git"
            }
        },
        
        {
            title: "Chat-App",
            description: "A responsive, interactive chat application built with the MERN stack, featuring real-time messaging via Socket.io and image storage with Cloudinary.",
            images: ["/assets/Chat App Mobile Mockup.png"],
            technologies: ["MERN", "Socket.io", "Cloudinary", "MongoDB", "Express.js", "React.js", "Node.js"],
            links: {
                live: "https://chat-app-rq4w.onrender.com",
                github: "https://github.com/Huzaifa-Khan-Official/Chat-App"
            }
        },
        {
            title: "Meal Hub",
            description: "A responsive food website providing a seamless experience for customers and admins. Admins manage restaurants, dishes, and real-time orders, while customers can place orders, reserve tables, and track deliveries with live updates and smooth workflow integration.",
            images: ["/assets/Food.png"],
            technologies: ["Javascript", "Firebase", "CSS"],
            links: {
                live: "https://mealwheels.netlify.app",
                github: "https://github.com/Muhammad-Ahmed-Official/foodDeliveryWeb-2"
            }
        },
        {
            title: "Disney Clone",
            description: "Disney Clone is a web app simulating a Disney-themed movie platform. It offers a responsive, component-based UI with smooth navigation, interactive browsing, and visually consistent styling across devices.",
            images: ["/assets/Disney.png"],
            technologies: ["React.js", "Firebase", "Redux Toolkit"],
            links: {
                live: "https://disnyclone.netlify.app",
                github: "https://github.com/Muhammad-Ahmed-Official/DisneyClone"
            }
        },
        {
            title: "LOOM",
            description: "Loom is a Zoom-like video conferencing web app with features such as creating and scheduling meetings, personal rooms, screen sharing, and video recording. It offers a seamless meeting experience with a Zoom-style interface.",
            images: ["/assets/loom.png"],
            technologies: ["Next.js", "Shadcn", "Streamble", "Clerk"],
            links: {
                live: "https://loom-clone-ruby.vercel.app",
                github: "https://github.com/Muhammad-Ahmed-Official/Loom_Clone.git"
            }
        },
        {
            title: "AI Cold Emailing",
            description: "Worked as a Frontend Developer (Contract) on AiCold – a modern AI-powered cold emailing SaaS platform. Contributed to building clean, scalable UIs and collaborated on features like dynamic email templates, real-time campaign insights, and smooth API integration to deliver a high-converting product interface.",
            images: ["/assets/cold Emailing.png"],
            technologies: ["React.js", "Tailwind CSS", "React Query"],
            links: {
                live: "https://ai-automation-eight.vercel.app",
                github: "https://github.com/Muhammad-Ahmed-Official/Ai-Automation.git"
            }
        },
    ],
    // **************
    services: [
        {
            title: "Website Development",
            description: "Development of responsive and interactive websites for individuals, businesses, or organizations using HTML5, CSS3, JavaScript, and Bootstrap. Ensures mobile-friendly and optimized performance across all devices.",
            icon: "Globe"
        },
        {
            title: "Frontend Development",
            description: "Specialized in building intuitive user interfaces (UIs) and seamless user experiences (UX) with HTML5, CSS3, JavaScript, and React.js. Delivers fast, responsive single-page applications (SPAs).",
            icon: "Layout"
        },
        {
            title: "Custom Web Applications",
            description: "Creation of custom web applications using React.js with backend technologies like Node.js and Express.js. Integrates Firebase for real-time data, authentication, and hosting.",
            icon: "Code"
        },
        {
            title: "Web Hosting and Deployment",
            description: "Assistance in deploying websites and web applications on platforms like Firebase Hosting, Netlify, or traditional servers. Optimizes performance and ensures secure HTTPS connections.",
            icon: "Server"
        },
        {
            title: "Maintenance and Updates",
            description: "Ongoing maintenance services, including security patches, performance optimizations, and feature updates. Provides backups and uptime monitoring.",
            icon: "Settings"
        },
        {
            title: "Responsive Design Audits",
            description: "Evaluation of existing websites for responsiveness across devices and browsers. Implementation of improvements using CSS3 media queries and modern design principles.",
            icon: "TabletSmartphone"
        },
        {
            title: "API Integrations",
            description: "Integration of third-party APIs (social media, payment gateways, etc.) into web applications using JavaScript and React.js. Ensures secure and efficient data handling.",
            icon: "Link"
        },
        {
            title: "MERN Stack Development",
            description: "Full-stack application development using MongoDB, Express.js, React.js, and Node.js. Builds scalable solutions with secure authentication and database management.",
            icon: "Database"
        },
        {
            title: "Mobile App Development",
            description: "Development of cross-platform mobile apps using React Native or Flutter. Focuses on responsive UI, real-time data, and smooth API integrations.",
            icon: "Smartphone"
        },
        {
            title: "E-commerce Solutions",
            description: "Creation of custom e-commerce platforms with the MERN stack, including secure payments, shopping carts, and order management systems.",
            icon: "ShoppingCart"
        }
    ],
    certificates: [
        {
            title: "Web & Mobile App Development",
            issuer: "S.M.I.T (Saylani Mass I.T Training)",
            date: "February 2025",
            image: "/assets/certificates/Web & App Development SMIT Certificate.png",
        },
        {
            title: 'JavaScript Essentials 1',
            issuer: 'CISCO Networking Academy',
            date: 'November 2024',
            image: '/assets/certificates/JavaScript_Essentials_1.png',
        },
        {
            title: 'JavaScript Essentials 2',
            issuer: 'CISCO Networking Academy',
            date: 'November 2024',
            image: '/assets/certificates/JavaScript_Essentials_2.png',
        },
        {
            title: 'Responsive Web Design',
            issuer: 'freeCodeCamp',
            date: 'October 2023',
            image: '/assets/certificates/Responsive Web Design Certificate.png',
        },
        {
            title: 'JavaScript Algorithms and Data Structures (Beta)',
            issuer: 'freeCodeCamp',
            date: 'August 2024',
            image: '/assets/certificates/JavaScript Algorithms and Data Structures (Beta) Certificate.png',
        },
        {
            title: 'Communication & Soft Skils',
            issuer: 'DigiSkills',
            date: 'October 2022',
            image: '/assets/certificates/communication & soft skils certificate.png',
        },
        {
            title: 'Google Soft Skills',
            issuer: 'Google',
            date: 'Descember 2024',
            image: '/assets/certificates/google-soft-skills-program-certificate.png',
        },
        {
            title: 'Python Fundamentals Diploma',
            issuer: 'Alison',
            date: 'February 2023',
            image: '/assets/certificates/Python Fundamentals Diploma Certificate.png',
        },
        {
            title: 'Python Programming Essential',
            issuer: 'CISCO Networking Academy',
            date: 'March 2022',
            image: '/assets/certificates/Python-Programming Essential-certificate.png',
        },
    ],
    contact: {
        email: "ahmedanis4546@gmail.com",
        phone: "+92-3249208699",
        address: "Gulsha-e-Iqbal, Karachi, Pakistan",
    },
    year: new Date().getFullYear(),
};