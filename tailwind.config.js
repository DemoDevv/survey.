/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'black': '#010101',
      'green': '#87F29A',
      'purple': '#B4AAFF',
      'pink': '#F6C5D7',
      'blue': '#AEECFF',
      'yellow': '#E1F7A1',
      'grey': '#F2F2F2',
      'white': '#FFFFFF',
    },
    extend: {
      fontFamily: {
        medium: ['Gilroy Medium', 'sans-serif'],
        regular: ['Gilroy Regular', 'sans-serif'],
        semibold: ['Gilroy SemiBold', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        normal: 400,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}

