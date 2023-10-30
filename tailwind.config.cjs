/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      maxWidth: {
        screen: '100vw',
      },
      aspectRatio: {
        hero: '16 / 6',
        'hero-mobile': '9 / 16',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

module.exports = config
