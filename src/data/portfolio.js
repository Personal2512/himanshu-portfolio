export const skills = [
  { group: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { group: 'UI & Interaction', items: ['Responsive Design', 'Framer Motion', 'Component-Based UI', 'Cross-Device Layouts'] },
  { group: 'Development', items: ['REST API Integration', 'Node.js', 'Git', 'GitHub', 'Vite', 'Debugging'] },
]

const shot = (url) => `https://image.thum.io/get/width/1400/crop/850/noanimate/${url}`

export const projects = [
  {
    title: 'Hexa School ERP',
    url: 'https://hexaschoolerp.com/',
    image: "/assets/projects/hexa-school-erp.webp",
    category: 'EdTech / ERP',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
    summary: 'AI-powered school management platform covering academic and administrative workflows.',
    points: ['Student information, attendance, fees, exams/results, admissions and notices', 'Reusable UI patterns for admin, teacher, parent and student workflows', 'Responsive, maintainable interfaces for data-heavy ERP screens']
  },
  {
    title: 'Vynk Dating',
    url: 'https://vynkdating.com/',
    image: "/assets/projects/vynk-dating.webp",
    category: 'Dating / Social Discovery',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'API Integration'],
    summary: 'Dating and social-discovery experience centered on verified profiles, meaningful matching, communication and user safety.',
    points: ['Discovery, profile, subscription, download, safety and account flows', 'Motion-driven interactions optimized for desktop and mobile', 'Frontend flows supporting matching, conversations and verification UX']
  },
  {
    title: 'Hexawarre Software',
    url: 'https://hexawarresoftware.com/',
    image: "/assets/projects/hexawarre-software.webp",
    category: 'Corporate / Software Services',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
    summary: 'Corporate technology website presenting web, mobile, custom software and digital solution capabilities.',
    points: ['Modern service-led sections and conversion-focused CTAs', 'Reusable content components and responsive layouts', 'Polished motion patterns with scalable frontend structure']
  },
  {
    title: 'Astro Ambuj',
    url: 'https://astroambuj.com/',
    image: "/assets/projects/astro-ambuj.webp",
    category: 'Astrology / Consultation',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'API Integration'],
    summary: 'Astrology and spiritual-guidance platform with Kundli, Panchang, consultation and service experiences.',
    points: ['Kundli, numerology, Vastu, online puja and consultation interfaces', 'Interactive forms and dynamic information experiences', 'Responsive UX for service discovery and guidance journeys']
  },
  {
    title: 'Acharya Bhairav',
    url: 'https://acharyabhairav.com/',
    image: "/assets/projects/acharya-bhairav.webp",
    category: 'Vedic Astrology',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'API Integration'],
    summary: 'Vedic astrology platform featuring guidance, horoscope content and consultation-oriented user journeys.',
    points: ['Responsive astrology content and service pages', 'Authentication and interactive frontend flows', 'Mobile-first visual consistency across user journeys']
  },
  {
    title: 'JPNS Balika Vidyalaya',
    url: 'https://www.jpnsvlk.in/',
    image: "/assets/projects/jpnsbv.webp",
    category: 'Education / School',
    tech: ['Next.js', 'TypeScript', 'React.js', 'JavaScript', 'Tailwind CSS'],
    summary: 'Responsive school website supporting admissions, academics, announcements, events, resources and student information.',
    points: ['Accessible interfaces for notices, academics, events and admissions', 'Student resources and transfer-certificate search', 'Responsive information architecture across devices']
  }
]

export const certificates = [
  { title: 'The Complete 2022 Web Development Bootcamp', issuer: 'Udemy · Dr. Angela Yu', date: 'Sep 14, 2022', image: '/assets/certificates/udemy-web-development.jpg' },
  { title: 'C Programming — Lesson Plan', issuer: 'CodeTantra', date: 'Jun 14, 2020', image: '/assets/certificates/c-programming.jpg' },
  { title: 'Codewars 2K19', issuer: 'Coding Ninjas / LPU Tech Army', date: 'Nov 11, 2019', image: '/assets/certificates/codewars-2019.jpg' },
  { title: 'Web Development Internship', issuer: 'SkillVertex · Artifintel', date: 'Nov–Dec 2022', image: '/assets/certificates/web-development-internship.jpg' },
  { title: 'Data Analytics Using Power BI Workshop', issuer: 'TechTip24', date: 'Jul 14, 2024', image: '/assets/certificates/power-bi-workshop.png' }
]
