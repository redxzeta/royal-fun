/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e559f2",

          secondary: "#ffbdbc",

          accent: "#a9fcf4",

          neutral: "#242638",

          "base-100": "#2E2A3C",

          info: "#90E3F4",

          success: "#179269",

          warning: "#CF7807",

          error: "#E25578",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
