/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4C5FFB',
          light: '#E0EDFF',
          dark: '#293785'
        },
        secondary: {
          DEFAULT: '#FE8A01',
          light: '#FFF1E0',
          dark: '#7B330E'
        },
        accent: '#9810FA',
        success: '#10B881',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#9810FA',
        dark: {
          bg: {
            primary: '#202042',
            secondary: '#2A2A56',
            tertiary: '#2B284A'
          },
          text: {
            primary: '#F0F4F8',
            secondary: '#BBC7D4',
            tertiary: '#7E8FA1'
          },
          border: {
            primary: '#3A3973',
            secondary: '#62748E'
          }
        },
        light: {
          bg: {
            primary: '#F0F4F8',
            secondary: '#F8FAFC',
            tertiary: '#E2E8F0'
          },
          text: {
            primary: '#1F1F40',
            secondary: '#3A3973',
            tertiary: '#62748E'
          },
          border: {
            primary: '#BBC7D4',
            secondary: '#E2E8F0'
          }
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0', 
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'neu-light': '5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff',
        'neu-dark': '5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.05)'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #f43f5e, #f97316)',
        'gradient-secondary': 'linear-gradient(to right, #3b82f6, #06b6d4)',
        'gradient-tertiary': 'linear-gradient(to right, #06b6d4, #10b981)',
        'gradient-quaternary': 'linear-gradient(to right, #8b5cf6, #d946ef)'
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}