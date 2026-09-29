import { appConfig } from '.';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  appUrl: appConfig.appUrl,
  name: 'Hắc Thị Thanh Thanh',
  // Browser tab text: home page uses metaTitle, project pages use `<project> · shortName`.
  shortName: 'Thanh Thanh',
  metaTitle: 'Thanh Thanh · Portfolio',
  description:
    'Marketer with nearly 2.5 years in cosmetics — influencer & KOC marketing on TikTok, social media content and SEO writing.',
  ogImage: `${appConfig.appUrl}/og-image.jpg`,
};
