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

  private readonly siteUrl =
    'https://louis-franck-portfolio.vercel.app';

  private absoluteUrl(value: string): string {
    return new URL(value, this.siteUrl).toString();
  }

  update(data: SeoData): void {

    const image = this.absoluteUrl(
      data.image ?? '/social-preview.png'
    );

    const url = this.absoluteUrl(data.url ?? '/');

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

    this.meta.updateTag({
      property: 'og:url',
      content: url
    });

    this.meta.updateTag({
      property: 'og:image',
      content: image
    });

    this.meta.updateTag({
      property: 'og:image:secure_url',
      content: image
    });

    this.meta.updateTag({
      property: 'og:image:type',
      content: 'image/png'
    });

    this.meta.updateTag({
      property: 'og:image:width',
      content: '1200'
    });

    this.meta.updateTag({
      property: 'og:image:height',
      content: '630'
    });

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

    this.meta.updateTag({
      name: 'twitter:image',
      content: image
    });
  }
}
