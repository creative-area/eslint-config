ESLint Configuration for Creative-Area's Projects
=================================================

[![NPM][npm-image]][npm-url]
[![devDependency Status][devDependency-image]][devDependency-url]

## Usage

Everything happens in `package.json`.

First, in the `devDependencies` object add the following properties:

```json
"eslint": "3.17.x",
"eslint-config-creative-area": "*"
```

Don't forget to `npm install`!

Then, create an object named `eslintConfig` as follows:

```json
"eslintConfig": {
    "extends": "creative-area"
},
```

This will feature-detect language constructs available in your environment (template strings, arrow functions, etc) and adjust eslint's behaviour accordingly.

If you want to develop for down to a specific version of node, extend the following configurations :
- `creative-area/node/0` for 0.10 and 0.12
- `creative-area/node/4` for 4.x.x
- `creative-area/node/6` for 6.x.x
- `creative-area/node/8` for 8.x.x


## License

This ESLint configuration is distributed under the MIT license.

[devDependency-image]: https://img.shields.io/david/dev/creative-area/eslint-config.svg?style=flat-square
[devDependency-url]: https://david-dm.org/creative-area/eslint-config?type=dev
[npm-image]: https://img.shields.io/npm/v/eslint-config-creative-area.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eslint-config-creative-area
