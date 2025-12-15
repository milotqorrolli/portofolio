/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        'brutal-red': '#FF4500',    // Bright Orange-Red
        'brutal-blue': '#2A52BE',   // Cerulean Blue
        'brutal-yellow': '#FFD700', // Gold/Yellow
        'brutal-bg': '#F4F4F0',     // Off-white/Concrete
        'brutal-black': '#121212',  // Soft Black
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px #000000',
        'hard-xl': '8px 8px 0px 0px #000000',
        'hard-reverse': '-4px 4px 0px 0px #000000',
      },
    },
  },
  plugins: [],
} 