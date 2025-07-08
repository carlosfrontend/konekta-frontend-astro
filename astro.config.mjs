// @ts-nocheck
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  experimental: {
      fonts: [
      {
        name: "Mochiy Pop P One",
        cssVariable: "--font-headings",
        provider: fontProviders.google(),
        subsets: ["latin"],
        weights: [400],
        styles: ["normal"],
      },
      {
        name: "Manrope",
        cssVariable: "--font-primary",
        provider: fontProviders.google(),
        subsets: ["latin"],
        weights: [200, 300, 400, 500, 600, 700, 800],
      }

    ]
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});