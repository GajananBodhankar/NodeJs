import fs from "fs";

console.log("Start");
fs.writeFile("demo.txt", "Hello, I am demo file", (error, data) => {
  if (!error) {
    fs.readFile("demo.txt", "utf-8", (error, data) => {
      console.log("Successful and the data is", data);
    });
  } else {
    console.log("Write unsuccessful");
  }
});

// fs.writeFileSync("demo.txt", "HIiiiiiiiiiiiiii");
console.log("End");
