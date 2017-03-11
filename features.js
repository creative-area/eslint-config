/* eslint-disable global-require, no-console, no-sync */

"use strict";

var fs = require( "fs" );
var path = require( "path" );

var features = {};
var fields = fs.readdirSync( path.resolve( __dirname, "features" ) );
var i;

function testRequire( requireExpression ) {
    var result;
    try {
        result = require( requireExpression );
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
