/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./store/**/*.{js,ts,jsx,tsx,mdx}",
    "./types/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#105B48',
          50: '#176D5826',
          100: '#E6F2EF',
          500: '#176D58',
          900: '#105B48',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F5F5F5',
          200: '#E4E4E4',
          300: '#D6D6D6',
          400: '#969696',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#191919',
        },
        blue: {
          500: '#4545FE',
          600: '#2525E6',
        },
        green: {
          500: '#12B76A',
        },
        teal: {
          500: '#14B8A6',
        },
        red: {
          500: '#F04438',
        },
      },
      spacing: {
        '78': '19.5rem',
        '170': '42.5rem',
        '856': '214rem',
        '407': '101.75rem',
        '189': '47.25rem',
        '73': '18.25rem',
      },
      borderRadius: {
        'md': '8px',
        'lg': '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 1px 4px 0 rgba(68, 68, 68, 0.04) inset',
        'dropdown': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};