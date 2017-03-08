/* eslint no-console: off, no-sync: off */

"use strict";

var fs = require( "fs" );
var path = require( "path" );

var features = {};
var fields = fs.readdirSync( path.resolve( __dirname, "features" ) );
var i;
var localRequire = require;

function testRequire( requireExpression ) {
    var result;
    try {
        result = localRequire( requireExpression );
    } catch ( error ) {
        result = false;
    }
    return result;
}

for ( i = 0; i < fields.length; i++ ) {
    features[ path.basename( fields[ i ], ".js" ) ] = testRequire( path.resolve( __dirname, "features", fields[ i ] ) );
}

module.exports = features;

if ( require.main === module ) {
    console.log( features );
}
