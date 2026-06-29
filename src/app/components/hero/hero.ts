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
    { name: 'MongoDB',     icon: 'logos:mongodb-icon',     color: '#47a248' },
    { name: 'SCSS',        icon: 'logos:sass',             color: '#cc6699' },
    { name: 'Bootstrap',   icon: 'logos:bootstrap',        color: '#7952b3' },
  ];
}
