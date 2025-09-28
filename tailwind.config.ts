import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand tokens
        'navy': '#0E1525',
        'olive': '#708238',
        'copper': '#B87333',
        'off-white': '#F3EDE4',
        'slate': '#121926',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'sans': ['system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '24px',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at center, rgba(112, 130, 56, 0.1) 0%, rgba(184, 115, 51, 0.05) 50%, transparent 100%)',
        'olive-copper': 'linear-gradient(135deg, #708238 0%, #B87333 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

