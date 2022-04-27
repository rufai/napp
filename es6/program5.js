let userArray = process.argv.slice(2);

let containObject = {};

[, containObject.username, containObject.email] = userArray;

console.log(containObject);