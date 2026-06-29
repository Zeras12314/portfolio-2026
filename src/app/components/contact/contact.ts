import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  infoCards = [
    {
      label: 'Phone',
      value: '+1 (555) 000-0000',
      href: 'tel:+15550000000',
      icon: 'ph:phone-bold',
    },
    {
      label: 'Email',
      value: 'hello@devfolio.dev',
      href: 'mailto:hello@devfolio.dev',
      icon: 'ph:envelope-bold',
    },
    {
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
      icon: 'ph:map-pin-bold',
    },
  ];

  socials = [
    { name: 'GitHub',     handle: '@johndoe',  href: '#', color: '#94a3b8', icon: 'mdi:github'     },
    { name: 'LinkedIn',   handle: 'John Doe',  href: '#', color: '#0077b5', icon: 'mdi:linkedin'   },
    { name: 'Twitter / X',handle: '@johndoe',  href: '#', color: '#94a3b8', icon: 'ri:twitter-x-fill' },
    { name: 'Dribbble',   handle: '@johndoe',  href: '#', color: '#ea4c89', icon: 'mdi:dribbble'   },
  ];

  openTo = ['Freelance Projects', 'Full-time Roles', 'Consulting', 'Open Source'];
}
