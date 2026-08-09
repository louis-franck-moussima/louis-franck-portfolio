import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

  readonly services = [
    {
      number: '01',
      title: 'Angular Development',
      description:
        'Frontend development for modern web applications, dashboards, forms, responsive interfaces and API-driven workflows.',
      includes: [
        'Standalone Angular applications',
        'Responsive UI development',
        'Forms and validation',
        'REST API integration',
        'State and application flows',
        'Performance and maintainability improvements'
      ]
    },
    {
      number: '02',
      title: 'Java & Spring Boot',
      description:
        'Backend development for business applications, SaaS products and API-driven systems using Java and Spring Boot.',
      includes: [
        'REST API development',
        'Business logic',
        'Spring Security',
        'Authentication and authorization',
        'Database integration',
        'Third-party API integrations'
      ]
    },
    {
      number: '03',
      title: 'Bug Fixing & Debugging',
      description:
        'Technical investigation and resolution of issues across frontend, backend, APIs, authentication and deployment.',
      includes: [
        'Angular errors',
        'Spring Boot issues',
        'Authentication problems',
        'CORS and API failures',
        'Deployment problems',
        'Integration debugging'
      ]
    },
    {
      number: '04',
      title: 'Application Improvements',
      description:
        'Extend an existing application without rebuilding it from scratch.',
      includes: [
        'New features',
        'UI improvements',
        'Backend extensions',
        'Refactoring',
        'Performance improvements',
        'Integration upgrades'
      ]
    },
    {
      number: '05',
      title: 'Docker & Deployment',
      description:
        'Prepare applications for production and help move them from local development to cloud infrastructure.',
      includes: [
        'Docker and Docker Compose',
        'Reverse proxy configuration',
        'HTTPS and domains',
        'Cloud deployment',
        'Environment configuration',
        'Production troubleshooting'
      ]
    },
    {
      number: '06',
      title: 'SaaS & MVP Development',
      description:
        'Turn a product idea into a focused, working application that can be tested with real users.',
      includes: [
        'MVP architecture',
        'Frontend and backend implementation',
        'Authentication',
        'Payments and subscriptions',
        'Admin dashboards',
        'Beta deployment'
      ]
    }
  ];
}
