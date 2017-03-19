/* eslint-disable no-console, no-sync */

"use strict";

const factory = require( `./factory` );
const fs = require( `fs` );
const path = require( `path` );

const versions =
    fs.readFileSync( path.resolve( __dirname, `versions.txt` ), `utf8` )
        .trim()
        .split( /\s+/g )
        .map( string => Number( string ) );

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
