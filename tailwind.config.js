/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple_100: 'hsl(254, 88%, 90%)',
        purple_500: 'hsl(256, 67%, 59%)',
        yellow_100: 'hsl(31, 66%, 93%)',
        yellow_500: 'hsl(39, 100%, 71%)',
        white_100: 'hsl(0, 0%, 100%)',
        black_100: 'hsl(0, 0%, 7%)',
      },
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' }, // Moves right
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
