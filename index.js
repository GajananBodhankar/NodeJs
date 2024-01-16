import { json } from "express";

console.log("Server started successfully");
let obj = { name: "gajanan" };
async function getData() {
  // check server.js post request
  let response = await fetch("http://localhost:3000/items", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json",
    },
  });
  let data = await response.json();
  console.log(data.data);
}
getData();
