// Values stored in stack
const nam = 'Jahnav';
const age = 100
console.log(nam, age);

// Stored in heap
const hey = {
    geeting: "Hello",
};
console.log(hey);


let newNam = nam;
console.log(newNam);
newNam = 'Sannapureddy';
console.log(newNam);

let newHey  = hey;
console.log(newHey);

newHey.geeting = "Good Morning!";
console.log(newHey);

console.log(hey);