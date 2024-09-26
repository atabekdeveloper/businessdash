/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors() {
        return {
          primary: {
            DEFAULT: '#3182CE',
          },
        };
      },
    },
  },
  plugins: [],
};
