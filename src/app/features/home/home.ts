import { Component, inject } from '@angular/core';
import { ProjectServices } from '../../core/services/project-services';
import { RouterLink } from '@angular/router';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { Seo } from '../../core/services/seo';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  private readonly seo =
    inject(Seo);

  private readonly projectService = inject(ProjectServices);

  featuredProjects = this.projectService.getFeatured();

    constructor() {
    this.seo.update({
      title:
        'Louis | Full-Stack Developer & Product Builder',

      description:
        'Full-stack developer building Angular, Java, Spring Boot and cloud applications from product idea to production.',

      image:
        '/images/social/portfolio-preview.webp'
    });
  }

  readonly services = [
    {
      number: '01',
      title: 'Angular Development',
      description:
        'Responsive pages, dashboards, forms, application flows and REST API integrations using modern Angular.'
    },
    {
      number: '02',
      title: 'Java & Spring Boot',
      description:
        'REST APIs, business logic, authentication, database integration and backend feature development.'
    },
    {
      number: '03',
      title: 'Bug Fixing & Debugging',
      description:
        'Diagnose and resolve frontend, backend, authentication, CORS, API and integration problems.'
    },
    {
      number: '04',
      title: 'Docker & Deployment',
      description:
        'Containerize and deploy applications with Docker Compose, HTTPS, reverse proxies, domains and cloud infrastructure.'
    },
    {
      number: '05',
      title: 'Application Improvements',
      description:
        'Extend, refactor or improve an existing application without rebuilding the entire product from scratch.'
    },
    {
      number: '06',
      title: 'SaaS MVP Development',
      description:
        'Turn a product idea into a focused, deployable MVP that can be tested with real users.'
    }
  ];

  readonly techStack = [
    {
      title: 'Frontend',
      items: [
        'Angular',
        'TypeScript',
        'Tailwind CSS',
        'HTML',
        'CSS',
        'Ionic'
      ]
    },
    {
      title: 'Backend',
      items: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'REST APIs'
      ]
    },
    {
      title: 'Data',
      items: [
        'MySQL',
        'Firebase'
      ]
    },
    {
      title: 'Infrastructure',
      items: [
        'Docker',
        'Docker Compose',
        'Caddy',
        'Nginx',
        'Cloudflare',
        'OVH Cloud',
        'Oracle Cloud'
      ]
    },
    {
      title: 'Development',
      items: [
        'Git',
        'GitHub',
        'Postman',
        'Linux'
      ]
    }
  ];

}
