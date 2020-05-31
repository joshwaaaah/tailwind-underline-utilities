const _ = require('lodash')
const plugin = require('tailwindcss/plugin');

const flattenColorPalette = (colors) => {
  return _(colors)
    .flatMap((color, name) => {
      if (!_.isPlainObject(color)) {
        return [[name, color]]
      }

      return _.map(color, (value, key) => {
        const suffix = key === 'default' ? '' : `-${key}`
        return [`${name}${suffix}`, value]
      })
    })
    .fromPairs()
    .value()
}

module.exports = plugin(function({ theme, addUtilities }) {
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

  // Colours
  const colors = flattenColorPalette(
    theme('colors')
  )

  const underlineColors = _.map(colors, (color, key) => {
    return {
      [`.underline-${key}`]: {
          textDecorationColor: color,
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

  // Thickness
  const thickness = theme('underlineThickness')

  const underlineThickness = _.map(thickness, (thickness, key) => {
    return {
      [`.underline-${key}`]: {
          textDecorationThickness: thickness,
      },
    }
  })

  addUtilities(underlineStyle)
  addUtilities(underlineColors)
  addUtilities(underlineOffset)
  addUtilities(underlineThickness)
});
