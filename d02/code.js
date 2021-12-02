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
    var answer,
        position = [0,0]; // Horizontal, depth
    
    input.forEach( function( inst ){
        var direction = inst[0];
        var distance = inst[1];

        if( direction == 'forward' ){ 
            position[0] += distance;
        }

        else if( direction == 'up' ){ 
            position[1] -= distance;
        }

        else if( direction == 'down' ){ 
            position[1] += distance;
        }
        
    });

    answer = position[0] * position[1];

    return answer;
}

function part2( input ){
    var answer,
        position = [0,0],
        aim = 0;

        input.forEach( function( inst ){
            var direction = inst[0];
            var distance = inst[1];
    
            if( direction == 'forward' ){ 
                position[0] += distance;
                position[1] += ( distance * aim );
            }
    
            else if( direction == 'up' ){ 
                aim -= distance;
            }
    
            else if( direction == 'down' ){ 
                aim += distance;
            }
            
        });
    
        answer = position[0] * position[1];
    
    return answer;
}

function cleanData( input ){
    var data = [];
    
    input = input.split('\n');

    input.forEach( function( inst, idx, arr ){
        inst = inst.split(' ');

        data.push( [ inst[0], Number( inst[1] ) ] );;
    });

    return data;
}