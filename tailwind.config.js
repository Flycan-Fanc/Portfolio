/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        mist: '#f8fafc',
        line: '#d9e2ec',
        accent: '#0f766e',
        ocean: '#0f4c81',
      },
      boxShadow: {
        soft: '0 18px 50px -30px rgba(15, 23, 42, 0.25)',
      },
      fontFamily: {
        sans: ['Aptos', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
