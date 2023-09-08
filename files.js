const fs = require("fs");

//Create
fs.writeFileSync("read.txt", "Welcome to my node js");

//Update
fs.appendFileSync("read.txt", "\nMy name is gajanan");

//Read
const readBuf = fs.readFileSync("read.txt");
console.log(readBuf);
//Beacause if we mention utf-8, it will give string else gives buffer
const read = fs.readFileSync("read.txt", "utf-8");
console.log(read);

try {
  fs.copyFileSync("read.txt", "result.txt");
} catch {
  console.log("Failed to copy");
}

//Rename : Ensure to use callback in rename
fs.rename("read.txt", "file1.txt", (error) => {
  error ? console.log("Failed to rename") : console.log("Rename successful");
});

//Delete
// fs.unlinkSync('result.txt')