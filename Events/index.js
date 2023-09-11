const x = require("events");
const e = new x.EventEmitter();

e.on("name", () => console.log("hi"));
e.on("name", () => console.log("hello"));

e.emit("name");
