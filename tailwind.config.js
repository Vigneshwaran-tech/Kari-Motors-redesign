/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kms: {
          dark: '#0a0b0d',
          darker: '#060708',
          card: 'rgba(18, 20, 24, 0.7)',
          red: '#e52e2e',
          'red-hover': '#ff3b3b',
          'red-bright': '#ff1a1a',
          silver: '#e2e8f0',
          muted: '#94a3b8',
          subtle: '#334155',
        }
      },
      fontFamily: {
        display: ['Oswald', 'Syne', 'sans-serif'],
        accent: ['Syne', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        'ultra': '0.25em',
        'mega': '0.35em',
      },
    },
  },
  plugins: [],
}

