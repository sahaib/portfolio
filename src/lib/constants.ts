import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/sahaib',
  linkedin: 'https://www.linkedin.com/in/sahaib/',
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
  AUTHOR: 'Mark Horn',
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

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'University of Mumbai',
    link: 'https://mum.digitaluniversity.ac/',
    date: '2017 - 2021',
  },
  {
    title: 'Startup School',
    institution: 'CIBA Mumbai',
    link: 'https://cibamumbai.org.in/',
    date: '2023',
  }
]

export const EXPERIENCE = [
  {
    company: 'Freightify',
    location: 'Chennai, India',
    position: 'Technical Solutions Engineer',
    start: '2021',
    link: 'https://freightify.com/',
    end: 'Current',
    tasks: [
      'Create inhouse solutions for various teams',
      'Create and manage databases',
      'Create and manage AI support projects',
      'Assist support team with technical queries',
      'Create reports and dashboards for the management',
      'Optimizing queries and improving database performance',
    ],
  },
  {
    company: 'Commutec',
    location: 'Mumbai, India',
    position: 'Product Engineer',
    link: 'https://commutec.in/',
    start: '2016',
    end: '2021',
    tasks: [
      'Interaction with clients, end-users and the tech team.',
      'Designing user hierarchy & user personas.',
      'Designing platform workflow for, 2 web apps and 3 mobile apps.',
      'Testing and debugging',
      'Implementing new features and finding bugs',
      'Creating user flows and wireframes',
      'Creating user guides and documentationß',
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
  },
  // {
  //   company: 'S I G',
  //   location: 'Mumbai, India',
  //   position: 'Software developer',
  //   start: '2021',
  //   end: '2021',
  //   tasks: [
  //     'Development of a dashboard with react admin and chartjs for managing and entering information',
  //   ],
  // },
  // {
  //   company: 'BOOKII',
  //   location: 'Bogotá D C, Colombia',
  //   position: 'Software developer',
  //   start: '2019',
  //   end: '2021',
  //   tasks: [
  //     'Productive collaborationwiththebackendteamforthecreationofthe conversationalclubs',
  //     'Effective coding of conversational clubs following design guide lines and using the Redux statemanager',
  //     'Creation of the Bookii page in Spanish and change of texts in cms',
  //     'Generation of static posts using Gatsby and the Contentful cms for the Bookii blog',
  //   ],
  // },
]
