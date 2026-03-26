// ─── Portfolio Data ──────────────────────────────────────────────
// Update this file to customize all your portfolio content

export const personalInfo = {
  name: "Newsun Neupane",
  title: "BCA Student & Frontend Developer",
  tagline: "I craft clean, fast & delightful web experiences.",
  email: "Newsunneupane@gmail.com",
  location: "Nepal 🇳🇵",
  github: "https://github.com/newsunneupane",
  linkedin: "https://www.linkedin.com/in/newsun-neupane-42b0872aa/",
  twitter: "",          // Optional — leave empty to hide
  resumeLink: "#",      // Replace with your actual resume URL
};

export const skills = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "HTML5 & CSS3", category: "frontend" },
  { name: "Responsive Design", category: "frontend" },
  // Backend
  { name: "PHP", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "REST APIs", category: "backend" },
  // Tools
  { name: "Git & GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Vite", category: "tools" },
  { name: "Python (ML)", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "Figma", category: "tools" },
];

export const projects = [
  {
    id: 1,
    title: "Blood Donation System",
    description:
      "A full-stack donor registration and management platform. Features donor search by blood group and location, appointment scheduling, admin dashboard, and real-time blood inventory tracking.",
    tech: ["React", "PHP", "MySQL", "Tailwind CSS"],
    category: "Full Stack",
    github: "https://github.com/newsunneupane",
    live: null, // Replace with live URL if available
    featured: true,
    // Emoji used as visual placeholder — swap with an actual screenshot path if you have one
    icon: "🩸",
    color: "from-rose-500/20 to-pink-600/10",
    accentColor: "#f43f5e",
  },
  {
    id: 2,
    title: "Landing Page (React)",
    description:
      "A high-performance marketing landing page built with React and Tailwind CSS. Includes animated hero, feature sections, testimonials, pricing table, and fully responsive mobile-first design.",
    tech: ["React", "Tailwind CSS", "Vite", "CSS Animations"],
    category: "Frontend",
    github: "https://github.com/newsunneupane",
    live: null,
    featured: true,
    icon: "🚀",
    color: "from-sky-500/20 to-blue-600/10",
    accentColor: "#38bdf8",
  },
  {
    id: 3,
    title: "Phishing URL Detector",
    description:
      "A Chrome browser extension powered by a machine-learning model that classifies URLs in real time as phishing or safe. Built with Python (scikit-learn) and integrated via a lightweight REST API.",
    tech: ["Python", "scikit-learn", "Chrome Extension", "REST API", "JavaScript"],
    category: "ML / Security",
    github: "https://github.com/newsunneupane",
    live: null,
    featured: true,
    icon: "🔒",
    color: "from-violet-500/20 to-purple-700/10",
    accentColor: "#818cf8",
  },
];

export const experience = [
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Tribhuvan University",
    period: "2022 — Present",
    description:
      "Studying core computer science subjects including Data Structures, Database Management, Operating Systems, and Web Technologies. Maintaining strong academic performance while building real-world projects.",
    icon: "🎓",
  },
  {
    type: "project",
    title: "Open Source Contributor",
    organization: "GitHub",
    period: "2023 — Present",
    description:
      "Actively contributing to open-source projects and maintaining personal repositories. Collaborating with developers globally and practising version control best practices.",
    icon: "💻",
  },
  {
    type: "education",
    title: "+2 Science (NEB Board)",
    organization: "Higher Secondary School",
    period: "2020 — 2022",
    description:
      "Completed higher secondary education with a focus on science and mathematics, building a strong analytical foundation for computer science studies.",
    icon: "📚",
  },
];
