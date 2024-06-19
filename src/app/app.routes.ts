import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome/welcome.component';
import { HomeComponent } from './pages/home/home/home.component';

export const routes: Routes = [
  { path: '', title: 'Ilha do Tesouro', component: WelcomeComponent },
  { path: 'home', title: 'Ilha do Tesouro - home', component: HomeComponent }

];
