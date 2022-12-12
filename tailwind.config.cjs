/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Consolas', 'Menlo', 'Monaco', 'monospace'],
    },
    extend: {
      colors: {
        header: '#18181B',
        aside: '#19191B',
        main: '#1C1C1F',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
  ],
}
