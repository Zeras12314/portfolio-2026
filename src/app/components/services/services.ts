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
      title: 'Web Development',
      desc: 'End-to-end full-stack applications built with modern frameworks — scalable, fast, and production-ready.',
      color: '#8b5cf6',
      icon: 'ph:code-bold',
    },
    {
      title: 'API & Backend',
      desc: 'RESTful and GraphQL APIs, microservices architecture, authentication systems, and cloud deployments.',
      color: '#3b82f6',
      icon: 'ph:database-bold',
    },
    {
      title: 'UI Engineering',
      desc: 'Pixel-perfect component libraries, design systems, and accessible interfaces that scale across products.',
      color: '#06b6d4',
      icon: 'ph:layout-bold',
    },
    {
      title: 'Cloud & DevOps',
      desc: 'CI/CD pipelines, containerisation with Docker, Kubernetes orchestration, and AWS/GCP infrastructure.',
      color: '#ec4899',
      icon: 'ph:cloud-bold',
    },
    {
      title: 'AI Integration',
      desc: 'Embedding LLM-powered features, RAG pipelines, and intelligent automation into existing products.',
      color: '#a78bfa',
      icon: 'ph:robot-bold',
    },
    {
      title: 'Consulting',
      desc: 'Architecture reviews, team code quality workshops, and technical strategy for engineering leaders.',
      color: '#34d399',
      icon: 'ph:chats-circle-bold',
    },
  ];
}
