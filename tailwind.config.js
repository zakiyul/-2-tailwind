module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'samping-kanan': "url('./bg.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
