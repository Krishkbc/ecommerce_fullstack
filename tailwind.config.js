/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "public": ["Public Sans", "sans-serif"],
      },
      colors: {
        "primary": "#EBC80C",
        "secondary": "#1B6392",
        "tertiary": "#FA8232",
        "gray-text": "#5F6C72",
      },
    },
  },
  plugins: [],
};
