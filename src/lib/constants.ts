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
  kofi: 'https://ko-fi.com/sahaib',
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
    company: 'NAVTOR India Pvt. Ltd.',
    location: 'Mumbai, India',
    position: 'Process & Efficiency Lead',
    link: 'https://www.navtor.com/',
    start: 'Sept 2025',
    end: 'Present',
    tasks: [
      'Delivered major improvements within the first three months across product, support, and automation, boosting customer experience and internal operational efficiency for global maritime clients',
      'Created NAVTOR’s first AI-based support assistant using MS Copilot Studio to automate ticket analysis, root cause detection, and context gathering by integrating internal APIs and documentation sources',
      'Introduced structured workflows and technical articulation standards, improving alignment and handovers between support, product, and engineering teams for the Digital Logbooks product',
      'Mapped critical product gaps and recurring customer issues by analyzing logs, system behavior, and user workflows, establishing a stronger and faster feedback loop between customer-facing teams and engineering',
      'Built internal utilities and process enhancers that simplified troubleshooting, reduced dependency on senior engineers, and improved consistency of L2 and L3 responses for vessel-related queries',
      'Acted as a bridge between product and support, translating complex technical issues into actionable insights that accelerated product decisions and streamlined cross-functional coordination',
      'Designed and managed the complete information architecture, navigation structure, and workflow templates for the Digital Logbook SharePoint site, enabling scalable knowledge management and faster technical onboarding',
    ],
  },
  {
    company: 'Freightify Solutions India PVT. LTD.',
    location: 'Chennai, India',
    position: 'Product Management',
    start: 'Nov 2021',
    link: 'https://freightify.com/',
    end: 'Aug 2025',
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
