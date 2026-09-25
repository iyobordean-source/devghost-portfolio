export const identity = {
  name: 'Dean Iyobor',
  title: 'Software Developer & AI Systems Builder',
  positioning: 'I build software systems that solve real business problems.',
  about:
    'I am a self-taught developer and AI systems builder from Nigeria. I learn by building across full-stack development, AI integrations, automation, and business systems, turning real problems and ideas into usable software.',
}

export const sectionOrder = [
  'hero',
  'what-i-build',
  'major-projects',
  'skills',
  'how-i-build',
  'about-dean',
  'small-projects',
  'contact',
  'footer',
]

export const majorProjects = [
  {
    id: 'freakiidesigns',
    number: '01',
    name: 'FreakiiDesigns',
    type: 'Client project · Creative branding studio',
    summary:
      'A client project for a creative branding and design studio, bringing brand identity, social media, events, print, and creative presentation into one coherent studio presence.',
    highlights: ['Dexter AI', 'Sales Lux', 'Social media design', 'Events', 'Print', 'Brand identity'],
    technologies: [],
    preview: '/projects/freakii-designs.png',
    github: 'https://github.com/iyobordean-source/freakiidesigns',
    demo: 'https://freakiidesigns.vercel.app/',
  },
  {
    id: 'blaq-plate',
    number: '02',
    name: 'BLAQ PLATE',
    type: 'Restaurant ordering system',
    summary:
      'Restaurants often manage orders through separate WhatsApp messages and calls. BLAQ PLATE is an ordering system built to make that process more structured and easier to manage.',
    technologies: [],
    preview: '/projects/blaq-plate.png',
    github: 'https://github.com/iyobordean-source/blaqplate-web',
    demo: 'https://blaqplate-web.vercel.app/',
  },
  {
    id: 'studia',
    number: '03',
    name: 'Studia',
    type: 'AI-Assisted Learning Platform',
    status: 'In Development / Coming Soon',
    summary:
      'An AI-powered university testing and course-intelligence platform that uses course materials to create grounded assessments, analyze student performance, identify weak areas, and generate targeted practice.',
    flow: [
      'Course material',
      'Course Brain',
      'AI assessment',
      'Responses / grading',
      'Course Intelligence',
      'Weak areas',
      'Targeted practice',
      'Reassessment',
    ],
    technologies: ['React', 'Supabase', 'Tailwind CSS', 'TypeScript', 'AI'],
    preview: '/projects/studia.png',
    github: 'https://github.com/iyobordean-source/studia',
    demo: 'https://studia-xi.vercel.app/',
  },
  {
    id: 'ai-receptionist',
    number: '04',
    name: 'AI Receptionist',
    type: 'AI business system',
    summary:
      'An AI-powered business receptionist designed to handle enquiries through receptionist-style interactions, reduce repetitive manual responses, and connect AI with business workflows.',
    flow: ['Business enquiries', 'AI Receptionist', 'Operational workflows'],
    technologies: ['React', 'Supabase', 'AI'],
    preview: '/projects/ai-receptionist.png',
    github: 'https://github.com/iyobordean-source/ai-voice-receptionist',
    demo: 'https://ai-voice-receptionist-mocha.vercel.app/',
  },
  {
    id: 'bright-future-tutorials',
    number: '05',
    name: 'Bright Future Tutorials',
    type: 'School registration / management system',
    summary: 'A school-focused registration and management system for handling student registration, student records, and administration.',
    technologies: ['React', 'Firebase'],
    preview: '/projects/bright-future.png',
    github: 'https://github.com/iyobordean-source/-Bright-Future-Tutorials',
    demo: 'https://bright-future-tutorials.vercel.app/',
  },
]

export const smallProjects = [
  {
    id: 'elegance',
    name: 'Elegance',
    type: 'Frontend project',
    summary:
      'A polished frontend project focused on building a refined digital experience with responsive UI and visual presentation.',
    github: 'https://github.com/iyobordean-source/Elegance',
    demo: 'https://elegance-psi.vercel.app/',
  },
  {
    id: 'intelops',
    name: 'IntelOps',
    type: 'Stats tracker',
    summary:
      'A frontend stats tracker focused on presenting game/team statistics through a clean interactive interface.',
    github: 'https://github.com/iyobordean-source/intelops',
    demo: 'https://intelops-three.vercel.app/',
  },
]

export const skillGroups = [
  {
    name: 'Frontend',
    number: '01',
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'React Router', 'Responsive UI'],
  },
  {
    name: 'Backend & Data',
    number: '02',
    skills: ['Node.js', 'Supabase', 'Firebase', 'PostgreSQL', 'REST APIs', 'Authentication', 'Database Design'],
  },
  {
    name: 'AI & Automation',
    number: '03',
    skills: ['AI Integrations', 'LLM APIs', 'RAG', 'AI Agents', 'n8n', 'Workflow Automation'],
  },
  {
    name: 'Engineering',
    number: '04',
    skills: ['Git', 'GitHub', 'Vercel', 'Full-stack Development', 'API Integrations', 'System Architecture', 'Business Systems'],
  },
]

export const socialLinks = {
  github: 'https://github.com/iyobordean-source',
  linkedin: 'https://www.linkedin.com/in/dean-iyobor-088a03382',
  email: 'mailto:iyobordean@gmail.com',
  emailDisplay: 'iyobordean@gmail.com',
  whatsapp: 'https://wa.me/2347043400958',
  whatsappDisplay: '0704 340 0958',
  twitter: 'https://x.com/codewith_dean',
  instagram: 'https://www.instagram.com/code.withdean',
  tiktok: 'https://vm.tiktok.com/ZS9hBSB7jkx4k-OQZIt/',
}

export const socialProfiles = [
  { label: 'GitHub', href: socialLinks.github },
  { label: 'LinkedIn', href: socialLinks.linkedin },
  { label: 'X / Twitter', href: socialLinks.twitter },
  { label: 'Instagram', href: socialLinks.instagram },
  { label: 'TikTok', href: socialLinks.tiktok },
]
