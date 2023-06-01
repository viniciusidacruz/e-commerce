/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '1.4rem',
      base: '1.6rem',
      xl: '2rem',
      '2xl': '2.4rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}
