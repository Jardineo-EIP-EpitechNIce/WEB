import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Jardineo color palette - exact match with Flutter app
        jardineo: {
          // Main brand colors
          primary: '#1FA951',
          'primary-dark': '#176B3A',
          'primary-mid': '#1F8A4C',
          'primary-soft': '#E8F4EC',
          'primary-tint': '#F3FBF5',

          // Green variations
          green: '#16A34A',
          'green-dark': '#14532D',
          'green-soft': '#E6F8EE',
          mint: '#8EE4B7',

          // Surfaces & backgrounds
          surface: '#FFFFFF',
          'surface-variant': '#F3F4F6',
          border: '#E3E7DD',

          // Text & grayscale
          gray: '#4B5563',

          // Sky & accents
          sky: '#E6F7FF',
          gold: '#F6B93B',

          // Status colors
          success: '#10B981',
          error: '#B91C1C',
          danger: '#E24C4C',
          'danger-tint': '#FFE8EA',
          warning: '#FFD166',
          'warning-tint': '#FFF1C7',
          'warning-border': '#EEDCA6',
          'warning-text': '#7A4E00',
        },
      },
      borderRadius: {
        'jardineo': '12px',
      },
      fontWeight: {
        'jardineo-normal': '400',
        'jardineo-medium': '600',
        'jardineo-bold': '700',
      },
    },
  },
  plugins: [],
};

export default config;
