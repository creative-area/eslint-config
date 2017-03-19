ESLint Configuration for Creative-Area's Projects
=================================================

[![NPM][npm-image]][npm-url]
[![dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devDependency-image]][devDependency-url]

## Usage

Everything happens in `package.json`.

First, in the `devDependencies` object add the following properties:

```json
"eslint": "3.18.x",
"eslint-config-creative-area": "*"
```

Don't forget to `npm install`!

Then, create an object named `eslintConfig` as follows:

```javascript
"eslintConfig": {
    "extends": "creative-area/<ecma-version>",
    "env": {
        // ...
    }
},
```

## Configurations Available

- `creative-area/es3`
- `creative-area/es5`
- `creative-area/es6` same as `creative-area/es2015`
- `creative-area/es7` same as `creative-area/es2016`
- `creative-area/es8` same as `creative-area/es2017`

## License

These ESLint configurations are distributed under the MIT license.

[dependency-image]: https://img.shields.io/david/creative-area/eslint-config.svg?style=flat-square
[dependency-url]: https://david-dm.org/creative-area/eslint-config
[devDependency-image]: https://img.shields.io/david/dev/creative-area/eslint-config.svg?style=flat-square
[devDependency-url]: https://david-dm.org/creative-area/eslint-config?type=dev
[npm-image]: https://img.shields.io/npm/v/eslint-config-creative-area.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eslint-config-creative-area
