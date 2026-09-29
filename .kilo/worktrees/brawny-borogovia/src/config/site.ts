import { appConfig } from '.';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  appUrl: appConfig.appUrl,
  name: 'NextJS Boilerplate',
  metaTitle: 'NextJS Boilerplate',
  description: 'NextJS Boilerplate',
  ogImage: `${appConfig.appUrl}/og-image.jpg`,
};
