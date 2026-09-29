import { siteConfig } from '@/config/site';
import { projects } from '@/data/portfolio';
import { ROUTES } from '@/lib/routes';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const staticPages: MetadataRoute.Sitemap = Object.values(ROUTES).map((route) => ({
      url: `${siteConfig.appUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }));

    const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
      url: `${siteConfig.appUrl}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    }));

    return [...staticPages, ...projectPages];
  } catch (err) {
    return [];
  }
}
