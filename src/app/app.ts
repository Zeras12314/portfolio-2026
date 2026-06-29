import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Projects } from './components/projects/projects';
import { Resume } from './components/resume/resume';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Services, Projects, Resume, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
