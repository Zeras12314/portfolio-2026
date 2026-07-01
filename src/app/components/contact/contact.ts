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
      label: 'WhatsApp',
      value: '+63 939 485 7179',
      href: 'https://wa.me/639394857179',
      icon: 'logos:whatsapp-icon',
    },
    {
      label: 'Viber',
      value: '+63 995 644 5556',
      href: 'viber://chat?number=%2B639956445556',
      icon: 'simple-icons:viber',
    },
    {
      label: 'Email',
      value: 'tiongsongerson@gmail.com',
      href: 'mailto:tiongsongerson@gmail.com',
      icon: 'ph:envelope-bold',
    },
    {
      label: 'Location',
      value: 'Olongapo City, Zambales, Philippines',
      href: '#',
      icon: 'ph:map-pin-bold',
    },
  ];

  socials = [
    { name: 'GitHub',   handle: '@Zeras12314',     href: 'https://github.com/Zeras12314',                color: '#94a3b8', icon: 'mdi:github'   },
    { name: 'LinkedIn', handle: 'Gerson Tiongson', href: 'https://www.linkedin.com/in/gerson-tiongson/', color: '#0077b5', icon: 'mdi:linkedin' },
  ];

  openTo = ['Full-time Roles', 'Freelance Projects', 'Cross-functional Work'];
}
