ESLint Configuration for Creative-Area's Projects
=================================================

[![NPM][npm-image]][npm-url]
[![dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devDependency-image]][devDependency-url]

## Usage

### `package.json`

First, add the following properties to the `devDependencies` object:

```json
"eslint": "<eslint-version>",
"eslint-config-creative-area": "<config-version>",
```

where `<eslint-version>` and `<config-version>` are typically the latest (`3.18.0` and `0.6.0` respectively as of this writing).

Don't forget to `npm install`!

Then, create an object named `eslintConfig` as follows:

```json
"eslintConfig": {
    "extends": "creative-area/<ecma-version>",
    "env": {
        "node": true
    }
},
```

where `<ecma-version>` is the desired language version (typically `es<current-year>` unless you work with an older version of nodejs). 

### `.eslintrc`

You can also create a `.eslintrc` file in a sub-folder that contains code for another environment. For instance, if you have some commonjs-formatted code that is supposed to run in es5-compatible browsers, you'd create a json-formatted `.eslintrc` file with the following content:

```json
{
    "extends": "creative-area/es5",
    "env": {
        "browser": true,
        "commonjs": true
    }
}
```

## Configurations Available

- `creative-area/es3`
- `creative-area/es5`
- `creative-area/es6` same as `creative-area/es2015`
- `creative-area/es7` same as `creative-area/es2016`
- `creative-area/es8` same as `creative-area/es2017`

## License

These ESLint configurations and the code used to generate them are distributed under the MIT license.

[dependency-image]: https://img.shields.io/david/creative-area/eslint-config.svg?style=flat-square
[dependency-url]: https://david-dm.org/creative-area/eslint-config
[devDependency-image]: https://img.shields.io/david/dev/creative-area/eslint-config.svg?style=flat-square
[devDependency-url]: https://david-dm.org/creative-area/eslint-config?type=dev
[npm-image]: https://img.shields.io/npm/v/eslint-config-creative-area.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eslint-config-creative-area
