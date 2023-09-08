const fs = require("fs");

fs.writeFile("ReadAsync.txt", "This is read async", (error) =>
  error ? console.log("Error") : console.log("Successful")
);

fs.appendFile(
  "ReadAsync.txt",
  "\nAppended text",
  (error) => error && console.log("error")
);
fs.readFile("ReadAsync.txt", "utf-8", (error, data) =>
  error ? console.log("Error") : console.log(data)
);
