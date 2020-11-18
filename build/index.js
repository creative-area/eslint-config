/* eslint-disable no-console */
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
    const data = factory( version );
    if ( data.parserOptions.sourceType === `script` ) {
        fs.writeFileSync(
            path.resolve( __dirname, `..`, `es${ version }.json` ),
            JSON.stringify( data, null, `    ` ),
            `utf8`
        );
    } else {
        try {
            fs.mkdirSync( path.resolve( __dirname, `..`, `es${ version }` ) );
        } catch ( e ) {}
        fs.writeFileSync(
            path.resolve( __dirname, `..`, `es${ version }/module.json` ),
            JSON.stringify( data, null, `    ` ),
            `utf8`
        );
        data.parserOptions.sourceType = `script`;
        fs.writeFileSync(
            path.resolve( __dirname, `..`, `es${ version }/script.json` ),
            JSON.stringify( data, null, `    ` ),
            `utf8`
        );
    }
} );
