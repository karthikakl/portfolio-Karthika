import Kicks from "../assets/projects/Kicks&co.png"
import user from "../assets/projects/userManagement.png"
import olxClone from "../assets/projects/olxClone.png"
import netflixClone from "../assets/projects/NetflixClone.png"
import TodoList from "../assets/projects/TodoList.png"
import socialMedia from "../assets/projects/socialMedia.png"
import cred from "../assets/projects/credHtml.png"

export const DISCRIPTION_CONTENT = `I am a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js).
Skilled in both frontend and backend development with a
strong ability to collaborate in cross-functional teams. A dedicated professional with a growth mindset, eager to apply
technical expertise and problem-solving skills to dynamic and challenging projects.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = {
    degree:"B.Tech",
    department:'Electronics and Communication Engineering',
    institution:'Government Engineering College,Thrissur',
    year:'2018-2022'
}

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: Kicks,
    description:
      "Developed a comprehensive e-commerce application using the MERN stack's backend technologies and HTML/CSS for the frontend. This application allows users to browse, select, and purchase shoes online, providing a seamless shopping experience.",
    technologies: ["HTML", "CSS","Express.js", "Node.js", "MongoDB","EJS","Nodemailer","Razorpay"],
    github:'https://github.com/karthikakl/Kicks-Co'
  },
  {
    title: "User Management App",
    image: user,
    description:
      "This User Management System was built to deepen understanding of Redux for efficient state management in a full-stack application.",
    technologies: ["React", "Redux", "Mongodb", "Node.js","Express.js","JWT"],
    github:'https://github.com/karthikakl/User-Management'
  },
  {
    title: "Olx-clone",
    image: olxClone,
    description:
      "This project is a clone of the OLX platform, built to provide similar functionality for users to list and browse items for sale. It features user authentication to ensure secure access and allows users to create and view listings in a familiar OLX-like interface.",
    technologies: ["React","User Authentication","Firebase",'Express.js','Node.js'],
    github:'https://github.com/karthikakl/Olx-clone/tree/master'
  },
  {
    title: "Netflix-clone",
    image: netflixClone,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React", "Express.js", "Node.js", "Express", "API"],
    github:'https://github.com/karthikakl/Netflix-clone'
  },
  {
    title: "PhotoGram",
    image: socialMedia,
    description:
      "The app uses a JWT-based authentication system for secure login and registration. It incorporates GraphQL for efficient data fetching and manipulation, enabling seamless interaction between the client and server.",
    technologies: ["React", "Typecsript", "JWT", "Express", "Firebase","Node.js","Graphql","Tailwind"],
    github:'https://github.com/karthikakl/photoGram'
  },
  {
    title: "To-Do App",
    image: TodoList,
    description:
      "Built a To-Do List application with interactive features for managing tasks. This project aimed at gaining practical understanding of React and enhancing skills in front-end development.",
    technologies: ["HTML", "CSS", "React", "Express.js", "Node.js"],
    github:'https://github.com/karthikakl/To-Do-List'
  },
  {
    title: "CRED",
    image: cred,
    description:
      "Built a CRED app clone using HTML and CSS",
    technologies: ["HTML", "CSS"],
    github:'https://github.com/karthikakl/Cred--Html-Css-'
  },
];

export const CONTACT = {
  address: "Kottayam, Kerala",
  phoneNo: "+91 9074983717 ",
  email: "karthika.kl.developer@gmail.com",
};