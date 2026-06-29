import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

interface Tech {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  desc: string;
  tech: Tech[];
  category: string;
  year: number;
  isRecent: boolean;
  status: 'completed' | 'ongoing';
  screenshots: string[];
  githubUrl?: string;
  liveUrl?: string;
  driveUrl?: string;
}

// ─── Shared tech palette ──────────────────────────────────────────────────────
const T: Record<string, Tech> = {
  angular:     { name: 'Angular',      icon: 'logos:angular-icon'      },
  react:       { name: 'React',        icon: 'logos:react'             },
  ts:          { name: 'TypeScript',   icon: 'logos:typescript-icon'   },
  js:          { name: 'JavaScript',   icon: 'logos:javascript'        },
  node:        { name: 'Node.js',      icon: 'logos:nodejs-icon'       },
  next:        { name: 'Next.js',      icon: 'logos:nextjs-icon'       },
  vue:         { name: 'Vue.js',       icon: 'logos:vue'               },
  postgres:    { name: 'PostgreSQL',   icon: 'logos:postgresql'        },
  mongo:       { name: 'MongoDB',      icon: 'logos:mongodb-icon'      },
  redis:       { name: 'Redis',        icon: 'logos:redis'             },
  docker:      { name: 'Docker',       icon: 'logos:docker-icon'       },
  aws:         { name: 'AWS',          icon: 'logos:aws'               },
  d3:          { name: 'D3.js',        icon: 'logos:d3'                },
  prisma:      { name: 'Prisma',       icon: 'logos:prisma'            },
  tailwind:    { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon'  },
  stripe:      { name: 'Stripe',       icon: 'logos:stripe'            },
  figma:       { name: 'Figma',        icon: 'logos:figma'             },
  xd:          { name: 'Adobe XD',     icon: 'logos:adobe-xd'         },
  illustrator: { name: 'Illustrator',  icon: 'logos:adobe-illustrator' },
  storybook:   { name: 'Storybook',    icon: 'logos:storybook-icon'    },
  ngrx:        { name: 'NgRx',         icon: 'simple-icons:ngrx'       },
  express:     { name: 'Express.js',   icon: 'simple-icons:express'    },
};

@Component({
  selector: 'app-projects',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  activeFilter = signal('All');
  filters = ['All', 'Fullstack', 'Frontend', 'Web Design'];

  allProjects: Project[] = [
    // ─── Fullstack ───────────────────────────────────────────────────────────
    {
      title: 'YelpCamp',
      desc: 'Full-stack campground discovery and review platform with interactive maps — browse, review, and share camping locations with secure authentication and image uploads.',
      tech: [T['angular'], T['ngrx'], T['node'], T['mongo']],
      category: 'Fullstack',
      year: 2026,
      isRecent: true,
      status: 'completed',
      screenshots: ['screenshots/yelpcamp-home.jpg', 'screenshots/yelpcamp-campgrounds.jpg', 'screenshots/yelpcamp-detail.jpg'],
      githubUrl: 'https://github.com/Zeras12314/yelpcamp',
      liveUrl: 'https://yelpcamp-5u6m.onrender.com/',
    },
    {
      title: 'E-Commerce Platform',
      desc: 'Full-stack marketplace with Stripe payment processing, inventory management, seller dashboard, and order fulfilment.',
      tech: [T['react'], T['node'], T['mongo'], T['stripe']],
      category: 'Fullstack',
      year: 2023,
      isRecent: true,
      status: 'completed',
      screenshots: ['screenshots/screen-auth.svg', 'screenshots/screen-dash.svg'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Dev Portfolio CMS',
      desc: 'Headless CMS with drag-and-drop page builder, media CDN, and one-click Vercel deployment for developer portfolios.',
      tech: [T['next'], T['prisma'], T['aws'], T['postgres']],
      category: 'Fullstack',
      year: 2022,
      isRecent: false,
      status: 'completed',
      screenshots: ['screenshots/screen-signup.svg', 'screenshots/screen-dash.svg'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'REST API Gateway',
      desc: 'Microservices API gateway with rate limiting, OAuth2, JWT auth, Redis caching, and auto-generated Swagger docs.',
      tech: [T['node'], T['ts'], T['redis'], T['docker']],
      category: 'Fullstack',
      year: 2021,
      isRecent: false,
      status: 'completed',
      screenshots: ['screenshots/screen-api.svg'],
      githubUrl: '#',
    },
    // ─── Frontend ────────────────────────────────────────────────────────────
    {
      title: 'Task Manager App',
      desc: 'Drag-and-drop Kanban board with real-time collaboration, offline support, and keyboard-accessible UI.',
      tech: [T['react'], T['ts'], T['tailwind']],
      category: 'Frontend',
      year: 2024,
      isRecent: true,
      status: 'ongoing',
      screenshots: ['screenshots/screen-dash.svg', 'screenshots/screen-signup.svg'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'UI Component Library',
      desc: 'Accessible, themeable component library with 40+ components, dark mode, Storybook documentation, and npm publish.',
      tech: [T['vue'], T['ts'], T['storybook']],
      category: 'Frontend',
      year: 2023,
      isRecent: true,
      status: 'completed',
      screenshots: ['screenshots/screen-design.svg', 'screenshots/screen-dash.svg'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Angular Admin Panel',
      desc: 'Feature-rich admin dashboard with data tables, charts, form builders, and a white-label theming engine.',
      tech: [T['angular'], T['ts'], T['node']],
      category: 'Frontend',
      year: 2022,
      isRecent: false,
      status: 'completed',
      screenshots: ['screenshots/screen-dash.svg', 'screenshots/screen-auth.svg'],
      githubUrl: '#',
      liveUrl: '#',
    },
    // ─── Web Design ──────────────────────────────────────────────────────────
    {
      title: 'Brand Identity — TechCo',
      desc: 'Complete brand identity system: logo suite, color tokens, typography scale, icon set, and brand usage guidelines.',
      tech: [T['figma'], T['illustrator']],
      category: 'Web Design',
      year: 2024,
      isRecent: true,
      status: 'completed',
      screenshots: ['screenshots/screen-design.svg'],
      driveUrl: '#',
    },
    {
      title: 'E-Commerce Redesign',
      desc: 'End-to-end UX/UI redesign of an existing e-commerce platform — user research, wireframes, and high-fidelity prototypes.',
      tech: [T['figma'], T['xd']],
      category: 'Web Design',
      year: 2023,
      isRecent: true,
      status: 'completed',
      screenshots: ['screenshots/screen-design.svg', 'screenshots/screen-auth.svg'],
      driveUrl: '#',
    },
    {
      title: 'SaaS Landing Page',
      desc: 'Conversion-focused landing page design with micro-interaction specs, responsive breakpoints, and developer handoff.',
      tech: [T['figma']],
      category: 'Web Design',
      year: 2022,
      isRecent: false,
      status: 'completed',
      screenshots: ['screenshots/screen-design.svg', 'screenshots/screen-signup.svg'],
      driveUrl: '#',
    },
  ];

  get filtered(): Project[] {
    const f = this.activeFilter();
    return f === 'All' ? this.allProjects : this.allProjects.filter(p => p.category === f);
  }

  setFilter(f: string) { this.activeFilter.set(f); }
}
