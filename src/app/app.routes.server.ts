import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projects/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { slug: 'studevia' },
        { slug: 'tsdb' },
        { slug: 'digital-wedding-invitation' },
        { slug: 'anet-patiss' },
        { slug: 'euid' }
      ];
    }
  },

  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
