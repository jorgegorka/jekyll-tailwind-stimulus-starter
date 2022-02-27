module.exports = {
  content: ["./**/*.{html,md,markdown}"],
  theme: {
    extend: {
      colors: {
        logo: '#B6CDBB',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
