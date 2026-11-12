export interface NavLink {
  label: string
  href: string
}

export interface Service {
  /** Two-digit index shown as the big number, e.g. "01". */
  number: string
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export const site = {
  name: 'Carlos.',
  title: 'Carlos — Portfolio',
  tagline: 'I build software that works.',
  email: 'carlo@veryrareuser.dev',
  location: 'Tangerang, Indonesia',
  githubUrl: 'https://github.com/veryrareuser',
  githubHandle: 'veryrareuser',
  liveUrl: 'https://veryrareuser.github.io/portfolio/',
} as const

export const navLinks: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const heroTags: string[] = [
  'C#',
  '.NET',
  'React',
  'TypeScript',
  'Tailwind',
  'SQL',
  'Laravel',
]

export const services: Service[] = [
  {
    number: '01',
    title: 'Backend & Data',
    description:
      'APIs, relational schemas and business logic in C#, .NET, Laravel, MySQL and Postgres.',
  },
  {
    number: '02',
    title: 'Frontend Interfaces',
    description:
      'Typed React and TypeScript interfaces that stay fast, accessible and usable on any screen.',
  },
  {
    number: '03',
    title: 'Desktop Apps',
    description:
      'Native WPF and console tools for the workflows that deserve a real application.',
  },
]

export const stats: Stat[] = [
  { value: '09', label: 'Repos' },
  { value: '06+', label: 'Languages' },
  { value: '10+', label: 'Projects' },
  { value: '2026', label: 'Grad' },
]

export const stack: string[] = [
  'C#',
  '.NET',
  'ASP.NET Core',
  'WPF',
  'PHP',
  'Laravel',
  'MySQL',
  'Postgres',
  'SQLite',
  'TypeScript',
  'JavaScript',
  'React',
  'Vite',
  'Tailwind CSS',
  'Supabase',
  'HTML',
  'CSS',
  'Git',
  'GitHub Actions',
]

export const aboutBio: string[] = [
  'I am Carlos, an Information Systems undergraduate (S1 Sistem Informasi, Universitas Pelita Harapan) based in Tangerang, Indonesia. I work in Bahasa Indonesia and English.',
  'My work sits where backend logic meets the interface: I design databases and APIs, then build the screens that use them. I care about code that stays readable, data that stays correct, and interfaces that load fast.',
]
