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
    "extends": "creative-area/<environment>/<version>"
},
```

## Environments

### Browser

Here are the configurations available for browsers:
- `creative-area/browser/old` is compatible with any browser

### Node

Here are the configurations available for node:
- `creative-area/node/0` is compatible with 0.10 and up
- `creative-area/node/4` is compatible with 4.x.x and up
- `creative-area/node/6` is compatible with 6.x.x and up
- `creative-area/node/8` is compatible with 8.x.x and up
- `creative-area/node/current` will feature-detect language constructs available (template strings, arrow functions, etc) and adjust the configuration accordingly.

## "Manual" Configuration

You create a configuration by using the factory from inside your own `.eslintrc.js`. Like so:

```js
"use strict";

module.exports = require( "eslint-config-creative-area/factory" )( {
    "arrowFunctions": true,
    "destructuring": false,
    "dotKeywords": true,
    "hasMap": true,
    "isBrowser": false,
    "isNode": true,
    "lexicalDeclarators": true,
    "numericLiterals": true,
    "objectShorthands": true,
    "restParams": false,
    "spreadOperator": false,
    "templateStrings": true,
    "trailingComma": true,
} );
```

The object given to the factory function contains a list of features and environment detections:
- `arrowFunctions`: arrow functions
- `destructuring`: object and array destructuring
- `dotKeywords`: object dot notation with keywords
- `hasMap`: Map/Set classes
- `isBrowser`: running in a browser
- `isNode`: running in node
- `lexicalDeclarators`: `let` and `const`
- `numericalLiterals`: binary, octal and hexadecimal literals
- `objectShorhands`: shorthand method declarations
- `restParams`: function definition parameters resting
- `spreadOperators`: function call parameters spreading
- `templateStrings`: backtick string literals
- `trailingComma`: dangling commas in object and array literals

## License

These ESLint configurations are distributed under the MIT license.

[devDependency-image]: https://img.shields.io/david/dev/creative-area/eslint-config.svg?style=flat-square
[devDependency-url]: https://david-dm.org/creative-area/eslint-config?type=dev
[npm-image]: https://img.shields.io/npm/v/eslint-config-creative-area.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eslint-config-creative-area
