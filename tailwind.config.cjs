/**
 * @format
 * @type {import('tailwindcss').Config}
 */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    fontSize: {
      sm: '0.75rem', // 12px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.75rem', // 28px
      '4xl': '2rem', // 32px
      '5xl': '2.5rem', // 40px
      '6xl': '3rem', // 48px
      '7xl': '4rem', // 64px
    },
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      Poppins: ['Poppins', 'sans-serif'],
    },
    screens: {
      xs: '512px', // 32rem
      sm: '768px', // 48rem
      md: '1024px', // 64rem
      lg: '1280px', // 80rem
      xl: '1440px', // 90rem
    },
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        dark: {
          100: '#eeeeee',
          200: '#e0e0e0',
          300: '#bbbbbb',
          400: '#666666',
          500: '#444444',
          600: '#2a2a2a',
          700: '#1f1f1f',
          800: '#181818',
          900: '#0f0f0f',
        },
      },
      content: {
        none: '""',
      },
      zIndex: {
        1: '1',
      },
      spacing: {
        half: '50%',
      },
    },
  },
  plugins: [],
};

function withVariable(variableName) {
  return `var(${variableName})`;
}
function withOpacity(variableName) {
  return ({opacityValue}) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
