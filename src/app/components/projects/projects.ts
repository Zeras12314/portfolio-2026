import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, HostListener } from '@angular/core';

interface Tech {
  name: string;
  icon: string;
  color?: string;
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
  photoshop:   { name: 'Photoshop',    icon: 'logos:adobe-photoshop'   },
  midjourney:  { name: 'Midjourney',   icon: 'lobe:midjourney',         color: '#d4d4d4' },
  openai:      { name: 'OpenAI',       icon: 'simple-icons:openai',     color: '#74aa9c' },
  gemini:      { name: 'Gemini',       icon: 'lobe:gemini',             color: '#8E75B2' },
  copilot:     { name: 'Copilot',      icon: 'lobe:copilot',            color: '#0078d4' },
  claude:      { name: 'Claude',       icon: 'lobe:claude',             color: '#d4a27f' },
  storybook:   { name: 'Storybook',    icon: 'logos:storybook-icon'    },
  ngrx:        { name: 'NgRx',         icon: 'simple-icons:ngrx',           color: '#ba2bd2' },
  express:     { name: 'Express.js',   icon: 'simple-icons:express',        color: '#ffffff' },
  spring:      { name: 'Spring Boot',  icon: 'logos:spring-icon'       },
  rxjs:        { name: 'RxJS',         icon: 'logos:reactivex'         },
  scss:        { name: 'SCSS',         icon: 'logos:sass'              },
  bootstrap:   { name: 'Bootstrap',    icon: 'logos:bootstrap'         },
  material:    { name: 'Material',     icon: 'simple-icons:materialdesign', color: '#3f51b5' },
  primeng:     { name: 'PrimeNG',      icon: 'simple-icons:primeng',        color: '#0ea5e9' },
  html:        { name: 'HTML',         icon: 'logos:html-5'            },
  css:         { name: 'CSS',          icon: 'logos:css-3'             },
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

  // ─── Lightbox ──────────────────────────────────────────────────────────
  lightboxOpen   = signal(false);
  lightboxImages = signal<string[]>([]);
  lightboxIndex  = signal(0);

  openLightbox(images: string[], index = 0) {
    this.lightboxImages.set(images);
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
  }

  closeLightbox() { this.lightboxOpen.set(false); }

  prevImage() {
    const len = this.lightboxImages().length;
    this.lightboxIndex.update(i => (i - 1 + len) % len);
  }

  nextImage() {
    this.lightboxIndex.update(i => (i + 1) % this.lightboxImages().length);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (!this.lightboxOpen()) return;
    if (e.key === 'Escape')     this.closeLightbox();
    if (e.key === 'ArrowLeft')  this.prevImage();
    if (e.key === 'ArrowRight') this.nextImage();
  }

