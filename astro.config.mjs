// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import sumitgohilopengraphImage from '@sumitgohil/astro-opengraph-image';
import { readFile } from 'node:fs/promises';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    svelte(),
    sumitgohilopengraphImage({
      background: '#fff',
      width: 1200,
      height: 630,
      scale: 3,
      fonts: [
        {
          name: 'Inter',
          data: await readFile(
            'node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'
          ),
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Inter',
          data: await readFile(
            'node_modules/@fontsource/inter/files/inter-latin-700-normal.woff'
          ),
          style: 'normal',
          weight: 700,
        },
      ],
    }),
  ],

  adapter: node({
    mode: 'standalone',
  }),
});
