/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes : {
        Fadein : {
          'from' : { 'color' : 'black'},
          'to' : { 'color' : '#ffa600'}
        },
        Fadeout : {
          'from' : { 'color' : '#ffa600'},
          'to' : { 'color' : 'black'}
        }
      },
      animation : {
        Fadein : 'Fadein 1s ease forwards',
        Fadeout : 'Fadeout 1s ease backwards'
      }
    },
  },
  plugins: [],
}

