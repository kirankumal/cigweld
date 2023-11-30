import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  plugins: [formsPlugin, typographyPlugin],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5FCFF',
          100: '#EEFAFF',
          200: '#E6F4FA',
          300: '#C5EEFF',
          400: '#9CE2FF',
          500: '#0092CF',
          600: '#0077A8',
        },
        secondary: {
          500: '#FFE600',
        },
        neutral: {
          white: '#FFFFFF',
          black: '#121212',
        },
        grey: {
          25: '#F5F5F5',
          50: '#E5E6E6',
          100: '#CACECE',
          200: '#B0B5B5',
          300: '#969C9C',
          400: '#7B8484',
          500: '#636969',
          600: '#4A4F4F',
          700: '#313535',
          800: '#191A1A',
          900: '#0F1010',
        },
        semantic: {
          danger: {
            100: '#F9F0EF',
            500: '#D92F28',
          },
          success: {
            100: '#CFEED5',
            500: '#3A8348',
          },
          info: {
            100: '#ECEEF6',
            500: '#405AE2',
          },
        },
        status: {
          recieved: '#B22222',
          awaiting: '#B24D22',
          partially_pick: '#A6B222',
          fully_pick: '#068EB9',
          partially_shipped: '#0819BA',
          shipped: '#0A51A4',
          partially_invoice: '#86AF13',
          invoice: '#1A9B36',
          delivered: '#046F3C',
        },
      },
      boxShadow: {
        base: '0px 4px 4px rgba(0, 0, 0, 0.02), 0px 4px 32px rgba(19, 19, 19, 0.08)',
        XL: '0px 26px 80px 0px rgba(0, 0, 0, 0.20), 0px 0px 1px 0px rgba(0, 0, 0, 0.20)',
        focus:
          '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 2px 8px 0px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        '4.5xl': '2.5rem',
      },
      lineHeight: {
        7.5: '1.813rem',
        11: '2.75rem',
        14: '3.5rem',
      },
    },
  },
};
