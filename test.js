const _ = require('lodash');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const cssMatcher = require('jest-matcher-css');
const plugin = require('./index.js');

const generatePluginCss = (config) => {
  return postcss(
    tailwindcss(
      _.merge({
        theme: {
          screens: {
            'sm': '640px',
          },
        },
        corePlugins: false,
        plugins: [
          plugin,
        ],
      }, config)
    )
  )
  .process('@tailwind utilities', {
    from: undefined,
  })
  .then(result => {
    return result.css;
  });
};

expect.extend({
  toMatchCss: cssMatcher,
});

test('it should create default values for underline style', () => {
  return generatePluginCss({theme:{colors:{}}
  }).then(css => {
    expect(css).toMatchCss(`
      .underline-style-solid {
        text-decoration-style: solid;
      }
      .underline-style-dotted {
        text-decoration-style: dotted;
      }
      .underline-style-double {
        text-decoration-style: double;
      }
      .underline-style-dashed {
        text-decoration-style: dashed;
      }
      .underline-style-wavy {
        text-decoration-style: wavy;
      }
    `);
  });
});

test('it should create underline colours based on theme config', () => {
  return generatePluginCss({
    theme: {
      colors: {
        red: 'red',
        green: 'green',
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
        },
      }
    },
  }).then(css => {
    expect(css).toMatchCss(`
      .underline-style-solid {
        text-decoration-style: solid;
      }
      .underline-style-dotted {
        text-decoration-style: dotted;
      }
      .underline-style-double {
        text-decoration-style: double;
      }
      .underline-style-dashed {
        text-decoration-style: dashed;
      }
      .underline-style-wavy {
        text-decoration-style: wavy;
      }
      .underline-red {
        text-decoration-color: red;
      }
      .underline-green {
        text-decoration-color: green;
      }
      .underline-gray-100 {
        text-decoration-color: #f7fafc;
      }
      .underline-gray-200 {
        text-decoration-color: #edf2f7;
      }
    `);
  });
});

test('it should create underline thickness utilities based on theme config', () => {
  return generatePluginCss({
    theme: {
      colors:{},
      underlineThickness: {
        'thin': '2px',
        'thick': '5px'
      },
    },
  }).then(css => {
    expect(css).toMatchCss(`
      .underline-style-solid {
        text-decoration-style: solid;
      }
      .underline-style-dotted {
        text-decoration-style: dotted;
      }
      .underline-style-double {
        text-decoration-style: double;
      }
      .underline-style-dashed {
        text-decoration-style: dashed;
      }
      .underline-style-wavy {
        text-decoration-style: wavy;
      }
      .underline-thickness-thin {
        text-decoration-thickness: 2px;
      }
      .underline-thickness-thick {
        text-decoration-thickness: 5px;
      }
    `);
  });
});

test('it should create underline offset utilities based on theme config', () => {
  return generatePluginCss({
    theme: {
      colors:{},
      underlineOffset: {
        'small': '2px',
        'medium': '5px',
      }
    },
  }).then(css => {
    expect(css).toMatchCss(`
      .underline-style-solid {
        text-decoration-style: solid;
      }
      .underline-style-dotted {
        text-decoration-style: dotted;
      }
      .underline-style-double {
        text-decoration-style: double;
      }
      .underline-style-dashed {
        text-decoration-style: dashed;
      }
      .underline-style-wavy {
        text-decoration-style: wavy;
      }
      .underline-offset-small {
        text-underline-offset: 2px;
      }
      .underline-offset-medium {
        text-underline-offset: 5px;
      }
    `);
  });
});

test('it should create hover variant for underline colours ', () => {
  return generatePluginCss({
    theme: {
      colors: {
        red: 'red',
        green: 'green',
      }
    },
    variants: {
      underlineColors: ['hover'],
    }
  }).then(css => {
    expect(css).toMatchCss(`
      .underline-style-solid {
        text-decoration-style: solid;
      }
      .underline-style-dotted {
        text-decoration-style: dotted;
      }
      .underline-style-double {
        text-decoration-style: double;
      }
      .underline-style-dashed {
        text-decoration-style: dashed;
      }
      .underline-style-wavy {
        text-decoration-style: wavy;
      }
      .underline-red {
        text-decoration-color: red;
      }
      .underline-green {
        text-decoration-color: green;
      }
      .hover\\:underline-red:hover {
        text-decoration-color: red;
      }
      .hover\\:underline-green:hover {
        text-decoration-color: green;
      }
    `);
  });
});

test('it should create group-hover variant for underline colours ', () => {
  return generatePluginCss({
    theme: {
      colors: {
        red: 'red',
        green: 'green',
      }
    },
    variants: {
      underlineColors: ['group-hover'],
    }
  }).then(css => {
    expect(css).toMatchCss(`
      .underline-style-solid {
        text-decoration-style: solid;
      }
      .underline-style-dotted {
        text-decoration-style: dotted;
      }
      .underline-style-double {
        text-decoration-style: double;
      }
      .underline-style-dashed {
        text-decoration-style: dashed;
      }
      .underline-style-wavy {
        text-decoration-style: wavy;
      }
      .underline-red {
        text-decoration-color: red;
      }
      .underline-green {
        text-decoration-color: green;
      }
      .group:hover .group-hover\\:underline-red {
        text-decoration-color: red;
      }
      .group:hover .group-hover\\:underline-green {
        text-decoration-color: green;
      }
    `);
  });
});