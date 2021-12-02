var fs = require('fs');


exports.readFile = function(filename){
    return fs.readFileSync(filename, 'utf-8');
}

exports.numSort = function( arr, order ){
    // Given an array, numerically sort the elements.
    ( order == 'desc' ) ? arr.sort( ( a, b ) => b-a ) : arr.sort( ( a, b ) => a-b );
    return arr;
}

exports.arrParseInt = function( arr ){
    // Given an array, convert each value to an int.
    return arr.map( num => { return parseInt( num ); } );
}

exports.arrParseNum = function( arr ){
    // Given an array, convert each value to a number.
    return arr.map( num => { return Number( num ); } );
}

exports.isPrime = function( num ){
    // Given a number, check if the number is prime.
    if( [1,2,3].includes( num ) ){ return true; }
    if( num < 1 || num % 2 == 0 ){ return false; }

    var factor = 3;

    while( factor <= Math.sqrt( num ) ){
        if( num % factor == 0 ){
            return false;
        }
        factor += 2;
    }

    return true;
}

exports.isFactor = function( number, factor1 ){
    // Given two numbers, determine if the second number is a factor of the first.
    if( number % factor1 == 0 ){ 
        return (number / factor1); 
    }
    return 0;
}

exports.arrProduct = function( arr ){
    // Given an array of numbers, return the product of all
    return arr.reduce( (total, num) => total * num );
}
