import { Component, computed, inject, signal } from '@angular/core';
import { ProjectServices } from '../../core/services/project-services';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { ProjectType } from '../../core/models/project';

type ProjectFilter = 'all' | ProjectType;


@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  private readonly projectService =
    inject(ProjectServices);

  readonly projects =
    this.projectService.getAll();

  readonly activeFilter =
    signal<ProjectFilter>('all');

  readonly filters: {
    label: string;
    value: ProjectFilter;
  }[] = [
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'Products',
      value: 'product'
    },
    {
      label: 'Client Work',
      value: 'client'
    },
    {
      label: 'Open Source',
      value: 'open-source'
    }
  ];

  readonly filteredProjects = computed(() => {

    const filter = this.activeFilter();

    if (filter === 'all') {
      return this.projects;
    }

    return this.projects.filter(
      project => project.type === filter
    );

  });

  setFilter(filter: ProjectFilter): void {
    this.activeFilter.set(filter);
  }
}
