import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
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
    { name: 'MongoDB',     icon: 'logos:mongodb-icon',          color: '#47a248' },
    { name: 'Docker',      icon: 'logos:docker-icon',           color: '#2496ed' },
    { name: 'SCSS',        icon: 'logos:sass',                  color: '#cc6699' },
    { name: 'Bootstrap',   icon: 'logos:bootstrap',             color: '#7952b3' },
    { name: 'Material',    icon: 'simple-icons:materialdesign', color: '#3f51b5' },
    { name: 'PrimeNG',     icon: 'simple-icons:primeng',        color: '#0ea5e9' },
    { name: 'OpenAI',      icon: 'simple-icons:openai',     color: '#74aa9c' },
    { name: 'Gemini',      icon: 'lobe:gemini',             color: '#8E75B2' },
    { name: 'Copilot',     icon: 'lobe:copilot',            color: '#0078d4' },
    { name: 'Midjourney',  icon: 'lobe:midjourney',         color: '#d4d4d4' },
    { name: 'Claude',      icon: 'lobe:claude',             color: '#d4a27f' },
  ];
}
