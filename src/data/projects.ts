export type ProjectColor = 'yellow' | 'red' | 'blue' | 'black' | 'magenta'

export interface Project {
  /** Stable identifier, also used as the React key. */
  id: string
  /** Short mono eyebrow, e.g. "PWA / FULLSTACK". */
  category: string
  /** Bold uppercase project title. */
  title: string
  /** One accurate line describing what the project is. */
  description: string
  /** Main technologies used. */
  stack: string[]
  /** Public repository. */
  repoUrl: string
  /** Optional deployed instance. */
  liveUrl?: string
  /** Flat saturated fill used for the card. */
  color: ProjectColor
}

export const projects: Project[] = [
  {
    id: 'gym-tracker',
    category: 'PWA / Fullstack',
    title: 'Gym Tracker',
    description:
      'Mobile-first workout tracker PWA — offline-capable, with per-user routines and exercise library, progress charts, heatmap and leaderboard, backed by Supabase Postgres with row-level security and custom token auth.',
    stack: ['React 19', 'Vite', 'TypeScript', 'Supabase', 'Postgres', 'Recharts', 'lucide-react'],
    repoUrl: 'https://github.com/veryrareuser/gym-tracker',
    liveUrl: 'https://veryrareuser.github.io/gym-tracker/',
    color: 'yellow',
  },
  {
    id: 'motocare',
    category: 'Laravel / SaaS',
    title: 'MotoCare',
    description:
      'Motorcycle workshop management system — six roles, service orders, booking and queue management, sparepart inventory, maintenance reminders, in-app notifications and invoicing with INV-YYYYMMDD-NNN numbering.',
    stack: ['PHP 8.4', 'Laravel', 'MySQL', 'Blade', 'Tailwind CSS', 'Alpine.js', 'PHPUnit'],
    repoUrl: 'https://github.com/veryrareuser/MotoCare',
    color: 'red',
  },
  {
    id: 'nice-eat',
    category: 'C# / WPF',
    title: 'NICE.EAT',
    description:
      'Object-oriented course showcase — restaurant ordering system with a WPF desktop client, Strategy pattern for recommendations and filters, repository layer over SQLite and a polymorphic Food/Drink menu model.',
    stack: ['C#', '.NET', 'WPF', 'XAML', 'SQLite'],
    repoUrl: 'https://github.com/veryrareuser/nicegang',
    color: 'black',
  },
  {
    id: 'student-task-organizer',
    category: 'C# / Console',
    title: 'Student Task Organizer',
    description:
      'Console app for students to add tasks with deadlines, list them, mark them done and delete them — persisting to a local tasks.txt file across sessions.',
    stack: ['C#', '.NET 9'],
    repoUrl: 'https://github.com/veryrareuser/task-organizer',
    color: 'blue',
  },
  {
    id: 'dtw-uts-website',
    category: 'Frontend / Static',
    title: 'DTW UTS Website',
    description:
      'Static front-end website built for DTW UTS — hand-written HTML, CSS and JavaScript with no framework overhead.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/veryrareuser/glowing-fiesta',
    color: 'magenta',
  },
  {
    id: 'magang-portfolio',
    category: 'HTML / CSS',
    title: 'Magang Portfolio',
    description:
      'Static portfolio site with photo galleries and an automated GitHub Pages deploy workflow wired straight from the repository.',
    stack: ['HTML', 'CSS', 'GitHub Actions'],
    repoUrl: 'https://github.com/veryrareuser/magang',
    color: 'yellow',
  },
  {
    id: 'carlos-website',
    category: 'HTML / CSS / JS',
    title: 'Carlos Website',
    description:
      'Personal website with a custom stylesheet and vanilla JavaScript interactions — no build step, no framework.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/veryrareuser/carlos',
    color: 'red',
  },
]
