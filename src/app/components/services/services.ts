import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  items = [
    {
      title: 'Angular Development',
      desc: 'Scalable, high-performance SPAs built with Angular and TypeScript, using RxJS and NgRx for predictable, maintainable state management.',
      color: '#8b5cf6',
      icon: 'ph:code-bold',
    },
    {
      title: 'API Integration',
      desc: 'Integrating RESTful APIs and backend services, handling asynchronous data flows with RxJS operators across e-commerce platforms.',
      color: '#3b82f6',
      icon: 'ph:database-bold',
    },
    {
      title: 'UI/UX Design',
      desc: 'Translating Figma and Adobe XD designs into responsive, reusable, accessible Angular components.',
      color: '#06b6d4',
      icon: 'ph:layout-bold',
    },
    {
      title: 'Full-Stack Development',
      desc: 'Certified Full Stack Developer — building end-to-end applications with Java Spring Boot, PostgreSQL, Express.js, and MongoDB.',
      color: '#ec4899',
      icon: 'ph:stack-bold',
    },
    {
      title: 'CMS Websites',
      desc: 'Designing and building client websites, hand-coded or via CMS platforms such as Wix, WordPress, and Squarespace.',
      color: '#a78bfa',
      icon: 'ph:globe-bold',
    },
    {
      title: 'Code Quality & Testing',
      desc: 'Unit and E2E testing, code reviews, performance optimization, and Agile/Scrum delivery to keep codebases clean and reliable.',
      color: '#34d399',
      icon: 'ph:chats-circle-bold',
    },
  ];
}
