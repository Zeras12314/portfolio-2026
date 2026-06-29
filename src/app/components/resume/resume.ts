import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  expandedJob = signal<string | null>(null);

  toggleExpand(company: string) {
    this.expandedJob.update(current => (current === company ? null : company));
  }

  isExpanded(company: string) {
    return this.expandedJob() === company;
  }

  experiences = [
    {
      company: 'Accenture Philippines',
      role: 'Advanced App Engineering Analyst',
      period: 'Aug 2023 – Present',
      desc: 'Working across three consecutive e-commerce projects — building reactive Angular components, integrating with Hybris and Impex, and supporting global go-live cycles from development through production support.',
      current: true,
      projects: [
        {
          name: 'Project 3',
          period: 'April 2026 – Present',
          bullets: [
            'Develop and implement reusable Angular components to improve scalability and maintainability',
            'Write and maintain unit test cases using Jest to ensure code quality and reliability',
            'Collaborate with cross-functional global teams in daily stand-ups and agile ceremonies',
            'Participate in code reviews to enforce coding standards and best practices',
            'Use Jira and Confluence for task tracking, documentation, and team collaboration',
          ],
        },
        {
          name: 'Project 2',
          period: 'March 2024 – April 2026',
          bullets: [
            'Contributed to the development of an e-commerce platform using Angular, Hybris, and Impex',
            'Built reactive and scalable front-end solutions using RxJS, NgRx, and Angular Signals',
            'Applied modular architecture and best practices to deliver maintainable and efficient code',
            'Conducted Knowledge Transfer (KT) sessions to onboard new team members',
            'Collaborated with global teams across multiple time zones to meet project deadlines',
            'Managed go-live deployments across different regions, ensuring smooth releases',
            'Resolved critical production issues and optimized application performance',
            'Worked closely with backend developers, QA, BAs, and Scrum Masters to deliver Jira tasks on time',
            'Maintained technical documentation using Confluence',
            'Provided post-go-live support to ensure system stability and performance',
            'Integrated third-party APIs and handled asynchronous data flows using RxJS',
            'Actively participated in agile ceremonies including stand-ups, sprint reviews, and retrospectives',
          ],
        },
        {
          name: 'Project 1',
          period: 'August 2023 – March 2024',
          bullets: [
            'Developed, tested, and debugged Angular applications',
            'Created and executed test cases to ensure application reliability',
            'Built reusable Angular components to support scalability and consistency',
            'Participated in code reviews to maintain code quality and adherence to standards',
          ],
        },
      ],
    },
    {
      company: 'Grosvik Philippines',
      role: 'Junior Angular Developer',
      period: 'Jul 2021 – Aug 2023',
      bullets: [
        'Developed, tested, and debugged Angular applications for scalable web solutions',
        'Designed and implemented responsive UI based on Adobe XD, Photoshop, and Illustrator',
        'Translated design concepts into reusable Angular components with clean code',
        'Collaborated using GitHub for version control and team workflows',
        'Applied best practices for performance optimization and maintainability',
      ],
      current: false,
    },
    {
      company: 'Senior High School',
      role: 'Computer Programming Instructor',
      period: '2019 – 2022',
      desc: 'Taught computer-related subjects to senior high school students, including programming fundamentals, computer systems, and applied computer science concepts.',
      current: false,
    },
    {
      company: 'Freelance',
      role: 'Web Developer',
      period: 'Ongoing',
      desc: 'Designed and built client websites, hand-coded and via CMS platforms including Wix, WordPress, and Squarespace.',
      current: false,
    },
  ];

  education = [
    {
      degree: 'BS Computer Engineering',
      school: 'President Ramon Magsaysay State University',
      formerly: '(formerly Ramon Magsaysay Technological University, renamed in 2018)',
      year: '2013 – 2019',
    },
  ];

  certifications = [
    {
      title: 'Full Stack Developer Certification',
      issuer: 'Accenture Song',
      period: 'June 2026',
      desc: 'Passed Accenture Song\'s Full Stack Developer certification, building an end-to-end application with Angular, Java Spring Boot, and PostgreSQL, and implementing OAuth2 for security as a project requirement.',
    },
    {
      title: 'Claude Code AI Trainer',
      issuer: 'Anthropic · Aligner Platform',
      period: '2026',
      desc: 'Participated as an AI trainer for Anthropic\'s Claude Code model on the Aligner platform — evaluating, rating, and providing structured feedback on code generation outputs to improve model quality.',
    },
    {
      title: 'Skill Certification: JavaScript & Front-End Development',
      issuer: 'Upwork',
      period: 'August 2024',
      desc: 'Earned Upwork\'s verified skill certification in JavaScript and Front-End Development, validating core front-end engineering proficiency.',
    },
  ];

  courses = [
    { title: 'Java Spring Framework, Spring Boot', issuer: 'Udemy', period: '2026' },
    { title: 'RxJS in Practice', issuer: 'Udemy', period: '2026' },
    { title: 'Reactive Angular Course, with RxJS', issuer: 'Udemy', period: '2026' },
  ];

  techStack = [
    { name: 'Angular',     icon: 'logos:angular-icon',     color: '#dd0031' },
    { name: 'TypeScript',  icon: 'logos:typescript-icon',  color: '#3178c6' },
    { name: 'JavaScript',  icon: 'logos:javascript',       color: '#f7df1e' },
    { name: 'RxJS',        icon: 'logos:reactivex',        color: '#b7178c' },
    { name: 'NgRx',        icon: 'simple-icons:ngrx',      color: '#ba2bd2' },
    { name: 'Java',        icon: 'logos:java',             color: '#ed8b00' },
    { name: 'Spring Boot', icon: 'logos:spring-icon',      color: '#6db33f' },
    { name: 'Node.js',     icon: 'logos:nodejs-icon',      color: '#339933' },
    { name: 'Express.js',  icon: 'simple-icons:express',   color: '#ffffff' },
    { name: 'PostgreSQL',  icon: 'logos:postgresql',       color: '#4169e1' },
    { name: 'MongoDB',     icon: 'logos:mongodb-icon',     color: '#47a248' },
    { name: 'SCSS',        icon: 'logos:sass',             color: '#cc6699' },
    { name: 'Bootstrap',   icon: 'logos:bootstrap',        color: '#7952b3' },
    { name: 'Material',    icon: 'simple-icons:materialdesign', color: '#3f51b5' },
    { name: 'PrimeNG',     icon: 'simple-icons:primeng',   color: '#0ea5e9' },
  ];

  tools = [
    { name: 'Git',          icon: 'logos:git-icon',           color: '#f05032' },
    { name: 'Jira',         icon: 'logos:jira',               color: '#0052cc' },
    { name: 'Confluence',   icon: 'logos:confluence',         color: '#172b4d' },
    { name: 'Figma',        icon: 'logos:figma',              color: '#f24e1e' },
    { name: 'Adobe XD',     icon: 'logos:adobe-xd',           color: '#ff61f6' },
    { name: 'Photoshop',    icon: 'logos:adobe-photoshop',    color: '#31a8ff' },
    { name: 'Illustrator',  icon: 'logos:adobe-illustrator',  color: '#ff9a00' },
    { name: 'Wix',          icon: 'logos:wix',                color: '#0c6ebd' },
    { name: 'WordPress',    icon: 'logos:wordpress-icon',     color: '#21759b' },
  ];
}
