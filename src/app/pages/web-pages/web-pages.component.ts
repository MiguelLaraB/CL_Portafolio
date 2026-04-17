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
      title: 'Catálogo de Ferreteria',
      image: 'assets/Catalogo.PNG',
      link: 'https://cl-catalogo-landing.vercel.app/'
    },
    {
      id: 3,
      title: 'Torneos de videojuegos',
      image: 'assets/Torneos.PNG',
      link: 'https://cl-torneos-landing.vercel.app/'
    },
    {
      id: 4,
      title: 'RCP',
      image: 'assets/RCP.PNG',
      link: 'https://rcp-1.vercel.app/'
    }
  ];
}
