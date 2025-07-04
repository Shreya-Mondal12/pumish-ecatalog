/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        aptos: ['Aptos', 'Inter', 'sans-serif'],
      },
      colors: {
        // --- Beige & Dark Brown Palette ---
        background: '#E5DFBE',
        foreground: '#584130',
        primary: {
          DEFAULT: '#584130',
          foreground: '#E5DFBE'
        },
        secondary: {
          DEFAULT: '#E5DFBE',
          foreground: '#584130'
        },
        border: '#584130',
        input: '#E5DFBE',
        ring: '#584130',
        destructive: {
          DEFAULT: '#584130',
          foreground: '#E5DFBE'
        },
        muted: {
          DEFAULT: '#E5DFBE',
          foreground: '#584130'
        },
        accent: {
          DEFAULT: '#584130',
          foreground: '#E5DFBE'
        },
        popover: {
          DEFAULT: '#E5DFBE',
          foreground: '#584130'
        },
        card: {
          DEFAULT: '#E5DFBE',
          foreground: '#584130'
        },
        sidebar: {
          DEFAULT: '#584130',
          foreground: '#E5DFBE',
          primary: '#584130',
          'primary-foreground': '#E5DFBE',
          accent: '#E5DFBE',
          'accent-foreground': '#584130',
          border: '#584130',
          ring: '#E5DFBE'
        },
        // Optionally, add basic colors for utility
        white: '#ffffff',
        black: '#000000',
        beige: '#E5DFBE',
        darkbrown: '#584130',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        glow: '0 0 15px rgba(88,65,48,0.5), 0 0 25px rgba(88,65,48,0.75)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'slide-in': {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': {
            boxShadow:
              '0 0 8px rgba(88,65,48,0.4), 0 0 16px rgba(88,65,48,0.6)',
          },
          '50%': {
            boxShadow:
              '0 0 16px rgba(88,65,48,0.6), 0 0 32px rgba(88,65,48,0.8)',
          },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        kenburnsZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-in': 'slide-in 1.5s ease-in-out both',
        'border-glow': 'glow 2.5s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease-in-out infinite',
        'kenburns': 'kenburnsZoom 15s linear forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
