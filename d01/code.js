#!/usr/bin/env node

// Puzzle URL: 

var lib = require('../lib'),
    result = {},
    sample = lib.readFile( 'input_sample.txt' ).split( '\n' ),
    input = lib.readFile( 'input.txt' ).split( '\n' ),
    print = console.log,
    table = console.table;
    

/*
 *  Main
 */

result[ 'Part 1' ] = { 'Sample Input': part1( sample ), 'Real Input': part1( input ) };
result[ 'Part 2' ] = { 'Sample Input': part2( sample ), 'Real Input': part2( input ) };

table( result );

/*
 * FUNCTIONS 
 */


function part1( input ){
    var previousDepth = 0,
        count = 0;

    input.forEach( function( depth, idx ){
        depth = Number( depth );

        if( idx > 0 && depth > previousDepth ){
            count++;
        }
        previousDepth = depth;
    });

    return count;
}

function part2( input ){
    var count = 0,
        limit = input.length - 2,
        previousSum = 0;

    input.forEach( function( depth, idx, arr ){

        if( idx >= limit ){ return false; }

        var sum = Number(arr[idx]) + Number(arr[idx+1]) + Number(arr[idx+2]);

        print( sum );

        if( idx > 0 && sum > previousSum ){
            count++;
        }
        previousSum = sum;

    });

    return count;
}

