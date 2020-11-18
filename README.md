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

where `<eslint-version>` and `<config-version>` are typically the latest (`7.13.0` and `0.11.0` respectively as of this writing).

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

where `<ecma-version>` is the desired language version (typically `es<current-year>` unless you work with an older version of nodejs) followed by a slash (`/`) and the source type if above es6 (`module` or `script`).

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

## Available Configurations

- `creative-area/es3`
- `creative-area/es5`
- `creative-area/es6/module` same as `creative-area/es2015/module`
- `creative-area/es6/script` same as `creative-area/es2015/script`
- `creative-area/es7/module` same as `creative-area/es2016/module`
- `creative-area/es7/script` same as `creative-area/es2016/script`
- `creative-area/es8/module` same as `creative-area/es2017/module`
- `creative-area/es8/script` same as `creative-area/es2017/script`
- `creative-area/es9/module` same as `creative-area/es2018/module`
- `creative-area/es9/script` same as `creative-area/es2018/script`
- `creative-area/es10/module` same as `creative-area/es2019/module`
- `creative-area/es10/script` same as `creative-area/es2019/script`
- `creative-area/es11/module` same as `creative-area/es2020/module`
- `creative-area/es11/script` same as `creative-area/es2020/script`
- `creative-area/es12/module` same as `creative-area/es2021/module`
- `creative-area/es12/script` same as `creative-area/es2021/script`

## License

These ESLint configurations and the code used to generate them are distributed under the [MIT license][license-url].

[dependency-image]: https://img.shields.io/david/creative-area/eslint-config.svg?style=flat-square
[dependency-url]: https://david-dm.org/creative-area/eslint-config
[devDependency-image]: https://img.shields.io/david/dev/creative-area/eslint-config.svg?style=flat-square
[devDependency-url]: https://david-dm.org/creative-area/eslint-config?type=dev
[license-url]: https://raw.githubusercontent.com/creative-area/eslint-config/master/LICENSE.txt
[npm-image]: https://img.shields.io/npm/v/eslint-config-creative-area.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eslint-config-creative-area
