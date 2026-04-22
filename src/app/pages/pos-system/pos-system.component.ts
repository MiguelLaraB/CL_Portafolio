import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialFabComponent } from '../../components/social-fab/social-fab.component';

interface PosSystem {
  id: number;
  title: string;
  image: string;
  link?: string;
}

@Component({
  selector: 'app-pos-system',
  standalone: true,
  imports: [CommonModule, SocialFabComponent],
  templateUrl: './pos-system.component.html',
  styleUrl: './pos-system.component.css'
})
export class PosSystemComponent {
  posSystems: PosSystem[] = [
    {
      id: 1,
      title: 'Sistema POS y gestión de inventario',
      image: 'assets/pos.png', // User will configure this
      link: 'https://cl-pos-demo.vercel.app/sales' // User will configure this
    }
  ];
}
