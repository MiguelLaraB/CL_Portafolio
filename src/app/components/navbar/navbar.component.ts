import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navItems = [
    { label: 'Páginas web', route: '/web-pages', visible: true },
    { label: 'Inicio', route: '/home', visible: true },
    { label: 'Sistemas POS', route: '/pos-systems', visible: false },
    { label: 'Chatbots', route: '/chatbots', visible: false },
    { label: 'Apps', route: '/apps', visible: false }
  ];
}
