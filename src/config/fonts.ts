import { Baloo_2, Nunito } from 'next/font/google';

// Rounded display + friendly body pairing (ui-ux-pro-max typography search),
// both with Vietnamese glyph support for names like "Lam Thảo".
export const fontDisplay = Baloo_2({
  subsets: ['latin', 'vietnamese'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

export const fontSans = Nunito({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});
