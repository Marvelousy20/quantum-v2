/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      exbold: ['"Altone-ExtraBold"', 'sans-serif'],
      smbold: ['"Altone-SemiBold"', 'sans-serif'],
      boldn: ['"Altone-Bold"', 'sans-serif'],
      regular: ['"Altone-Regular"', 'sans-serif'],
      ce: ['"CoffeeExtra"', 'sans-serif']
    },
  },
  plugins: [],
};
