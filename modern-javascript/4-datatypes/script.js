// Primitive datatypes
/*

- STRING : sequence of chars
- NUMBER : ints & [floating-point] - 64-bit floating-point
- BOOLEAN : true or false
- NULL :  intentional absence of any object value
- UNDEFINED : A variable that has not yet been defined/assigned
- SYMBOL : built-in object whose constructor retunrn a unique symbol
- BIGINT : nums greater than number

*/
// Reference Type - Objects
/*

- non-primitive values
- when assigned to a variable, the variable is given a reference to that value
- object literals -  arrays, functions, etc.

*/

// JS - Dynamically Typed
// TypeScript - superset of JS, which allows STATIC TYPING


// String
const strn = 'Jahnav';

// Number
const num = 56;
const numf = 891.12;

// Boolean
const isOk  = true;

// Null
const heynull = null;

// Undefined
let undef;

const undefc = undefined;

// Symbol


// BigInt
const n = 46712n;
const n2 = 2345678127635242938n;

// Reference Types

const arr = [2, 3 ,1, 34, 2, 12];

const hey = {
    greeting: "Hello",
}

const func = function sayHello(){
    return "Hello";
}

const out = func;
console.log(out, typeof out);


// Primitives types are stored in STACK
// Reference types  are stored in HEAP (memory) but variable in stack

// Object types - heap