#!/usr/bin/env node

/**
 * Usage: ./commandLine.js [arg1] [arg2] ...
 */

const params = process.argv.slice(2);

function commandLine(arg) {
    // TODO: implementation
    console.log("Running function with arg: " + arg);
}

commandLine(...params);
