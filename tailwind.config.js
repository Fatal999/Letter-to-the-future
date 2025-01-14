/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
