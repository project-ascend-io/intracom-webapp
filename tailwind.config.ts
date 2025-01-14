import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/page-components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '3.815rem',
              fontWeight: 'bold',
            },
            h2: {
              fontSize: '3.052rem',
              fontWeight: 'bold',
            },
            h3: {
              fontSize: '2.441rem',
              fontWeight: 'bold',
            },
            h4: {
              fontSize: '1.953rem',
              fontWeight: 'bold',
            },
            h5: {
              fontSize: '1.563rem',
              fontWeight: 'bold',
            },
            h6: {
              fontSize: '1.25rem',
              fontWeight: 'bold',
            },
            a: {
              color: '#4CAF50',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#3e8e41',
              },
            },
          },
        },
      },
      colors: {
        "primary-100": "#EFFAFB",
        "primary-200": "#E0F4F7",
        "primary-300": "#C7E1E8",
        "primary-400": "#ACC7D1",
        "primary-500": "#89A5B3",
        "primary-600": "#648499",
        "primary-700": "#456580",
        "primary-800": "#2B4867",
        "primary-900": "#1A3255",
        "success-100": "#DEFDD8",
        "success-200": "#B8FCB2",
        "success-300": "#8BF88E",
        "success-400": "#6DF27D",
        "success-500": "#3FEA64",
        "success-600": "#2EC95E",
        "success-700": "#1FA857",
        "success-800": "#14874E",
        "success-900": "#0C7048",
        "info-100": "#D4F9FF",
        "info-200": "#AAEFFF",
        "info-300": "#7FDFFF",
        "info-400": "#60CEFF",
        "info-500": "#2BB1FF",
        "info-600": "#1F8ADB",
        "info-700": "#1568B7",
        "info-800": "#0D4993",
        "info-900": "#08347A",
        "warning-100": "#FFF6CD",
        "warning-200": "#FFEB9B",
        "warning-300": "#FFDD69",
        "warning-400": "#FFCF43",
        "warning-500": "#FFB805",
        "warning-600": "#DB9703",
        "warning-700": "#B77902",
        "warning-800": "#935D01",
        "warning-900": "#7A4900",
        "danger-100": "#FFE7DA",
        "danger-200": "#FFC9B6",
        "danger-300": "#FFA491",
        "danger-400": "#FF8276",
        "danger-500": "#ff4949",
        "danger-600": "#DB3543",
        "danger-700": "#B7243E",
        "danger-800": "#931737",
        "danger-900": "#7A0E33"
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.2rem",
        xl: "1.44rem",
        "2xl": "1.728rem",
        "3xl": "2.074rem",
        "4xl": "2.488rem",
        "5xl": "2.986rem",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        intracom: {
          primary: '#89A5B3',
          success: '#3FEA64',
          info: '#2BB1FF',
          warning: '#FFB805',
          danger: '#ff4949'
        },
      },
    ],
  },
};
export default config;
