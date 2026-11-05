import { Routes } from '@angular/router';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home')
        .then(m => m.Home),
    title: 'Louis | Full-Stack Developer & Product Builder'
  },

  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects')
        .then(m => m.Projects),
    title: 'Projects | Louis'
  },

  {
    path: 'projectson',
    redirectTo: 'projects',
    pathMatch: 'full'
  },

  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./features/project-detail/project-detail')
        .then(m => m.ProjectDetail)
  },

  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/services')
        .then(m => m.Services),
    title: 'Services | Louis'
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about')
        .then(m => m.About),
    title: 'About | Louis'
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact')
        .then(m => m.Contact),
    title: 'Contact | Louis'
  },

  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found')
        .then(m => m.NotFound),
    title: 'Page Not Found | Louis'
  },

];
