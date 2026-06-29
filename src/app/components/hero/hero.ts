import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  techStack = ['TypeScript', 'Angular', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL'];
}
