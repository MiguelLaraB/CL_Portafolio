import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialButton {
  label: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  socialButtons: SocialButton[] = [
    { label: 'Instagram', icon: 'instagram', link: 'https://www.instagram.com/codigo.local/' },
    { label: 'Facebook', icon: 'facebook', link: 'https://www.facebook.com/profile.php?id=61588202047531' }
  ];

  // estado global de sección
  currentSection = 0; // 0 = hero, 1 = content
  isAnimating = false;

  private wheelListener: any;

  private startY = 0;
  private endY = 0;

  preventTouchMove = (event: TouchEvent) => {
    // Only prevent default if we are in the hero section to handle the swipe transition.
    // In the content section, we allow natural scrolling on mobile.
    if (this.currentSection === 0) {
      event.preventDefault();
    }
  };


  ngOnInit() {

    setTimeout(() => {
      const hero = document.getElementById('hero');
      hero?.classList.add('section-active');
    }, 0);

    // PC SCROLL
    this.wheelListener = (event: WheelEvent) => {
      event.preventDefault();

      if (this.isAnimating) return;

      if (event.deltaY > 0 && this.currentSection === 0) {
        this.scrollToContent();
      }

      if (event.deltaY < 0 && this.currentSection === 1) {
        this.scrollToHero();
      }
    };



    document.addEventListener('wheel', this.wheelListener, { passive: false });

    document.addEventListener('touchmove', this.preventTouchMove, { passive: false });
  }

  ngOnDestroy() {
    if (this.wheelListener) {
      document.removeEventListener('wheel', this.wheelListener);
    }
    document.removeEventListener('touchmove', this.preventTouchMove);
  }

  scrollToContent() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.currentSection = 1;

    const content = document.getElementById('content');
    const hero = document.getElementById('hero');

    if (content && hero) {
      content.scrollIntoView({ behavior: 'smooth' });

      hero.classList.remove('section-active');
      content.classList.add('section-active');

      setTimeout(() => {
        this.isAnimating = false;
      }, 1200);
    }
  }

  scrollToHero() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.currentSection = 0;

    const content = document.getElementById('content');
    const hero = document.getElementById('hero');

    if (content && hero) {
      hero.scrollIntoView({ behavior: 'smooth' });

      content.classList.remove('section-active');
      hero.classList.add('section-active');

      setTimeout(() => {
        this.isAnimating = false;
      }, 1200);
    }
  }


  onTouchStart(event: TouchEvent) {
    this.startY = event.touches[0].clientY;
  }

  onTouchMove(event: TouchEvent) {
    this.endY = event.touches[0].clientY;
  }

  onTouchEnd() {
    const diff = this.startY - this.endY;
    const threshold = 50;

    if (this.isAnimating) return;
    if (Math.abs(diff) < threshold) return;

    // swipe up
    if (diff > 0 && this.currentSection === 0) {
      this.scrollToContent();
    }

    // swipe down - Removed auto-scroll to hero on mobile as per user request
    // if (diff < 0 && this.currentSection === 1) {
    //   this.scrollToHero();
    // }
  }
}