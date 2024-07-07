import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'hotosm/ui',
			social: {
				github: 'https://github.com/hotosm/ui',
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: {
						directory: "Getting Started",
					}
				},
				{
					label: "Guides",
					autogenerate: { directory: 'guides' },
				},
				{
					label: "License",
					slug: "license",
				}
			],
			customCss: [
        './src/styles/custom.css',
      ],
		}),
	],
});
