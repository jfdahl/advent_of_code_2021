#!/usr/bin/env node

// Puzzle URL: 

var lib = require('../lib'),
    result = {},
    sample = lib.readFile( 'input_sample.txt' ),
    input = lib.readFile( 'input.txt' ),
    print = console.log,
    table = console.table;
    

/*
 *  Main
 */ 

sample = cleanData( sample );
input = cleanData( input );

result[ 'Part 1' ] = { 'Sample Input': part1( sample ), 'Real Input': part1( input ) };
result[ 'Part 2' ] = { 'Sample Input': part2( sample ), 'Real Input': part2( input ) };

table( result );


/*
 * FUNCTIONS 
 */

function part1( input ){
    var answer = input;

    return answer;
}

function part2( input ){
    var answer = input;

    return answer;
}

function cleanData( input ){
    return input.split('\n');
}