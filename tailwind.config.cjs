module.exports = {
  purge: [
    './src/**/*.{js,svelte}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'svelte': {
          '100': '#ffece6',
          '500': '#ff3e00',
          '700': '#bf2e00'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
