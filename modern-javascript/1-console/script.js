console.log(console);

console.log("Console Logging");

console.error("Example: Error occurred");

// console.clear()

console.warn("Example: Warning");

console.group();
console.error("Group 1");
console.log("Group 1");
console.warn("Group 1");
console.groupEnd();

console.info("Example: info");


console.table({"Name": "Jahnav Sannapureddy", "Age": 100, "Hahhaa": "🤯"});
console.table([{"Name": "Jahnav Sannapureddy", "Age": 100, "Hahhaa": ["🤯", "🙁", "☹️"]},
     {"Hoho": "Heheh", "Name": "Testing"}]);

const styles = "padding: 8px; color: blue; font-size: 24px; background-color: lightgreen;";
console.log("%cHello World!", styles);