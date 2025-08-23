/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vivid-green': {
          50:  '#f0fdf7',  // très clair, très doux
  100: '#ccf9df',
  200: '#8ef0b8',
  300: '#53e692',
  400: '#28db75',
  500: '#02d96b',  // votre couleur principale
  600: '#02b65c',
  700: '#02944b',
  800: '#02753b',
  900: '#01592f',
        },
        'deep-blue': {
          50:  '#eff2ff',
  100: '#d2d9ff',
  200: '#a8b3ff',
  300: '#7e8aff',
  400: '#5c68ff',
  500: '#2a46d5',  // votre couleur principale
  600: '#243bb8',
  700: '#1c2e8f',
  800: '#162373',
  900: '#11185a',  // plus foncé pour bon contraste
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
