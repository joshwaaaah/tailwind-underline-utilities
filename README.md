# Tailwind CSS Underline Utilities
A simple Tailwind plugin written to create underline utilities.

- [Underline style](#underline-style)
- [Underline colour](#underline-colour)
- [Underline thickness](#underline-thickness)
- [Underline offset](#underline-offset)

## Installation
To install, run `npm i tailwind-underline-utils` in your site's front-end directory. Then `require` the plugin within your Tailwind configuration file, for instance:

```
plugins: [
  require('tailwind-underline-utils')
]
```
## Configuration

### Underline Style
By default, the plugin will generate the following set of underline styles.
```
.underline-style-solid {
  text-decoration-style: 'solid';
}
.underline-style-dotted {
  text-decoration-style: 'dotted';
}
.underline-style-dotted {
  text-decoration-style: 'double';
}
.underline-style-dotted {
  text-decoration-style: 'dashed';
}
.underline-style-dotted {
  text-decoration-style: 'wavy';
}
```

### Underline Colour
The plugin will generate custom `text-decoration-color` values based on the theme's config. For example, the following colour configuration:
```
colors: {
  red: 'red',
  green: 'green',
}
```
will generate the following classes:
```
.underline-red {
  text-decoration-color: red;
}
.underline-green {
  text-decoration-color: green;
}
```

### Underline Thickness
The plugin also exposes an `underlineThickness` configuration object which can be added to the `theme` config. For example, the following configuration:
```
theme: {
  underlineThickness: {
    'thin': '2px',
    'thick': '5px'
  }
}
```
will generate the following CSS:
```
.underline-thickness-thin {
  text-decoration-thickness: 2px;
}
.underline-thickness-thick {
  text-decoration-thickness: 5px;
}
```

### Underline Offset
Finally, the plugin exposes an `underlineOffset` theme configuration object. For example, the following theme configuration:
```
theme: {
  underlineOffset: {
    'small': '2px',
    'medium': '5px',
  }
}
```
will generate the following CSS:
```
.underline-offset-small {
  text-underline-offset: 2px;
}
.underline-offset-medium {
  text-underline-offset: 5px;
}
```
