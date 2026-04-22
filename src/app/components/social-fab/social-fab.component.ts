import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-fab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-fab.component.html',
  styleUrl: './social-fab.component.css'
})
export class SocialFabComponent {
  isOpen = false;

  socialButtons = [
    { 
      label: 'Instagram', 
      icon: 'instagram', 
      link: 'https://www.instagram.com/codigo.local/' 
    },
    { 
      label: 'Facebook', 
      icon: 'facebook', 
      link: 'https://www.facebook.com/profile.php?id=61588202047531' 
    }
  ];

  toggleFab() {
    this.isOpen = !this.isOpen;
  }
}
