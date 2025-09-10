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
						{ label: 'Pink (Humpback) Salmon', slug: 'species/pink-humpback-salmon-fishing-alaska' },
						{ label: 'Chum (Dog) Salmon', slug: 'species/chum-dog-salmon-fishing-alaska' },
						{ label: 'Halibut', slug: 'species/halibut-fishing-alaska' },
						{ label: 'Trout', slug: 'species/trout-fishing-alaska' },
						{ label: 'Arctic Grayling', slug: 'species/arctic-grayling-fishing-alaska' },
						{ label: 'Northern Pike', slug: 'species/northern-pike-fishing-alaska' },
					],
				},
				{
					label: 'Services',
					items: [
						{ label: 'Guided Fishing Charters', slug: 'services/guided-fishing-charters' },
						{ label: 'Fly-In Fishing Trips', slug: 'services/fly-in-fishing-trips' },
					],
				},
			],
		}),
	],
});
