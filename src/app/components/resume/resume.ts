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
      company: 'TechCorp Inc.',
      role: 'Senior Full Stack Developer',
      period: 'Mar 2022 – Present',
      desc: 'Leading a team of 6 engineers building a SaaS analytics platform serving 200K+ users. Architected the micro-frontend migration and reduced build times by 60%.',
      skills: ['Angular', 'Node.js', 'AWS', 'PostgreSQL'],
      current: true,
      type: 'work',
    },
    {
      company: 'StartupXYZ',
      role: 'Full Stack Developer',
      period: 'Jan 2020 – Feb 2022',
      desc: 'Built the core product from 0 to 1 — REST API, React frontend, mobile app, and CI/CD pipeline. Scaled to Series A with 50K monthly active users.',
      skills: ['React', 'Python', 'Docker', 'Redis'],
      current: false,
      type: 'work',
    },
    {
      company: 'Anthropic · Aligner Platform',
      role: 'Claude Code AI Trainer',
      period: '2024',
      desc: 'Participated as an AI trainer for Anthropic\'s Claude Code model on the Aligner platform — evaluating, rating, and providing structured feedback on code generation outputs to improve model quality.',
      skills: ['Prompt Engineering', 'Code Review', 'AI Evaluation'],
      current: false,
      type: 'achievement',
    },
    {
      company: 'Meta · Coursera',
      role: 'Full Stack Developer Certificate',
      period: '2023',
      desc: 'Completed the Meta Full Stack Developer Professional Certificate — covering React, Node.js, REST APIs, database design, and deployment pipelines across 9 courses.',
      skills: ['React', 'Node.js', 'REST API', 'MySQL'],
      current: false,
      type: 'achievement',
    },
    {
      company: 'Freelance',
      role: 'Web Developer',
      period: '2018 – 2020',
      desc: 'Delivered 30+ client projects including e-commerce stores, landing pages, and custom dashboards for SMBs across various industries.',
      skills: ['Vue.js', 'Laravel', 'MySQL'],
      current: false,
      type: 'work',
    },
  ];

  education = [
    { degree: 'B.Sc. Computer Science',    school: 'State University',     year: '2018' },
    { degree: 'AWS Solutions Architect',   school: 'Amazon Web Services',  year: '2021' },
    { degree: 'Google Cloud Professional', school: 'Google',               year: '2023' },
  ];

  techStack = [
    { name: 'TypeScript', icon: 'logos:typescript-icon', color: '#3178c6' },
    { name: 'Angular',    icon: 'logos:angular-icon',    color: '#dd0031' },
    { name: 'React',      icon: 'logos:react',           color: '#61dafb' },
    { name: 'Next.js',    icon: 'logos:nextjs-icon',     color: '#94a3b8' },
    { name: 'Node.js',    icon: 'logos:nodejs-icon',     color: '#339933' },
    { name: 'Python',     icon: 'logos:python',          color: '#3776ab' },
    { name: 'PostgreSQL', icon: 'logos:postgresql',      color: '#4169e1' },
    { name: 'MongoDB',    icon: 'logos:mongodb-icon',    color: '#47a248' },
    { name: 'Docker',     icon: 'logos:docker-icon',     color: '#2496ed' },
    { name: 'AWS',        icon: 'logos:aws',             color: '#ff9900' },
    { name: 'GraphQL',    icon: 'logos:graphql',         color: '#e10098' },
    { name: 'Redis',      icon: 'logos:redis',           color: '#dc382d' },
  ];
}
