const plugin = require('./index.js');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const cssMatcher = require('jest-matcher-css');

const generatePluginCss = (options = {}) => {
  return postcss(tailwindcss({
    corePlugins: false,
  }))
    .process('@tailwind utilities;', {
      from: undefined,
    })
    .then(result => result.css);
};

expect.extend({
  toMatchCss: cssMatcher,
});

test('it generates default underline styles', () => {
  generatePluginCss().then(css => {
    expect(css).toMatchCss(`
      .underline-solid {
        -webkit-text-decoration-style: solid;
                text-decoration-style: solid;
      }
      .underline-dotted {
        -webkit-text-decoration-style: dotted;
                text-decoration-style: dotted;
      }
      .underline-double {
        -webkit-text-decoration-style: double;
                text-decoration-style: double;
      }
      .underline-dashed {
        -webkit-text-decoration-style: dashes;
                text-decoration-style: dashes;
      }
      .underline-wavy {
        -webkit-text-decoration-style: wavy;
                text-decoration-style: wavy;
      }
    `);
  });
});
