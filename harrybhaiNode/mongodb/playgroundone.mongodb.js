use("Sigma");

// Inserted Data in MongoDB *****
// db.practice.insertMany([
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

db.practice.find({ name: "Daniel" }, { name: 1, age: 1, address: 1 });

// To Find and make changes clearly
// db.practice.findAndModify({
//   query: { address: "Pen State" },
//   update: { name: "Daniel", age: 31, address: "Pen State" },
// });

// To enhanced version of modify
// db.practice.findOneAndUpdate({ name: "John" }, { $set: { age: 40 } });

// Count
db.practice.find().count();

// *************************
// UPdate
// db.practice.update({ name: "Olivia" }, { $set: { age: 55 } });

// Delete

// db.practice.findOneAndDelete({ name: "Eva" });
// OR
// db.practice.deleteOne({name:'Alice'})

db.practice.find({ age: { $ne: 25 } });

db.practice.find({ $or: [{ name: "Gajanan" }, { age: 22 }] });
