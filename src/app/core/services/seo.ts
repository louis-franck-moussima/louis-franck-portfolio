import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root',
})
export class Seo {
  
   private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  update(data: SeoData): void {

    this.title.setTitle(data.title);

    this.meta.updateTag({
      name: 'description',
      content: data.description
    });

    this.meta.updateTag({
      property: 'og:title',
      content: data.title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: data.description
    });

    this.meta.updateTag({
      property: 'og:type',
      content: data.type ?? 'website'
    });

    if (data.image) {
      this.meta.updateTag({
        property: 'og:image',
        content: data.image
      });
    }

    if (data.url) {
      this.meta.updateTag({
        property: 'og:url',
        content: data.url
      });
    }

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: data.title
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: data.description
    });

    if (data.image) {
      this.meta.updateTag({
        name: 'twitter:image',
        content: data.image
      });
    }
  }
}
