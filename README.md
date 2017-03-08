ESLint Configuration for Creative-Area's Projects
=================================================

## Usage

Everything happens in `package.json`.

First, in the `devDependencies` object add the following properties:

```json
"eslint": "3.17.x",
"eslint-config-creative-area": "*"
```

Then, create an object named `eslintConfig` as follows:

```json
"eslintConfig": {
    "extends": "creative-area"
},
```

Don't forget to `npm install`!

## License

This ESLint configuration is distributed under the MIT license.
