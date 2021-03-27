const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
  purge: {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    options: {
      defaultExtractor: (content) => [
        ...tailwindExtractor(content),
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
      ],
      keyframes: true,
    },
  },
  theme: {
    extend: {
      colors: {
        svelte: {
          100: "#ffece6",
          500: "#ff3e00",
          700: "#bf2e00",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
