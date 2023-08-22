/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': "url('/bg.svg')",
        'home': "url('/hero.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        "primary": "#182952",
        "secondary": "#7045AF",
        "cta": "#F8F0FF",

      },
      screens: {
        xs: "400px",
        sm: "650px",
        md: "769px",
        lg: "1025px",
        xl: "1201px",
      },
    },
  },
  plugins: [],
}
