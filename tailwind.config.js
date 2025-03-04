 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        LightGrayCyan: 'hsl(185, 41%, 84%)',
        VeryLightGrayCyan: 'hsl(189, 41%, 97%)',
        VeryDarkCyan: 'hsl(183, 100%, 15%)',
        DarkCyan: 'hsl(186, 14%, 43%)',
        ColorError: '#B48372',
      },
      fontFamily: {
        SpaceMono: ['"Space Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}