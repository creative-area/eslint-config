"use strict";

var binary = 0b111110111;
var decimal = 503;
var octal = 0o767;
var hexadecimal = 0x1F7;

module.exports =
    ( binary === decimal ) &&
    ( octal === decimal ) &&
    ( hexadecimal === decimal );
