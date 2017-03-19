/* eslint-disable no-console, no-sync */

"use strict";

const factory = require( `./factory` );
const fs = require( `fs` );
const path = require( `path` );
const versions = require( `../versions` );

versions.forEach( version => {
    console.log( `Generating for version ${ version }...` );
    fs.writeFileSync(
        path.resolve( __dirname, `..`, `es${ version }.json` ),
        JSON.stringify(
            factory( version ),
            null,
            `    `
        ),
        `utf8`
    );
} );
