/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'], display: ['Space Grotesk', 'Inter', 'ui-sans-serif'] },
      boxShadow: { glow: '0 0 80px rgba(124, 58, 237, .20)' }
    }
  },
  plugins: []
}
