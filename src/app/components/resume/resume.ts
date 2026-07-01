import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  experiences = [
    {
      company: 'Accenture Philippines',
      role: 'Advanced App Engineering Analyst',
      period: 'Aug 2023 – Present',
      desc: 'Contributed across multiple projects, including internal applications and a global client engagement.',
      current: true,
      projects: [
        {
          name: 'Accenture Internal Application – Project A',
          period: 'April 2026 – Present',
          bullets: [
            'Develop and implement reusable Angular components to improve scalability and maintainability',
            'Write and maintain unit test cases using Jest to ensure code quality and reliability',
            'Collaborate with cross-functional global teams in daily stand-ups and agile ceremonies',
            'Participate in code reviews to enforce coding standards and best practices',
            'Utilize Jira and Confluence for task tracking, documentation, and team collaboration',
          ],
        },
        {
          name: 'Samsung (Client Project)',
          period: 'March 2024 – April 2026',
          bullets: [
            'Delivered multiple regional go-live releases across 8+ countries, providing real-time production support and resolving critical issues during deployment windows',
            'Built reactive, scalable front-end solutions using Angular Signals, RxJS, and NgRx for a high-traffic global e-commerce platform',
            'Integrated payment gateway solutions and third-party APIs, managing complex asynchronous data flows with RxJS',
            'Developed dynamic email templates using VM-based files, improving transactional communication across regions',
            'Conducted Knowledge Transfer sessions and performed feature handover to support and maintenance teams, reducing onboarding time',
            'Collaborated with distributed global teams — backend developers, QA engineers, Business Analysts, and Scrum Masters — to consistently deliver sprint goals on time',
            'Managed regional deployments and post-go-live support, ensuring zero-downtime stability across production environments',
            'Maintained up-to-date technical documentation in Confluence and actively participated in Agile ceremonies',
          ],
        },
        {
          name: 'Accenture Internal Application – Project B',
          period: 'August 2023 – March 2024',
          bullets: [
            'Developed, tested, and debugged Angular applications',
            'Created and executed test cases to ensure application reliability',
            'Built reusable components to support scalability and consistency',
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
      bullets: [
        'Completed an end-to-end full stack application using Angular, Java Spring Boot, and PostgreSQL',
        'Implemented secure authentication using OAuth2 as part of the project requirements',
      ],
    },
    {
      title: 'Claude Code AI Trainer',
      issuer: 'Anthropic · Aligner Platform',
      period: '2026',
      bullets: [
        'Evaluated, rated, and provided structured feedback on code generation outputs',
        'Contributed to improving the quality and reliability of AI-generated code',
      ],
    },
    {
      title: 'Skill Certification: JavaScript & Front-End Development',
      issuer: 'Upwork',
      period: 'August 2024',
      bullets: [
        'Earned a verified certification demonstrating strong proficiency in JavaScript and front-end development',
      ],
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
    { name: 'Docker',      icon: 'logos:docker-icon',      color: '#2496ed' },
    { name: 'SCSS',        icon: 'logos:sass',             color: '#cc6699' },
    { name: 'Bootstrap',   icon: 'logos:bootstrap',        color: '#7952b3' },
    { name: 'Material',    icon: 'simple-icons:materialdesign', color: '#3f51b5' },
    { name: 'PrimeNG',     icon: 'simple-icons:primeng',   color: '#0ea5e9' },
  ];

  tools = [
    { name: 'Git',          icon: 'logos:git-icon',           color: '#f05032' },
    { name: 'GitHub',       icon: 'simple-icons:github',      color: '#e6edf3' },
    { name: 'Jira',         icon: 'logos:jira',               color: '#0052cc' },
    { name: 'Confluence',   icon: 'logos:confluence',         color: '#172b4d' },
    { name: 'Figma',        icon: 'logos:figma',              color: '#f24e1e' },
    { name: 'Adobe XD',     icon: 'logos:adobe-xd',           color: '#ff61f6' },
    { name: 'Photoshop',    icon: 'logos:adobe-photoshop',    color: '#31a8ff' },
    { name: 'Illustrator',  icon: 'logos:adobe-illustrator',  color: '#ff9a00' },
    { name: 'Wix',          icon: 'logos:wix',                color: '#0c6ebd' },
    { name: 'WordPress',    icon: 'logos:wordpress-icon',     color: '#21759b' },
    { name: 'OpenAI',       icon: 'simple-icons:openai',     color: '#74aa9c' },
    { name: 'Gemini',       icon: 'lobe:gemini',             color: '#8E75B2' },
    { name: 'Copilot',      icon: 'lobe:copilot',            color: '#0078d4' },
    { name: 'Midjourney',   icon: 'lobe:midjourney',         color: '#d4d4d4' },
    { name: 'Claude',       icon: 'lobe:claude',             color: '#d4a27f' },
  ];
}
