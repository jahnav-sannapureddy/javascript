// const arr1 = []
// const arr1 = new Array();

const arr1 = ['Red', 'Green', 'Blue'];
arr1.push('Yellow');
console.log(arr1);


let arr2 = new Array('Red', 'Blue', 'Green');
arr2.push('Yellow');
console.log(arr2);

let arr3 = new Array('White');
console.log(arr3);

let arr4 = new Array(3);
console.log(arr4)

let arr5 = [3];
console.log(arr5);

// array operations
console.info("Array Operations: ")
console.log(arr2);

//insertion
console.log("Inserting 'Black' to the end: ");
arr2.push('Balck');
console.log(arr2, arr2.length);

console.log("Inserting 'White' at the start: ");
arr2.unshift('White')
console.log(arr2, arr2.length);

//removal
console.log("Removing from end: ");
console.log("Removed item: ", arr2.pop());
console.log(arr2, arr2.length);

console.log("Removing from start: ")
console.log("Removed item: ", arr2.shift());
console.log(arr2, arr2.length);
