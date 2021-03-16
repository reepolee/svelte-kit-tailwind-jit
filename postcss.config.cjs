const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		require("postcss-nested"),
		require("@tailwindcss/jit"),
		require("autoprefixer"),
		!dev && require("cssnano")({
			preset: "default",
		}),
	],
};
