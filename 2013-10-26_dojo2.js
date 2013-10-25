var assert = require("assert");

/**
 * four functions with two parameters:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * 
 * Must accept positive and negative Numbers (int or 
 * float) AND zero. Must not make an error!
 */
 
/**
 * testing addition():
 * one | two | out
 * ====+=====+====
 *  +1 | +1  | +2
 *  +1 | +0  | +1
 *  +1 | -1  | +0
 *  -1 | +1  | +0
 *  -1 | +0  | -1
 *  -1 | -1  | -2
 *  +0 | +1  | +1
 *  +0 | +0  | +0
 *  +0 | -1  | -1
 */
 
 //Adding addition function
function addition (a, b) {
    return (a + b);
}
 
// These are the tests for function addition
testAddition(+1, +1, +2, '+1 + +1 equals 2');

assert( addition(+1, +0) === +1, '+1 + +0 equals 1');  //=== exactly equal to (equal value and equal type)
assert( addition(+1, -1) === +0, '+1 + -1 equals 0');
assert( addition(-1, +1) === +0, '-1 + +1 equals 0');
assert( addition(-1, +0) === -1, '-1 + +0 equal -1');
assert( addition(-1, -1) === -2, '-1 + -1 = -2');
assert( addition(+0, +1) === +1, '+0 + +1 is 1');
assert( addition(+0, +0) === +0, '+0 + +0 equals 0');
assert( addition(+0, -1) === -1, '+0 + -1 equals -1');
 
/**
 * testing subtraction():
 * one | two | out
 * ====+=====+====
 *  +1 | +1  | +0
 *  +1 | +0  | +1
 *  +1 | -1  | +2
 *  -1 | +1  | -2
 *  -1 | +0  | -1
 *  -1 | -1  |  0
 *  +0 | +1  | -1
 *  +0 | +0  | +0
 *  +0 | -1  | +1
*/

// This is the subration function

var subtraction = function (a,b) {
    
    return (a - b);
}

// this is the first failing test for subtration
assert.equal(0, subtraction(1, 1), '1 - 1 = 0');

function testAddition(a, b, c, message){
    assert(addition(a, b) === c, message);
};
