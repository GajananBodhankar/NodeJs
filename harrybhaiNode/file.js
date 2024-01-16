import fs from "fs";

console.log("Start");
fs.writeFile("demo.txt", "Hello, I am demo file", (error, data) => {
  if (!error) {
    console.log("Successful");
  } else {
    console.log("Write unsuccessful");
  }
});

fs.writeFileSync("demo.txt", "HIiiiiiiiiiiiiii");
console.log("End");

let res = fs.readFileSync("demo.txt", "utf-8");
console.log(res);

fs.readFile("demo.txt", "utf-8", (error, data) => {
  error ? console.log("Error") : console.log(data);
});

// To delete file
// fs.unlink("demo.txt", (error, data) => {
//   console.log(data, error);
// });

export let obj = {
  name: "gajanan",
  age: 22,
  location: "hyd",
};
