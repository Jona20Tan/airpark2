/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial Rounded MT Bold', 'Arial', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 3s infinite',
        'drip': 'drip 15s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'wobble': 'wobble 3s ease-in-out infinite',
      },
      keyframes: {
        drip: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
    },
  },
  plugins: [],
}