const _ = require('lodash')

module.exports = {
  theme: {
    colors: {
      'red': 'red',
      'green': 'green',
    },
    underlineThickness: {
      'thin': '2px',
      'thick': '5px',
    },
    underlineOffset: {
      'small': '2px',
      'medium': '5px',
    }
  },
  variants: {},
  plugins: [
    require('./index')()
  ],
}
