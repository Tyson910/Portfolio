module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'purple-shade-1': '#4D1876',
        'purple-shade-2': '#421565',
        'purple-shade-3': '#371154',
        'purple-shade-4': '#2C0E44',
        'purple-shade-5': '#210A33',
        'purple-shade-6': '#160722',
        'purple-shade-7': '#0B0311',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
