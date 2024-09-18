import mobile from "../assets/mobile.png";
import web from "../assets/web.png";
import full from "../assets/full.png";
import jnv from "../assets/jnv.png";
import bjb from "../assets/bjb.jpeg";
import nitc from "../assets/nitc.png";
import ehawkers from "../assets/ehawker.png";
import android from "../assets/android.png";
import bootstrap from "../assets/bootstrap.png";
import firebase from "../assets/firebase.png";
import git from "../assets/git.png";
import htmlcss from "../assets/htmlcss.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import kotlin from "../assets/kotlin.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import reactjs from "../assets/reactjs.png";
import dormease from "../assets/dormease.png";
import mess from "../assets/mess.png";
import supermarket from "../assets/supermarket.png";
import votifyu from "../assets/votifyu.png";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile Development",
    icon: mobile,
  },
  {
    title: "Full-Stack Development",
    icon: full,
  },
];

const educations = [
  {
    name: "Jawahar Navodaya Vidyalaya (JNV)",
    place: "Konark, Puri, Odisha",
    courseName: "Matriculation (10th)",
    timeline: "July 2014 - March 2015",
    icon: jnv,
    iconBg: "#8aaee0",
    grade: "8.2",
    description:
      "Completed my matriculation from Jawahar Navodaya Vidyalaya (JNV), a premier educational institution known for its focus on academic excellence and holistic development. The rigorous curriculum and vibrant learning environment at JNV shaped my foundational skills and instilled a strong work ethic.",
    skills: ["HTML", "CSS"],
  },
  {
    name: "Jawahar Navodaya Vidyalaya (JNV)",
    place: "Konark, Puri, Odisha",
    courseName: "Intermediate (12th)",
    timeline: "July 2015 - March 2017",
    icon: jnv,
    iconBg: "#b1c9ef",
    grade: "73.2%",
    description:
      "Graduated from Jawahar Navodaya Vidyalaya (JNV) with a focus on science. The challenging curriculum and supportive environment at JNV enriched my analytical skills and prepared me for higher education, fostering both academic and personal growth.",
    skills: ["C++", "Visual Basic"],
  },
  {
    name: "Buxi Jagabandhu Bidyadhar Autonomous College (BJB)",
    place: "Bhubaneswar, Odisha",
    courseName: "Bachelor of Science in Computer Science",
    timeline: "August 2017 - May 2020",
    icon: bjb,
    iconBg: "#8aaee0",
    grade: "7.68",
    description:
      "Completed a Bachelor's degree in Computer Science from BJB Autonomous College, where I gained a solid foundation in programming, algorithms, and software development. My time at BJB Autonomous College allowed me to develop critical thinking and problem-solving skills, which have been instrumental in my career in technology.",
    skills: ["C", "C++", "Java"],
  },
  {
    name: "National Inatitute of Technology Calicut (NITC)",
    place: "Calicut, Kerala",
    courseName: "Mater of Computer Application (MCA)",
    timeline: "October 2021 - June 2024",
    icon: nitc,
    iconBg: "#b1c9ef",
    grade: "8.45",
    description:
      "Earned a Master of Computer Applications (MCA) degree from the National Institute of Technology, Calicut. This program provided advanced knowledge in computer science and software engineering, enhancing my expertise in developing complex applications and deepening my understanding of emerging technologies.",
    skills: ["Java", "Kotlin", "JavaScript", "Android Development"],
  },
];

const experiences = [
  {
    title: "Software Devoloper Intern",
    company_name: "eHawkers Marketing",
    icon: ehawkers,
    date: "June 2024 - Present",
    points: [
      "Working as a full stack developer specializing in the MERN stack (MongoDB, Express, React.js, Node.js) to build and maintain web and mobile applications using React.js and React Native.",
      "Collaborating with cross-functional teams to deliver high-quality, responsive products with cross-browser compatibility.",
      "Actively participating in code reviews, offering constructive feedback to enhance code quality across the team, with a focus on both frontend and backend technologies including Node.js, Express.js, and MongoDB.",
    ],
  },
];

const skills = [
  {
    name: "HTML & CSS",
    icon: htmlcss,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: node,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Git & Github",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

const projects = [
  {
    name: "VotifyU",
    description:
      "VotifyU is a MERN stack-based college election platform with a React Native interface and Node.js backend. It allows candidates to register and share campaigns while students cast votes easily. Features include prompt results and a helpline, promoting transparency, engagement, and a democratic student community.",
    tags: [
      {
        name: "reactnative",
        color: "reactnative",
      },
      {
        name: "mongodb",
        color: "mongodb",
      },
      {
        name: "nodejs",
        color: "nodejs",
      },
      {
        name: "expressjs",
        color: "expressjs",
      },
    ],
    image: votifyu,
    source_code_link: "https://github.com/prasant7978/VotifyU",
  },
  {
    name: "DormEase",
    description:
      "Collaborated on a Hostel Management Android Application featuring user-friendly interfaces, enabling efficient student management and room allocation, room availability checks, dues tracking, and facilitated administrative communication via a notice board and streamlined complaint management.",
    tags: [
      {
        name: "android",
        color: "android",
      },
      {
        name: "kotlin",
        color: "kotlin",
      },
      {
        name: "nodejs",
        color: "nodejs",
      },
      {
        name: "mysql",
        color: "sql",
      },
    ],
    image: dormease,
    source_code_link: "https://github.com/prasant7978/NITC-Hostel-Manager",
  },
  {
    name: "Mess Management Application",
    description:
      "Developed NITC Mess Manager, an Android app for streamlined mess management at NITC campus. Enabled student enrollment in mess services via a user-friendly interface and provided contractors with real-time menu updates.",
    tags: [
      {
        name: "kotlin",
        color: "kotlin",
      },
      {
        name: "android",
        color: "android",
      },
      {
        name: "nodejs",
        color: "nodejs",
      },
      {
        name: "mongodb",
        color: "mongodb",
      },
    ],
    image: mess,
    source_code_link: "https://github.com/prasant7978/NITC-Mess-Manager-NodeJS",
  },
  {
    name: "Supermarket Management System",
    description:
      "Developed a comprehensive supermarket software solution for optimized sales activity and inventory control, ensuring accurate recording of transaction details. Implemented a robust system to generate precise invoices or receipts, enhancing customer experience.",
    tags: [
      {
        name: "java",
        color: "java",
      },
      {
        name: "mysql",
        color: "sql",
      },
      {
        name: "swing",
        color: "swing",
      },
    ],
    image: supermarket,
    source_code_link:
      "https://github.com/prasant7978/Supermarket-Management-System",
  },
];

export { navLinks, services, educations, experiences, skills, projects };