  allProjects: Project[] = [
    // ─── Fullstack ───────────────────────────────────────────────────────────
    {
      title: 'YelpCamp',
      desc: 'Full-stack campground discovery and review platform with interactive maps — browse, review, and share camping locations with secure authentication and image uploads.',
      tech: [T['angular'], T['ngrx'], T['ts'], T['rxjs'], T['node'], T['mongo'], T['scss'], T['bootstrap']],
      category: 'Fullstack',
      year: 2026,
      isRecent: true,
      status: 'completed',
      screenshots: ['screenshots/yelpcamp-home.jpeg', 'screenshots/yelpcamp-detail.jpeg', 'screenshots/yelpcamp-login.jpeg'],
      githubUrl: 'https://github.com/Zeras12314/yelpcamp',
      liveUrl: 'https://yelpcamp-5u6m.onrender.com/',
    },
    {
      title: 'NavTask',
      desc: 'Full-stack task management app with priority and status tracking, subtask management, file attachments, and secure JWT + OAuth2 social login (Google & Facebook).',
      tech: [T['angular'], T['ngrx'], T['ts'], T['rxjs'], T['spring'], T['postgres'], T['docker'], T['scss'], T['material']],
      category: 'Fullstack',
      year: 2026,
      isRecent: true,
      status: 'completed',
      screenshots: ['screenshots/todoapp-login.jpeg', 'screenshots/todoapp-dashboard.jpeg', 'screenshots/todoapp-task-form.jpeg'],
      githubUrl: 'https://github.com/Zeras12314/todoApp',
      liveUrl: 'https://todoapp-client-i8uq.onrender.com',
    },
    {
      title: 'Hotel Management System',
      desc: 'Full-stack hotel management system for end-to-end operations — room browsing, reservation management, and multi-language support built with Angular 16, NgRx, and a Node.js/Express backend with MongoDB.',
      tech: [T['angular'], T['ngrx'], T['ts'], T['rxjs'], T['node'], T['express'], T['mongo'], T['bootstrap']],
      category: 'Fullstack',
      year: 2024,
      isRecent: false,
      status: 'ongoing',
      screenshots: ['screenshots/hotel-home.jpeg', 'screenshots/hotel-rooms.jpeg', 'screenshots/hotel-booking.jpeg'],
      githubUrl: 'https://github.com/Zeras12314/hotel-management-system',
    },
    {
      title: 'StackShop',
      desc: 'Full-stack e-commerce application with product browsing, shopping cart, and secure OAuth2 authentication — Angular 19 frontend backed by a Spring Boot REST API with Spring Data JPA and PostgreSQL.',
      tech: [T['angular'], T['ts'], T['rxjs'], T['bootstrap'], T['spring'], T['postgres']],
      category: 'Fullstack',
      year: 2025,
      isRecent: true,
      status: 'ongoing',
      screenshots: ['screenshots/stackshop-home.jpeg', 'screenshots/stackshop-shop.jpeg', 'screenshots/stackshop-product.jpeg'],
      githubUrl: 'https://github.com/Zeras12314/stack-shop',
    },
    // ─── Frontend ────────────────────────────────────────────────────────────
    {
      title: 'G-Techno',
      desc: 'Fictional tech agency landing page built to sharpen UI design and Bootstrap skills — hero section, services showcase (Web Dev, Mobile Dev, UI/UX Design), feature highlights, and contact form with vibrant 3D illustrations.',
      tech: [T['html'], T['css'], T['bootstrap']],
      category: 'Frontend',
      year: 2021,
      isRecent: false,
      status: 'completed',
      screenshots: ['screenshots/gtechno-hero.jpeg', 'screenshots/gtechno-home.jpeg'],
      githubUrl: 'https://github.com/Zeras12314/ger-gtechno-bootstrap',
      liveUrl: 'https://ger-gtechno-bootstrap.vercel.app',
    },
    {
      title: 'Intellibus',
      desc: 'Client website for a US-based platform engineering and board advisory firm serving global financial institutions — featuring capabilities showcase, team profiles with video introductions, podcast integration, and contact form.',
      tech: [T['html'], T['css'], T['js']],
      category: 'Frontend',
      year: 2023,
      isRecent: false,
      status: 'completed',
      screenshots: ['screenshots/intellibus-home.jpeg', 'screenshots/intellibus-capabilities.jpeg', 'screenshots/intellibus-contact.jpeg'],
      githubUrl: 'https://github.com/Zeras12314/intellibus',
      liveUrl: 'https://intellibus.vercel.app',
    },
    {
      title: 'NgMovies',
      desc: 'Movie discovery app powered by the TMDB free API — browse upcoming, top-rated, and now-playing films with detailed overviews, cast info, genre filtering, and search.',
      tech: [T['angular'], T['ts'], T['primeng'], T['scss']],
      category: 'Frontend',
      year: 2022,
      isRecent: false,
      status: 'completed',
      screenshots: ['screenshots/movies-home.jpeg', 'screenshots/movies-list.jpeg', 'screenshots/movies-detail.jpeg'],
      githubUrl: 'https://github.com/Zeras12314/ger-movies-angular',
      liveUrl: 'https://ger-movies-angular.vercel.app',
    },
    {
      title: 'Adobe Clone',
      desc: 'Full recreation of the Adobe Creative Cloud website built to practice HTML and SCSS — complete navbar, Creative Cloud hero, multi-product showcase (Photoshop, Premiere Pro, Acrobat), Adobe Sign section, and a detailed multi-column footer.',
      tech: [T['html'], T['css'], T['scss']],
      category: 'Frontend',
      year: 2021,
      isRecent: false,
      status: 'completed',
      screenshots: ['screenshots/adobe-clone-hero.jpeg', 'screenshots/adobe-clone.jpeg'],
      githubUrl: 'https://github.com/Zeras12314/adobe-clone',
      liveUrl: 'https://adobe-clone.vercel.app',
    },
    {
      title: 'XParrots',
      desc: 'Freelance NFT project website for a 10,000-piece hand-illustrated parrot collection on the XRP Ledger — tokenomics breakdown, phased roadmap, gallery, loyalty and charity programs, and team profiles.',
      tech: [T['html'], T['css'], T['js']],
      category: 'Frontend',
      year: 2022,
      isRecent: false,
      status: 'completed',
      screenshots: ['screenshots/xparrot-hero.jpeg', 'screenshots/xparrot-home.jpeg'],
      githubUrl: 'https://github.com/Zeras12314/XParrot',
      liveUrl: 'https://xparrot.vercel.app',
    },
    // ─── Web Design ──────────────────────────────────────────────────────────
    {
      title: 'Transformed',
      desc: 'Client website for a body and health services brand — high-fidelity UI designed in Figma with AI-generated imagery from Midjourney, featuring a clean, modern aesthetic across all key pages.',
      tech: [T['figma'], T['midjourney']],
      category: 'Web Design',
      year: 2024,
      isRecent: true,
      status: 'completed',
      screenshots: ['screenshots/transformed-home.jpeg', 'screenshots/transformed-section.jpeg', 'screenshots/transformed-design.jpeg'],
      driveUrl: 'https://drive.google.com/drive/u/0/folders/1_KJfBeDoYTXF5-nczY7MdH6qLvr4clnu',
    },
    {
      title: 'Royal Moderation',
      desc: 'Successful freelance web design project — delivered a polished, high-fidelity multi-page UI in Adobe XD for a satisfied client, later rendered into a WordPress website.',
      tech: [T['xd']],
      category: 'Web Design',
      year: 2021,
      isRecent: false,
      status: 'completed',
      screenshots: ['screenshots/royalmod-home.jpeg', 'screenshots/royalmod-services.jpeg'],
      driveUrl: 'https://drive.google.com/drive/u/0/folders/1yc3mK8DUNQB2MrAQz5eU-GwD38orXEDU',
    },
    {
      title: 'Wingate Entertainment',
      desc: 'Freelance web design project for a film and entertainment company — multi-page high-fidelity UI designed in Adobe XD covering homepage, films, services, director profiles, and contact, later rendered into a Wix website.',
      tech: [T['xd']],
      category: 'Web Design',
      year: 2023,
      isRecent: false,
      status: 'completed',
      screenshots: ['screenshots/wingate-home.jpeg', 'screenshots/wingate-films.jpeg'],
      driveUrl: 'https://drive.google.com/drive/u/0/folders/1L5K9BRb1MEXKzL984kjGaDdJ9AlsrSD3',
    },
    {
      title: 'DentaCare',
      desc: 'Fictional dental clinic website designed to practice UI/UX using Adobe XD and Photoshop — high-fidelity mockup covering homepage, services, appointments, and contact.',
      tech: [T['xd'], T['photoshop']],
      category: 'Web Design',
      year: 2022,
      isRecent: false,
      status: 'completed',
      screenshots: ['screenshots/dentacare-thumbnail.jpeg', 'screenshots/dentacare-design.jpeg'],
      driveUrl: 'https://drive.google.com/drive/u/0/folders/1dtvxAkFl9SIa-OU5nXZOlDZMY3Z4js3C',
    },
    {
      title: 'BrentonWay',
      desc: 'High-fidelity UI design created as a freelance qualification test — delivered a complete visual concept for the BrentonWay brand and successfully passed the client\'s design challenge.',
      tech: [T['xd'], T['photoshop']],
      category: 'Web Design',
      year: 2022,
      isRecent: false,
      status: 'completed',
      screenshots: ['screenshots/brentonway-thumbnail.jpeg', 'screenshots/brentonway-design.jpeg'],
      driveUrl: 'https://drive.google.com/drive/u/0/folders/1OEZmmRlTeGrH0ib05IHxvLsedaydhVW5',
    },
  ];

  get filtered(): Project[] {
    const f = this.activeFilter();
    return f === 'All' ? this.allProjects : this.allProjects.filter(p => p.category === f);
  }

  setFilter(f: string) { this.activeFilter.set(f); }
}
