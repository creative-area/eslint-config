/* eslint-disable global-require, no-console, no-sync */

"use strict";

function testRequire( requireExpression ) {
    var result;
    try {
        result = require( requireExpression );
    } catch ( error ) {
        result = false;
    }
    return result;
}

var path = require( "path" );

var features = {};
var files = require( "fs" ).readdirSync( __dirname );
var i;

for ( i = 0; i < files.length; i++ ) {
    if ( files[ i ] !== "index.js" ) {
        features[ path.basename( files[ i ], ".js" ) ] =
            testRequire( path.resolve( __dirname, files[ i ] ) );
    }
}

module.exports = features;

if ( require.main === module ) {
    console.log( features );
}
