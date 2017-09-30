/* eslint-disable complexity, max-lines, no-magic-numbers */

"use strict";

module.exports = ecmaVersion => {
    if ( ecmaVersion >= 2015 ) {
        // eslint-disable-next-line no-param-reassign
        ecmaVersion -= 2009;
    }
    const es5 = ecmaVersion >= 5;
    const es6 = ecmaVersion >= 6;
    return {
        "root": true,
        "parserOptions": {
            ecmaVersion,
        },
        "env": {
            es6,
        },
        "rules": {
            "for-direction": `off`,
            "getter-return": `error`,
            "no-await-in-loop": `error`,
            "no-compare-neg-zero": `error`,
            "no-cond-assign": [ `error`, `except-parens` ],
            "no-console": `error`,
            "no-constant-condition": `error`,
            "no-control-regex": `error`,
            "no-debugger": `error`,
            "no-dupe-args": `error`,
            "no-dupe-keys": `error`,
            "no-duplicate-case": `error`,
            "no-empty": [
                `error`,
                {
                    "allowEmptyCatch": true,
                },
            ],
            "no-empty-character-class": `error`,
            "no-ex-assign": `error`,
            "no-extra-boolean-cast": `error`,
            "no-extra-parens": `off`,
            "no-extra-semi": `error`,
            "no-func-assign": `error`,
            "no-inner-declarations": [ `error`, `both` ],
            "no-invalid-regexp": `error`,
            "no-irregular-whitespace": [
                `error`,
                {
                    "skipComments": false,
                    "skipRegExps": true,
                    "skipStrings": true,
                    "skipTemplates": true,
                },
            ],
            "no-obj-calls": `error`,
            "no-prototype-builtins": `off`,
            "no-regex-spaces": `error`,
            "no-sparse-arrays": `error`,
            "no-template-curly-in-string": `error`,
            "no-unexpected-multiline": `error`,
            "no-unreachable": `error`,
            "no-unsafe-finally": `error`,
            "no-unsafe-negation": `error`,
            "use-isnan": `error`,
            "valid-jsdoc": `warn`,
            "valid-typeof": `error`,

            "accessor-pairs": [
                `error`,
                {
                    "getWithoutSet": false,
                    "setWithoutGet": true,
                },
            ],
            "array-callback-return": `error`,
            "block-scoped-var": `error`,
            "class-methods-use-this": `error`,
            "complexity": [ `warn`, 10 ],
            "consistent-return": [
                `warn`,
                {
                    "treatUndefinedAsUnspecified": false,
                },
            ],
            "curly": [ `error`, `all` ],
            "default-case": `error`,
            "dot-location": [ `error`, `property` ],
            "dot-notation": [
                `error`,
                {
                    "allowKeywords": es5,
                    "allowPattern": `[^_]_+[^_]`,
                },
            ],
            "eqeqeq": [
                `error`,
                `always`,
                {
                    "null": `ignore`,
                },
            ],
            "guard-for-in": `off`,
            "no-alert": `error`,
            "no-caller": `error`,
            "no-case-declarations": `error`,
            "no-div-regex": `error`,
            "no-else-return": `error`,
            "no-empty-function": [
                `error`,
                {
                    "allow": [ `constructors` ],
                },
            ],
            "no-empty-pattern": `error`,
            "no-eq-null": `off`,
            "no-eval": [
                `error`,
                {
                    "allowIndirect": true,
                },
            ],
            "no-extend-native": [
                `error`,
                {
                    "exceptions": [ `Array`, `String` ],
                },
            ],
            "no-extra-bind": `error`,
            "no-extra-label": `error`,
            "no-fallthrough": `error`,
            "no-floating-decimal": `error`,
            "no-global-assign": `error`,
            "no-implicit-coercion": `error`,
            "no-implicit-globals": `error`,
            "no-implied-eval": `error`,
            "no-invalid-this": `error`,
            "no-iterator": `error`,
            "no-labels": `warn`,
            "no-lone-blocks": `error`,
            "no-loop-func": `error`,
            "no-magic-numbers": [
                `error`,
                {
                    "detectObjects": false,
                    "enforceConst": es6,
                    "ignore": [ -1, 0, 1 ],
                    "ignoreArrayIndexes": true,
                },
            ],
            "no-multi-spaces": `error`,
            "no-multi-str": `error`,
            "no-new": `error`,
            "no-new-func": `warn`,
            "no-new-wrappers": `error`,
            "no-octal": `error`,
            "no-octal-escape": `error`,
            "no-param-reassign": [
                `warn`,
                {
                    "props": true,
                },
            ],
            "no-proto": `error`,
            "no-redeclare": [
                `error`,
                {
                    "builtinGlobals": true,
                },
            ],
            "no-restricted-properties": [ `error` ],
            "no-return-assign": [ `error`, `except-parens` ],
            "no-return-await": `error`,
            "no-script-url": `error`,
            "no-self-assign": [
                `error`,
                {
                    "props": false,
                },
            ],
            "no-self-compare": `error`,
            "no-sequences": `error`,
            "no-throw-literal": `error`,
            "no-unmodified-loop-condition": `error`,
            "no-unused-expressions": `error`,
            "no-unused-labels": `error`,
            "no-useless-call": `error`,
            "no-useless-concat": `warn`,
            "no-useless-escape": `error`,
            "no-useless-return": `error`,
            "no-void": `warn`,
            "no-warning-comments": `warn`,
            "no-with": `error`,
            "prefer-promise-reject-errors": `error`,
            "radix": [ `error`, `as-needed` ],
            "require-await": `error`,
            "vars-on-top": `off`,
            "wrap-iife": [
                `error`,
                `inside`,
                {
                    "functionPrototypeMethods": true,
                },
            ],
            "yoda": [
                `error`,
                `never`,
                {
                    "exceptRange": true,
                },
            ],

            "strict": [ `error`, `safe` ],

            "init-declarations": `off`,
            "no-catch-shadow": `warn`,
            "no-delete-var": `error`,
            "no-label-var": `error`,
            "no-restricted-globals": [ `error` ],
            "no-shadow": [
                `warn`,
                {
                    "builtinGlobals": true,
                    "hoist": `all`,
                },
            ],
            "no-shadow-restricted-names": `warn`,
            "no-undef": [
                `error`,
                {
                    "typeof": false,
                },
            ],
            "no-undef-init": `error`,
            "no-undefined": `off`,
            "no-unused-vars": [
                `error`,
                {
                    "ignoreRestSiblings": true,
                },
            ],
            "no-use-before-define": `error`,

            "callback-return": `warn`,
            "global-require": `error`,
            "handle-callback-err": [ `error`, `error` ],
            "no-buffer-constructor": `error`,
            "no-mixed-requires": [
                `error`,
                {
                    "allowCall": true,
                },
            ],
            "no-new-require": `error`,
            "no-path-concat": `warn`,
            "no-process-env": `off`,
            "no-process-exit": `warn`,
            "no-restricted-modules": [ `error` ],
            "no-sync": `warn`,

            "array-bracket-newline": [
                `error`,
                {
                    "multiline": true,
                },
            ],
            "array-bracket-spacing": [ `error`, `always` ],
            "array-element-newline": `off`,
            "block-spacing": [ `error`, `always` ],
            "brace-style": [ `error`, `1tbs` ],
            "camelcase": [
                `error`,
                {
                    "properties": `always`,
                },
            ],
            "capitalized-comments": [ `error`, `never` ],
            "comma-dangle": [
                `error`,
                {
                    "arrays": es5 ? `always-multiline` : `never`,
                    "exports": `always-multiline`,
                    "functions": `never`,
                    "imports": `always-multiline`,
                    "objects": es5 ? `always-multiline` : `never`,
                },
            ],
            "comma-spacing": [
                `error`,
                {
                    "before": false,
                    "after": true,
                },
            ],
            "comma-style": [ `error`, `last` ],
            "computed-property-spacing": [ `error`, `always` ],
            "consistent-this": [ `error`, `self` ],
            "eol-last": [ `error`, `always` ],
            "func-call-spacing": [ `error`, `never` ],
            "func-name-matching": [ `error`, `always` ],
            "func-names": [ `error`, `never` ],
            "func-style": [
                `error`,
                `declaration`,
                {
                    "allowArrowFunctions": true,
                },
            ],
            "id-blacklist": [ `error` ],
            "id-length": [
                `error`,
                {
                    "min": 1,
                    "max": 24,
                    "properties": `always`,
                },
            ],
            "id-match": [ `error` ],
            "indent": [ `error`, 4 ],
            "jsx-quotes": [ `error`, `prefer-double` ],
            "key-spacing": [
                `error`,
                {
                    "beforeColon": false,
                    "afterColon": true,
                    "mode": `strict`,
                },
            ],
            "keyword-spacing": [
                `error`,
                {
                    "before": true,
                    "after": true,
                },
            ],
            "line-comment-position": [
                `error`,
                {
                    "position": `above`,
                },
            ],
            "linebreak-style": [ `error`, `unix` ],
            "lines-around-comment": `off`,
            "max-depth": [ `warn`, 4 ],
            "max-len": [ `error`, 120, 4 ],
            "max-lines": [
                `warn`,
                {
                    "max": 200,
                    "skipBlankLines": true,
                    "skipComments": true,
                },
            ],
            "max-nested-callbacks": [ `warn`, 3 ],
            "max-params": [ `warn`, 4 ],
            "max-statements": [ `warn`, 25 ],
            "max-statements-per-line": [
                `error`,
                {
                    "max": 1,
                },
            ],
            "multiline-ternary": `off`,
            "new-cap": `error`,
            "new-parens": `error`,
            "newline-per-chained-call": [
                `error`,
                {
                    "ignoreChainWithDepth": 2,
                },
            ],
            "no-array-constructor": `error`,
            "no-bitwise": `error`,
            "no-continue": `error`,
            "no-inline-comments": `error`,
            "no-lonely-if": `error`,
            "no-mixed-operators": [
                `error`,
                {
                    "allowSamePrecedence": true,
                    "groups": [
                        [
                            `+`, `-`, `*`, `/`, `%`, `**`,
                            `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`,
                            `==`, `!=`, `===`, `!==`, `>`, `>=`, `<`, `<=`,
                            `&&`, `||`,
                            `in`, `instanceof`,
                        ],
                    ],
                },
            ],
            "no-mixed-spaces-and-tabs": `error`,
            "no-multi-assign": `warn`,
            "no-multiple-empty-lines": [
                `error`,
                {
                    "max": 1,
                },
            ],
            "no-negated-condition": `error`,
            "no-nested-ternary": `warn`,
            "no-new-object": `error`,
            "no-plusplus": `off`,
            "no-restricted-syntax": [ `error` ],
            "no-tabs": `off`,
            "no-ternary": `off`,
            "no-trailing-spaces": `error`,
            "no-underscore-dangle": `off`,
            "no-unneeded-ternary": [
                `error`,
                {
                    "defaultAssignment": false,
                },
            ],
            "no-whitespace-before-property": `error`,
            "nonblock-statement-body-position": `off`,
            "object-curly-newline": [
                `error`,
                {
                    "ObjectExpression": {
                        "minProperties": 1,
                    },
                    "ObjectPattern": `never`,
                },
            ],
            "object-curly-spacing": [ `error`, `always` ],
            "object-property-newline": `error`,
            "one-var": [ `error`, `never` ],
            "one-var-declaration-per-line": [ `error`, `always` ],
            "operator-assignment": [ `error`, `always` ],
            "operator-linebreak": [ `error`, `after` ],
            "padded-blocks": `off`,
            "padding-line-between-statements": [
                `error`,
                {
                    "blankLine": `always`,
                    "prev": `directive`,
                    "next": `*`,
                },
                {
                    "blankLine": `always`,
                    "prev": `*`,
                    "next": `directive`,
                },
                {
                    "blankLine": `any`,
                    "prev": `directive`,
                    "next": `directive`,
                },
            ],
            "quote-props": [ `error`, `always` ],
            "quotes": [ `error`, es6 ? `backtick` : `double` ],
            "require-jsdoc": `off`,
            "semi": [ `error`, `always` ],
            "semi-spacing": [
                `error`,
                {
                    "after": true,
                    "before": false,
                },
            ],
            "semi-style": [ `error`, `last` ],
            "sort-keys": `off`,
            "sort-vars": [
                `error`,
                {
                    "ignoreCase": true,
                },
            ],
            "space-before-blocks": [ `error`, `always` ],
            "space-before-function-paren": [
                `error`,
                {
                    "anonymous": `never`,
                    "asyncArrow": `always`,
                    "named": `never`,
                },
            ],
            "space-in-parens": [ `error`, `always` ],
            "space-infix-ops": `error`,
            "space-unary-ops": [
                `error`,
                {
                    "nonwords": false,
                    "words": true,
                },
            ],
            "spaced-comment": [ `error`, `always` ],
            "switch-colon-spacing": [
                `error`,
                {
                    "after": true,
                    "before": false,
                },
            ],
            "template-tag-spacing": [ `error`, `always` ],
            "unicode-bom": [ `error`, `never` ],
            "wrap-regex": `off`,

            "arrow-body-style": [ `error`, `as-needed` ],
            "arrow-parens": [ `error`, `as-needed` ],
            "arrow-spacing": [
                `error`,
                {
                    "after": true,
                    "before": true,
                },
            ],
            "constructor-super": `error`,
            "generator-star-spacing": [
                `error`,
                {
                    "after": true,
                    "before": true,
                },
            ],
            "no-class-assign": `error`,
            "no-confusing-arrow": [
                `error`,
                {
                    "allowParens": true,
                },
            ],
            "no-const-assign": `error`,
            "no-dupe-class-members": `error`,
            "no-duplicate-imports": [
                `error`,
                {
                    "includeExports": true,
                },
            ],
            "no-new-symbol": `error`,
            "no-restricted-imports": [ `error` ],
            "no-this-before-super": `error`,
            "no-useless-computed-key": `error`,
            "no-useless-constructor": `error`,
            "no-useless-rename": `error`,
            "no-var": es6 ? `error` : `off`,
            "object-shorthand": [ `error`, es6 ? `always` : `never` ],
            "prefer-arrow-callback": es6 ? [
                `error`,
                {
                    "allowNamedFunctions": true,
                },
            ] : `off`,
            "prefer-const": es6 ? [
                `warn`,
                {
                    "destructuring": `any`,
                    "ignoreReadBeforeAssign": false,
                },
            ] : `off`,
            "prefer-destructuring": es6 ? [
                `error`,
                {
                    "array": true,
                    "object": true,
                },
                {
                    "enforceForRenamedProperties": false,
                },
            ] : `off`,
            "prefer-numeric-literals": es6 ? `error` : `off`,
            "prefer-rest-params": es6 ? `error` : `off`,
            "prefer-spread": es6 ? `error` : `off`,
            "prefer-template": es6 ? `error` : `off`,
            "require-yield": `error`,
            "rest-spread-spacing": [ `error`, `never` ],
            "sort-imports": [
                `error`,
                {
                    "ignoreCase": true,
                    "ignoreMemberSort": false,
                    "memberSyntaxSortOrder": [ `none`, `all`, `multiple`, `single` ],
                },
            ],
            "symbol-description": `error`,
            "template-curly-spacing": [ `error`, `always` ],
            "yield-star-spacing": [ `error`, `both` ],
        },
    };
};
