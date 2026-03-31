import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import lottie from 'lottie-web';

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
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  socialButtons: SocialButton[] = [
    { label: 'Instagram', icon: 'instagram', link: 'https://www.instagram.com/codigo.local/' },
    { label: 'Facebook', icon: 'facebook', link: 'https://www.facebook.com/profile.php?id=61588202047531' }
  ];

  private wheelListener: any;
  private isAnimating = false;
  currentSection = 0; // 0 = hero, 1 = content



  ngAfterViewInit() {
    const container = document.getElementById('lottie-bg');

    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../../../assets/wind.json'
      });
    }
  }

  ngOnInit() {
    setTimeout(() => {
      const hero = document.getElementById('hero');
      hero?.classList.add('section-active');
    }, 0);

    this.wheelListener = (event: WheelEvent) => {
      event.preventDefault();

      if (this.isAnimating) return;

      if (event.deltaY > 0 && this.currentSection === 0) {
        this.currentSection = 1;
        this.scrollToContent();
      }

      if (event.deltaY < 0 && this.currentSection === 1) {
        this.currentSection = 0;
        this.scrollToHero();
      }
    };

    document.addEventListener('wheel', this.wheelListener, { passive: false });

  }

  ngOnDestroy() {
    if (this.wheelListener) {
      document.removeEventListener('wheel', this.wheelListener);
    }
  }

  scrollToContent() {
    if (this.isAnimating) return;
    this.isAnimating = true;

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
}
