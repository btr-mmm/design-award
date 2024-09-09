/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        '128' : '32rem',
        '256': '64rem',
      },
      colors: {
        primary: '#ec0000',
        'secondary': '#200b33',
        'accent': '#ffeb00',
      },
    },
  },
  plugins: [],
}

