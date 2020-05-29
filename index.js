const _ = require('lodash')

module.exports = () => {
  return ({ theme, addUtilities }) => {
    // Colours
    const colors = theme('colors')

    const underlineColors = _.map(colors, color => {
      return {
        [`.underline-${color}`]: {
            textDecorationColor: color,
        },
      }
    })

    // Thickness
    const thickness = theme('underlineThickness')

    const underlineThickness = _.map(thickness, (thickness, key) => {
      return {
        [`.underline-${key}`]: {
            textDecorationThickness: thickness,
        },
      }
    })

    // Offset
    const offset = theme('underlineOffset')

    const underlineOffset = _.map(offset, (offset, key) => {
      return {
        [`.underline-offset-${key}`]: {
          textUnderlineOffset: offset,
        },
      }
    })

    // Style
    const underlineStyle = {
      '.underline-solid': {
        textDecorationStyle: 'solid',
      },
      '.underline-dotted': {
        textDecorationStyle: 'dotted',
      },
      '.underline-double': {
        textDecorationStyle: 'double',
      },
      '.underline-dashed': {
        textDecorationStyle: 'dashed',
      },
      '.underline-wavy': {
        textDecorationStyle: 'wavy',
      }
    }

    // All
    const customUtils = [
      underlineColors,
      underlineThickness,
      underlineOffset,
      underlineStyle
    ]

    addUtilities(customUtils)
  }
}