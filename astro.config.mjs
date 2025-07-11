// @ts-nocheck
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  experimental: {
      fonts: [
      {
        name: "Space Grotesk",
        cssVariable: "--font-headings",
        provider: fontProviders.google(),
        subsets: ["latin"],
        weights: [300,400,500,600,700],
        styles: ["normal"],
      },
      {
        name: "Inter",
        cssVariable: "--font-primary",
        provider: fontProviders.google(),
        subsets: ["latin"],
        weights: [100,200, 300, 400, 500, 600, 700, 800],
      }

    ]
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});