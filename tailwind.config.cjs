/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        'darker-grotesque': ['Darker Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

module.exports = config
