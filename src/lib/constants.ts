import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/sahaib',
  linkedin: 'https://www.linkedin.com/in/sahaibsingh/',
  mail: 'mailto:hello@sahaibsingh.com',
  instagram: 'https://www.instagram.com/igsahaib/',
  medium: 'https://medium.com/@sahaibsingh001.ss/',
  discord: 'https://discordapp.com/users/756914232347328553',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Sahaib Singh',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Services
export const SERVICES = [
  {
    title: 'Website Designing & Development',
    description: 'Comprehensive website solutions powered by AI: Custom development, E-commerce, CMS, SEO optimization',
    icon: '🌐'
  },
  {
    title: 'Product Designing UX/UI',
    description: 'User-centered design services for digital products with focus on usability and experience',
    icon: '📱'
  },
  {
    title: 'Graphic Designing',
    description: 'Creative and professional graphic design solutions for your brand identity',
    icon: '🎨'
  },
  {
    title: 'Consultation',
    description: 'Expert consultation services designed specifically for small businesses',
    icon: '💡'
  },
  {
    title: 'Product/Project Management',
    description: 'Professional web application development and project management services',
    icon: '📊'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and hybrid mobile app development for cross-platform',
    icon: '📱'
  }
]

// WhatsApp
export const WHATSAPP_NUMBER = '+917021875228'
export const WHATSAPP_MESSAGE = 'Hi, I\'m interested in your services, When can we connect?'



// Study Page
export const STUDIES = [
  {
    title: 'Product and Technical Support',
    institution: 'Freightify',
    link: 'https://freightify.com/',
    date: '2021-Current',
  },
  {
    title: 'Bachelor of Computer Science',
    institution: 'University of Mumbai',
    link: 'https://mum.digitaluniversity.ac/',
    date: '2017 - 2024',
  },
  {
    title: 'Startup School',
    institution: 'CIBA Mumbai',
    link: 'https://cibamumbai.org.in/',
    date: '2017-2021',
  },
  {
    title: 'Entrepreneurship',
    institution: 'Commutec',
    link: 'https://commutec.in/',
    date: '2016-2021',
  }
]

export const EXPERIENCE = [
  {
    company: 'Freightify Solutions India PVT. LTD.',
    location: 'Chennai, India',
    position: 'Product Management',
    start: 'Nov 2021',
    link: 'https://freightify.com/',
    end: 'Present',
    tasks: [
      'Spearheaded product strategy for Freightify\'s SaaS platform, focusing on rate procurement, quotation automation, and track-and-trace solutions',
      'Led development of internal tools, automating crisis workflows within rate management system',
      'Built Mixpanel/SQL-driven dashboards to track KPIs across digital storefront and analytics tools',
      'Designed AWS-powered reporting tools using Google Looker Studio',
      'Collaborated with engineering and design to prototype numerous features',
      'Streamlined Agile processes, cutting feature delivery time by 25%',
      'Achieved 98% client satisfaction and 30% reduction in quotation response times',
    ],
  },
  {
    company: 'Commutec',
    location: 'Mumbai, India',
    position: 'Product Development Lead',
    link: 'https://commutec.in/',
    start: 'Sep 2016',
    end: 'Sep 2021',
    tasks: [
      'Led Next Gen Smart Mobility product development initiatives',
      'Managed product lifecycle and development team',
      'Designed and implemented user flows for multiple web and mobile apps',
      'Coordinated with stakeholders to align product vision with business goals',
      'Oversaw technical implementation and quality assurance',
      'Improved operational efficiency through process optimization',
    ],
  },
  {
    company: 'Crayons Communications',
    link: 'https://thecrayonsnetwork.com',
    location: 'Mumbai, India',
    position: 'Graphic Designer',
    start: '2021',
    end: '2021',
    tasks: [
      'Designing the brand identity and logo',
      'Designing the website and other social media content',
      'Creating marketing materials',
      'Creating and managing social media accounts',
      'Creating and managing email newsletters',
      'Creating and managing Instagram ads',
    ],
  },
  {
    company: 'Ingenium Marine - Internship',
    location: 'Mumbai, India',
    position: 'Product Engineer',
    start: '2021',
    link: 'https://www.navtor.com/',
    end: '2021',
    tasks: [
      'Support in the QA area and bug review',
      'Use of SCRUM methodology',
      'Structured the QA process and created test cases',
      'Managing new projects and their documentation',
    ],
  }
]
