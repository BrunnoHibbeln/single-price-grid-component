/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '106rem',
      },
      colors: {
        cyan: 'hsl(179, 62%, 43%)',
        'bright-yellow': 'hsl(71, 73%, 54%)',
        'light-gray': 'hsl(204, 43%, 93%)',
        'grayish-blue': 'hsl(218, 22%, 67%)',
      },
      fontFamily: {
        karla: ['var(--font-karla)'],
      },
      fontSize: {
        body: '1rem',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
}
