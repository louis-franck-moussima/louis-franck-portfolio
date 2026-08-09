import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectServices } from '../../core/services/project-services';
import { Project } from '../../core/models/project';
import { Seo } from '../../core/services/seo';


@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {

   private readonly route = inject(ActivatedRoute);
  private readonly projectService = inject(ProjectServices);

   private readonly seo =
    inject(Seo);

  readonly project: Project | undefined =
    this.projectService.getBySlug(
      this.route.snapshot.paramMap.get('slug') ?? ''
    );

  constructor() {

    if (!this.project) {
      return;
    }

    this.seo.update({
      title:
        `${this.project.name} | Louis`,

      description:
        this.project.summary,

      image:
        this.project.coverImage,

      type:
        'article'
    });
  }
}
