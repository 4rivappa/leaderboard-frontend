/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ssm': '320px',
      },
    },
    colors: {
      'bg-color': '#121520',
      'sub-color': '#676e8a',
      'sub-alt-color': '#1b1e2c',
      'main-color': '#ffffff',
      'text-color': '#ffffff',
    },
  },
  plugins: [],
}

