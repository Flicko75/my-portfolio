/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        textPrimary: "#330249",
        textBody: "#5c2658",
        bgMain: "#d3d3ff",
        surfaceHover: "#babafb",
        borderSubtle: "#9a4d94",
      }
    },
  },
  plugins: [],
}

