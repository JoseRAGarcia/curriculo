/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#C9C97B',
        secondary: "#26A69A",
        dark: '#252434', //'#232323',
        light: "#EAEAEA"
      },
    },
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui']
    }
  },
  darkMode: 'selector',
  plugins: [],
};