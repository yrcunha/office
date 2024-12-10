/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/shared/components/**/*.{ts,tsx}",
    "./src/shared/ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [import("@tailwindcss/forms")],
};
