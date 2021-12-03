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
    var gamma = '', 
        epsilon = '',
        binaryLength = input[0].length,
        limit = input.length / 2,
        digits = [];

    for( var i=0; i<binaryLength; i++ ){
        digits[i] = '';
        input.forEach( function( item ){
            digits[i] += item[i];
        })

        if( (digits[i].match(/0/g) || []).length > limit ){
            gamma += '0';
            epsilon += '1';
        }
        else{
            gamma += '1';
            epsilon += '0';
        }
    }

    return parseInt( gamma, 2 ) * parseInt( epsilon, 2 );
}

function part2( input ){
    var bits, keeper, position,
        o2 = input.slice(0), 
        co2 = input.slice(0);

    position = 0;
    while( o2.length > 1 ){
        bits = getPositionalBits( o2, position );
        keeper = getCommonBit( bits );
        o2 = o2.filter( function( item ){ return item[position].match( keeper ); });
        table( [bits, keeper, o2] );
        position++;
    }
    o2 = parseInt( o2, 2 );
    
    position = 0;
    while( co2.length > 1 ){
        bits = getPositionalBits( co2, position );
        keeper = getCommonBit( bits ) == 1 ? 0 : 1;
        co2 = co2.filter( function( item ){ return item[position].match( keeper ); });
        table( [bits, keeper, co2] );
        position++;
    }
    co2 = parseInt( co2, 2 );

    return o2 * co2;
}

function cleanData( input ){
    return input.split('\n');
}

function getPositionalBits( input, position ){
    // Given a binary string, determine the more common bit.
    var digits = '';

    input.forEach( function( item ){
        digits += item[position];
    })

    return digits;
}

function getCommonBit( input ){
    // Given a binary string, determine the more common bit.
    var ones = (input.match(/1/g) || []).length;
    var zeros = (input.match(/0/g) || []).length;
    if( ones >= zeros ){ return '1'; }
    else{ return '0'; }
}

