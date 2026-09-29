import { appConfig } from '.';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  appUrl: appConfig.appUrl,
  name: 'Hắc Thị Thanh Thanh',
  metaTitle: 'Hắc Thị Thanh Thanh — Influencer Marketing Portfolio',
  description:
    'Marketer with nearly 2.5 years in cosmetics — influencer & KOC marketing on TikTok, social media content and SEO writing.',
  ogImage: `${appConfig.appUrl}/og-image.jpg`,
};
