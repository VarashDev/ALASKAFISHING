// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Alaska Fishing',
			sidebar: [
				{
					label: 'Spicies',
					items: [
						{ label: 'King (Chinook) Salmon', slug: 'species/king-chinook-salmon-fishing-alaska' },
						{ label: 'Sockeye (Red) Salmon', slug: 'species/sockeye-red-salmon-fishing-alaska' },
						{ label: 'Coho (Silver) Salmon', slug: 'species/coho-silver-salmon-fishing-alaska' },
						
						
					],
				},
			],
		}),
	],
});
