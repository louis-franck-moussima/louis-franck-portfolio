import { Injectable } from '@angular/core';
import { Project, ProjectType } from '../models/project';
import { PROJECTS } from '../../data/projects.data';

@Injectable({
  providedIn: 'root',
})
export class ProjectServices {
  
   getAll(): Project[] {
    return PROJECTS;
  }

  getFeatured(): Project[] {
    return PROJECTS.filter(project => project.featured);
  }

  getBySlug(slug: string): Project | undefined {
    return PROJECTS.find(project => project.slug === slug);
  }

  getByType(type: ProjectType): Project[] {
    return PROJECTS.filter(
      project => project.type === type
    );
  }
}
