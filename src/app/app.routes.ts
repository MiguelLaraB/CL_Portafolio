import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WebPagesComponent } from './pages/web-pages/web-pages.component';

export const routes: Routes = [
  { path: 'web-pages', component: WebPagesComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'web-pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'web-pages' }
];
