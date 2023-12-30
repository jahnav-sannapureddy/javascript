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


//transfromation

const convertToUpperCase = (text) => text.toUpperCase();

//map
console.log("Converting colors to uppercase using map which returns them as new array: ")

const newArray = arr2.map(convertToUpperCase);
console.log(newArray);


//filter
console.log("Filtering colors with letter 'l': ")
const chechIfItConatins = (text, letter) => text.includes(letter.toString());

const newArray2 = arr2.filter((color) => chechIfItConatins(color, 'l'));
console.log(newArray2);

// aggregation

//reduce
console.log("Getting concatenation of the colors using reduce() :")
const returnVal = arr2.reduce((prev, curr) => {
    prev = prev + " " + curr;
    return prev;
}, "Intial: ");

console.log(returnVal);
console.log(arr2);

//chaining
console.log("Chaining: ");
const newArray3 = arr2.filter((color) => chechIfItConatins(color, 'l'))
.map(convertToUpperCase).reduce((prev, curr)=>{
    prev.push(curr);
    return prev;
}, []);

console.log(newArray3);