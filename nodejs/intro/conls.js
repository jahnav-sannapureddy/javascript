console.log("Hello World!");
// passing an argument in command line

console.log("Passed arguments: ", process.argv, process.argv[2]);

// REPL - Read Eval Print Loop

// '_' in REPL
(function () { console.log("Self executing function ")})(); 

let calSum = (a, b) => a+b;

console.log(calSum(18, 19))