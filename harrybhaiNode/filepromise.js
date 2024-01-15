import fs from "fs/promises";

console.log("start");
let data = await fs.readFile("demo.txt", "utf-8");
console.log(data);

console.log("end");

let w = await fs.writeFile("demo.txt", "hello I am a promise data");
console.log(w);
console.log("write end");

let append = await fs.appendFile("demo.txt", "\n I am appended text");
console.log(append);
