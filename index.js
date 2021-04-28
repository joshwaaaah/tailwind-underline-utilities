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

module.exports = plugin(function({ theme, addUtilities, variants }) {
  // Style
  const underlineStyle = {
    '.underline-style-solid': {
      textDecorationStyle: 'solid',
    },
    '.underline-style-dotted': {
      textDecorationStyle: 'dotted',
    },
    '.underline-style-double': {
      textDecorationStyle: 'double',
    },
    '.underline-style-dashed': {
      textDecorationStyle: 'dashed',
    },
    '.underline-style-wavy': {
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
      [`.underline-thickness-${key}`]: {
          textDecorationThickness: thickness,
      },
    }
  })

  addUtilities(underlineStyle, variants('underlineStyle'))
  addUtilities(underlineColors, variants('underlineColors'))
  addUtilities(underlineOffset, variants('underlineOffset'))
  addUtilities(underlineThickness, variants('underlineThickness'))
});
