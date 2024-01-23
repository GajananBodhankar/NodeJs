use("Sigma");

// let x = db.getCollection("practice").insertMany([
//   {
//     name: "John",
//     age: 25,
//     address: "New York",
//   },
//   {
//     name: "Alice",
//     age: 30,
//     address: "Los Angeles",
//   },
//   {
//     name: "Bob",
//     age: 28,
//     address: "Chicago",
//   },
//   {
//     name: "Emma",
//     age: 23,
//     address: "San Francisco",
//   },
//   {
//     name: "David",
//     age: 27,
//     address: "Miami",
//   },
//   {
//     name: "Sophia",
//     age: 26,
//     address: "Seattle",
//   },
//   {
//     name: "Ryan",
//     age: 24,
//     address: "Boston",
//   },
//   {
//     name: "Olivia",
//     age: 29,
//     address: "Dallas",
//   },
//   {
//     name: "Daniel",
//     age: 31,
//     address: "Houston",
//   },
//   {
//     name: "Eva",
//     age: 22,
//     address: "Atlanta",
//   },
// ]);

let response = db
  .getCollection("practice")
  .find({ name: "Bob" }, { _id: 1 })
  .toArray();
console.log(typeof response, response[0]._id);
