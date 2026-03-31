import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WebPage {
  id: number;
  title: string;
  image: string;
  link?: string;
}

@Component({
  selector: 'app-web-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-pages.component.html',
  styleUrl: './web-pages.component.css'
})
export class WebPagesComponent {
  webPages: WebPage[] = [
    {
      id: 1,
      title: 'Invitación de boda',
      image: 'assets/miniatura_wedding_landing.png',
      link: 'https://cl-wedding-invitation-landing.vercel.app/'
    },
    {
      id: 2,
      title: 'Segunda',
      image: 'assets/web-page-2.jpg',
      link: 'https://example.com'
    },
    {
      id: 3,
      title: 'Otra',
      image: 'assets/web-page-3.jpg',
      link: 'https://example.com'
    },
    {
      id: 4,
      title: 'Hola',
      image: 'assets/web-page-4.jpg',
      link: 'https://example.com'
    }
  ];
}
