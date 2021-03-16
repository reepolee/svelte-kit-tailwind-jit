const sveltePreprocess = require("svelte-preprocess");
/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: [
		sveltePreprocess({
			defaults: {
				script: "typescript",
				style: "postcss",
			},
			postcss: true
		}),
	],
	kit: {
		adapter: '@sveltejs/adapter-node',
		target: '#svelte'
	}
};
