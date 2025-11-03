import Kicks from "../assets/projects/Kicks&co.png";
import user from "../assets/projects/userManagement.png";
import olxClone from "../assets/projects/olxClone.png";
import netflixClone from "../assets/projects/NetflixClone.png";
import TodoList from "../assets/projects/TodoList.png";
import socialMedia from "../assets/projects/socialMedia.png";
import cred from "../assets/projects/credHtml.png";
import heyyo from "../assets/projects/Heyyo.png";
import weather from "../assets/projects/weather app.png";

export const DISCRIPTION_CONTENT = `
I am a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js).
I have hands-on experience through a 4-month internship where I worked on real-world MERN projects, strengthening my skills in both frontend and backend development.
A strong team player with excellent collaboration and communication abilities, committed to delivering high-quality results in every project.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCE = {
  role: "MERN Stack Developer Intern",
  company: "Velocity Interior, Bengaluru (Remote)",
  duration: "July 2024 – Present",
  highlights: [
    "Collaborated within a team to build a SaaS-based Work Analyzer web platform serving multiple interior design companies, covering both employer and customer modules.",
    "Independently developed the core Finance Section, including Estimate Management, Expense Management, and Payment Management Systems for handling project finances end-to-end.",
    "Built and integrated file and folder management functionalities from scratch using React, Node.js, Express.js, and MongoDB.",
    "Enhanced the Customer Module with project tracking and communication features to improve client transparency.",
    "Initiated the development of a real-time chat system using Socket.io, including data modeling and backend setup.",
    "Guided team members during feature development and ensured smooth frontend–backend integration.",
    "Gained hands-on experience in full-stack development, SaaS architecture, and cloud integration.",
  ],
};

export const EDUCATION = {
  degree: "B.Tech",
  department: "Electronics and Communication Engineering",
  institution: "Government Engineering College, Thrissur",
  year: "2018-2022",
};

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: Kicks,
    description:
      "Developed a comprehensive e-commerce application using the MERN stack's backend technologies and HTML/CSS for the frontend. This application allows users to browse, select, and purchase shoes online, providing a seamless shopping experience.",
    technologies: [
      "HTML",
      "CSS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "EJS",
      "Nodemailer",
      "Razorpay",
    ],
    github: "https://github.com/karthikakl/Kicks-Co",
  },
  {
    title: "Heyyo Chat App",
    image: heyyo,
    description:
      "A real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js), Socket.io for real-time communication, and Tailwind CSS for styling.",
    technologies: [
      "React",
      "Express.js",
      "Node.js",
      "API",
      "Tailwind CSS",
      "Socket.io",
      " MongoDB",
      "JWT",
    ],
    github: "https://github.com/karthikakl/Heyyo-App",
  },
  {
    title: "Weather App",
    image: weather,
    description:
      "A responsive weather application built using React. It dynamically displays weather information and sets an animated video or image background based on current weather conditions.",
    technologies: ["React", "Tailwind CSS", "OpenWeather API"],
    github: "https://github.com/karthikakl/Weather-App",
  },
  {
    title: "User Management App",
    image: user,
    description:
      "This User Management System was built to deepen understanding of Redux for efficient state management in a full-stack application.",
    technologies: ["React", "Redux", "MongoDB", "Node.js", "Express.js", "JWT"],
    github: "https://github.com/karthikakl/User-Management",
  },
  {
    title: "OLX Clone",
    image: olxClone,
    description:
      "A clone of the OLX platform that allows users to list and browse items for sale. It includes secure user authentication and CRUD operations for managing listings.",
    technologies: [
      "React",
      "Firebase",
      "User Authentication",
      "Express.js",
      "Node.js",
    ],
    github: "https://github.com/karthikakl/Olx-clone/tree/master",
  },

  {
    title: "PhotoGram",
    image: socialMedia,
    description:
      "A social media app with JWT-based authentication and GraphQL integration for efficient data fetching and manipulation. Features include posting, liking, and following users.",
    technologies: [
      "React",
      "TypeScript",
      "JWT",
      "Express",
      "Firebase",
      "Node.js",
      "GraphQL",
      "Tailwind",
    ],
    github: "https://github.com/karthikakl/photoGram",
  },
  {
    title: "To-Do App",
    image: TodoList,
    description:
      "A To-Do List application with interactive task management features. Built to strengthen understanding of React and front-end logic.",
    technologies: ["HTML", "CSS", "React", "Express.js", "Node.js"],
    github: "https://github.com/karthikakl/To-Do-List",
  },
  {
    title: "CRED",
    image: cred,
    description:
      "A clone of the CRED app built using HTML and CSS for layout and design practice.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/karthikakl/Cred--Html-Css-",
  },
];

export const CONTACT = {
  address: "Kottayam, Kerala",
  phoneNo: "+91 9074983717",
  email: "karthika.kl.developer@gmail.com",
};
