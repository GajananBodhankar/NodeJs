use("Aggregate");

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

// db.practice.find({ name: "Daniel" }, { name: 1, age: 1, address: 1 });

// To Find and make changes clearly
// db.practice.findAndModify({
//   query: { address: "Pen State" },
//   update: { name: "Daniel", age: 31, address: "Pen State" },
// });

// To enhanced version of modify
// db.practice.findOneAndUpdate({ name: "John" }, { $set: { age: 40 } });

// Count
// db.practice.find().count();

// *************************
// UPdate
// db.practice.update({ name: "Olivia" }, { $set: { age: 55 } });

// Delete

// db.practice.findOneAndDelete({ name: "Eva" });
// OR
// db.practice.deleteOne({name:'Alice'})

// TO DELETE ENTIRE DOCUMENTS, USE CAREFULLY
// db.practice.deleteMany({})
// db.practice.find({ age: { $ne: 25 } });

// db.practice.find({ $or: [{ name: "Gajanan" }, { age: 22 }] });

// db.users.insertMany(
//     [{
//             "index": NumberInt(0),
//             "name": "Aurelia Gonzales",
//             "isActive": false,
//             "registered": ISODate("2015-02-11T04:22:39+0000"),
//             "age": NumberInt(20),
//             "gender": "female",
//             "eyeColor": "green",
//             "favoriteFruit": "banana",
//             "company": {
//                 "title": "YURTURE",
//                 "email": "aureliagonzales@yurture.com",
//                 "phone": "+1 (940) 501-3963",
//                 "location": {
//                     "country": "USA",
//                     "address": "694 Hewes Street"
//                 }
//             },
//             "tags": [
//                 "enim",
//                 "id",
//                 "velit",
//                 "ad",
//                 "consequat"
//             ]
//         },
//         {
//             "index": NumberInt(1),
//             "name": "Kitty Snow",
//             "isActive": false,
//             "registered": ISODate("2018-01-23T04:46:15+0000"),
//             "age": NumberInt(38),
//             "gender": "female",
//             "eyeColor": "blue",
//             "favoriteFruit": "apple",
//             "company": {
//                 "title": "DIGITALUS",
//                 "email": "kittysnow@digitalus.com",
//                 "phone": "+1 (949) 568-3470",
//                 "location": {
//                     "country": "Italy",
//                     "address": "154 Arlington Avenue"
//                 }
//             },
//             "tags": [
//                 "ut",
//                 "voluptate",
//                 "consequat",
//                 "consequat"
//             ]
//         },
//         {
//             "index": NumberInt(2),
//             "name": "Hays Wise",
//             "isActive": false,
//             "registered": ISODate("2015-02-23T10:22:15+0000"),
//             "age": NumberInt(24),
//             "gender": "male",
//             "eyeColor": "green",
//             "favoriteFruit": "strawberry",
//             "company": {
//                 "title": "EXIAND",
//                 "email": "hayswise@exiand.com",
//                 "phone": "+1 (801) 583-3393",
//                 "location": {
//                     "country": "France",
//                     "address": "795 Borinquen Pl"
//                 }
//             },
//             "tags": [
//                 "amet",
//                 "ad",
//                 "elit",
//                 "ipsum"
//             ]
//         },
//         {
//             "index": NumberInt(3),
//             "name": "Karyn Rhodes",
//             "isActive": true,
//             "registered": ISODate("2014-03-11T03:02:33+0000"),
//             "age": NumberInt(39),
//             "gender": "female",
//             "eyeColor": "green",
//             "favoriteFruit": "strawberry",
//             "company": {
//                 "title": "RODEMCO",
//                 "email": "karynrhodes@rodemco.com",
//                 "phone": "+1 (801) 505-3760",
//                 "location": {
//                     "country": "USA",
//                     "address": "521 Seigel Street"
//                 }
//             },
//             "tags": [
//                 "cillum",
//                 "exercitation",
//                 "excepteur"
//             ]
//         },
//         {
//             "index": NumberInt(4),
//             "name": "Alison Farmer",
//             "isActive": false,
//             "registered": ISODate("2018-01-22T10:05:45+0000"),
//             "age": NumberInt(33),
//             "gender": "female",
//             "eyeColor": "brown",
//             "favoriteFruit": "banana",
//             "company": {
//                 "title": "OTHERSIDE",
//                 "email": "alisonfarmer@otherside.com",
//                 "phone": "+1 (902) 572-3954",
//                 "location": {
//                     "country": "Italy",
//                     "address": "356 Newkirk Placez"
//                 }
//             },
//             "tags": [
//                 "deserunt",
//                 "et",
//                 "duis",
//                 "dolor"
//             ]
//         },
//         {
//             "index": NumberInt(5),
//             "name": "Grace Larson",
//             "isActive": true,
//             "registered": ISODate("2014-04-20T11:37:23+0000"),
//             "age": NumberInt(20),
//             "gender": "female",
//             "eyeColor": "blue",
//             "favoriteFruit": "apple",
//             "company": {
//                 "title": "OVOLO",
//                 "email": "gracelarson@ovolo.com",
//                 "phone": "+1 (930) 510-3310",
//                 "location": {
//                     "country": "USA",
//                     "address": "932 Linden Street"
//                 }
//             },
//             "tags": [
//                 "fugiat",
//                 "minim"
//             ]
//         },
//         {
//             "index": NumberInt(6),
//             "name": "Carmella Morse",
//             "isActive": false,
//             "registered": ISODate("2014-06-08T11:20:22+0000"),
//             "age": NumberInt(39),
//             "gender": "female",
//             "eyeColor": "green",
//             "favoriteFruit": "apple",
//             "company": {
//                 "title": "SHEPARD",
//                 "email": "carmellamorse@shepard.com",
//                 "phone": "+1 (829) 478-3744",
//                 "location": {
//                     "country": "Germany",
//                     "address": "379 Tabor Court"
//                 }
//             },
//             "tags": [
//                 "amet",
//                 "cillum"
//             ]
//         },
//         {
//             "index": NumberInt(7),
//             "name": "Anastasia Blake",
//             "isActive": true,
//             "registered": ISODate("2016-07-01T02:32:46+0000"),
//             "age": NumberInt(40),
//             "gender": "female",
//             "eyeColor": "brown",
//             "favoriteFruit": "strawberry",
//             "company": {
//                 "title": "ZERBINA",
//                 "email": "anastasiablake@zerbina.com",
//                 "phone": "+1 (867) 563-3788",
//                 "location": {
//                     "country": "Italy",
//                     "address": "147 Montague Terrace"
//                 }
//             },
//             "tags": [
//                 "Lorem",
//                 "consequat",
//                 "ex",
//                 "pariatur",
//                 "labore"
//             ]
//         },
//         {
//             "index": NumberInt(8),
//             "name": "Dale Holman",
//             "isActive": false,
//             "registered": ISODate("2014-07-11T09:08:36+0000"),
//             "age": NumberInt(22),
//             "gender": "male",
//             "eyeColor": "green",
//             "favoriteFruit": "strawberry",
//             "company": {
//                 "title": "ISONUS",
//                 "email": "daleholman@isonus.com",
//                 "phone": "+1 (871) 452-3036",
//                 "location": {
//                     "country": "Italy",
//                     "address": "586 Blake Court"
//                 }
//             },
//             "tags": [
//                 "tempor",
//                 "aliqua",
//                 "duis"
//             ]
//         },
//         {
//             "index": NumberInt(9),
//             "name": "Tina Barnett",
//             "isActive": true,
//             "registered": ISODate("2015-03-09T11:16:38+0000"),
//             "age": NumberInt(39),
//             "gender": "female",
//             "eyeColor": "blue",
//             "favoriteFruit": "apple",
//             "company": {
//                 "title": "JETSILK",
//                 "email": "tinabarnett@jetsilk.com",
//                 "phone": "+1 (963) 569-3905",
//                 "location": {
//                     "country": "Germany",
//                     "address": "514 Lefferts Avenue"
//                 }
//             },
//             "tags": [
//                 "veniam",
//                 "proident"
//             ]
//         },
//         {
//             "index": NumberInt(10),
//             "name": "Belinda Zimmerman",
//             "isActive": true,
//             "registered": ISODate("2015-11-19T02:18:09+0000"),
//             "age": NumberInt(34),
//             "gender": "female",
//             "eyeColor": "green",
//             "favoriteFruit": "apple",
//             "company": {
//                 "title": "COMTRAK",
//                 "email": "belindazimmerman@comtrak.com",
//                 "phone": "+1 (899) 410-3073",
//                 "location": {
//                     "country": "France",
//                     "address": "259 Bergen Street"
//                 }
//             },
//             "tags": [
//                 "nisi",
//                 "officia",
//                 "nisi"
//             ]
//         },
//         {
//             "index": NumberInt(11),
//             "name": "Morrison Sheppard",
//             "isActive": false,
//             "registered": ISODate("2014-07-23T04:46:35+0000"),
//             "age": NumberInt(34),
//             "gender": "male",
//             "eyeColor": "green",
//             "favoriteFruit": "strawberry",
//             "company": {
//                 "title": "CANDECOR",
//                 "email": "morrisonsheppard@candecor.com",
//                 "phone": "+1 (825) 473-3920",
//                 "location": {
//                     "country": "USA",
//                     "address": "585 Wilson Street"
//                 }
//             },
//             "tags": [
//                 "culpa",
//                 "adipisicing",
//                 "veniam",
//                 "aliquip"
//             ]
//         },
//         {
//             "index": NumberInt(12),
//             "name": "Le Farley",
//             "isActive": false,
//             "registered": ISODate("2014-11-24T07:41:12+0000"),
//             "age": NumberInt(36),
//             "gender": "male",
//             "eyeColor": "green",
//             "favoriteFruit": "banana",
//             "company": {
//                 "title": "JAMNATION",
//                 "email": "lefarley@jamnation.com",
//                 "phone": "+1 (962) 402-3088",
//                 "location": {
//                     "country": "USA",
//                     "address": "613 Lewis Avenue"
//                 }
//             },
//             "tags": [
//                 "exercitation",
//                 "enim",
//                 "deserunt"
//             ]
//         },
//         {
//             "index": NumberInt(13),
//             "name": "Sharon Grimes",
//             "isActive": true,
//             "registered": ISODate("2017-12-22T01:04:16+0000"),
//             "age": NumberInt(28),
//             "gender": "female",
//             "eyeColor": "brown",
//             "favoriteFruit": "banana",
//             "company": {
//                 "title": "PHARMEX",
//                 "email": "sharongrimes@pharmex.com",
//                 "phone": "+1 (993) 428-2724",
//                 "location": {
//                     "country": "USA",
//                     "address": "427 Dictum Court"
//                 }
//             },
//             "tags": [
//                 "dolor",
//                 "eiusmod",
//                 "esse"
//             ]
//         },
//         {
//             "index": NumberInt(14),
//             "name": "Wendy Sampson",
//             "isActive": true,
//             "registered": ISODate("2017-03-28T04:46:20+0000"),
//             "age": NumberInt(20),
//             "gender": "female",
//             "eyeColor": "blue",
//             "favoriteFruit": "strawberry",
//             "company": {
//                 "title": "BUGSALL",
//                 "email": "wendysampson@bugsall.com",
//                 "phone": "+1 (822) 433-3614",
//                 "location": {
//                     "country": "France",
//                     "address": "864 Times Placez"
//                 }
//             },
//             "tags": [
//                 "non",
//                 "sunt",
//                 "officia"
//             ]
//         },
//         {
//             "index": NumberInt(15),
//             "name": "Newman Rodriquez",
//             "isActive": true,
//             "registered": ISODate("2017-09-19T11:25:18+0000"),
//             "age": NumberInt(29),
//             "gender": "male",
//             "eyeColor": "green",
//             "favoriteFruit": "strawberry",
//             "company": {
//                 "title": "PHARMACON",
//                 "email": "newmanrodriquez@pharmacon.com",
//                 "phone": "+1 (906) 591-2086",
//                 "location": {
//                     "country": "France",
//                     "address": "624 Madeline Court"
//                 }
//             },
//             "tags": [
//                 "ad",
//                 "in"
//             ]
//         },
//         {
//             "index": NumberInt(16),
//             "name": "Santana Preston",
//             "isActive": false,
//             "registered": ISODate("2014-05-23T12:41:39+0000"),
//             "age": NumberInt(40),
//             "gender": "male",
//             "eyeColor": "blue",
//             "favoriteFruit": "apple",
//             "company": {
//                 "title": "AQUAFIRE",
//                 "email": "santanapreston@aquafire.com",
//                 "phone": "+1 (861) 525-2717",
//                 "location": {
//                     "country": "France",
//                     "address": "133 Bushwick Avenue"
//                 }
//             },
//             "tags": [
//                 "ex",
//                 "magna",
//                 "qui",
//                 "laborum",
//                 "ad"
//             ]
//         },
//         {
//             "index": NumberInt(17),
//             "name": "Lupe Barry",
//             "isActive": false,
//             "registered": ISODate("2014-01-06T02:04:30+0000"),
//             "age": NumberInt(25),
//             "gender": "female",
//             "eyeColor": "green",
//             "favoriteFruit": "strawberry",
//             "company": {
//                 "title": "INVENTURE",
//                 "email": "lupebarry@inventure.com",
//                 "phone": "+1 (932) 434-2270",
//                 "location": {
//                     "country": "USA",
//                     "address": "244 Cleveland Street"
//                 }
//             },
//             "tags": [
//                 "enim",
//                 "deserunt",
//                 "ea",
//                 "mollit",
//                 "commodo"
//             ]
//         },
//         {
//             "index": NumberInt(18),
//             "name": "Mable Pratt",
//             "isActive": true,
//             "registered": ISODate("2016-04-22T11:00:05+0000"),
//             "age": NumberInt(32),
//             "gender": "female",
//             "eyeColor": "blue",
//             "favoriteFruit": "banana",
//             "company": {
//                 "title": "PARAGONIA",
//                 "email": "mablepratt@paragonia.com",
//                 "phone": "+1 (875) 523-3825",
//                 "location": {
//                     "country": "USA",
//                     "address": "767 Hendrix Street"
//                 }
//             },
//             "tags": [
//                 "excepteur",
//                 "et",
//                 "ullamco",
//                 "nisi",
//                 "magna"
//             ]
//         },
//         {
//             "index": NumberInt(19),
//             "name": "Mcguire Vincent",
//             "isActive": false,
//             "registered": ISODate("2017-01-28T01:53:06+0000"),
//             "age": NumberInt(24),
//             "gender": "male",
//             "eyeColor": "green",
//             "favoriteFruit": "strawberry",
//             "company": {
//                 "title": "ELENTRIX",
//                 "email": "mcguirevincent@elentrix.com",
//                 "phone": "+1 (924) 572-3321",
//                 "location": {
//                     "country": "USA",
//                     "address": "347 Sandford Street"
//                 }
//             },
//             "tags": [
//                 "do",
//                 "aute",
//                 "incididunt"
//             ]
//         },
//         {
//             "index": NumberInt(20),
//             "name": "Franco Ochoa",
//             "isActive": false,
//             "registered": ISODate("2016-08-02T04:15:34+0000"),
//             "age": NumberInt(35),
//             "gender": "male",
//             "eyeColor": "brown",
//             "favoriteFruit": "banana",
//             "company": {
//                 "title": "ARTWORLDS",
//                 "email": "francoochoa@artworlds.com",
//                 "phone": "+1 (922) 487-3093",
//                 "location": {
//                     "country": "Italy",
//                     "address": "838 Kane Place"
//                 }
//             },
//             "tags": [
//                 "eiusmod",
//                 "culpa"
//             ]
//         },
//         {
//             "index": NumberInt(21),
//             "name": "Leila Cervantes",
//             "isActive": false,
//             "registered": ISODate("2015-04-20T12:59:43+0000"),
//             "age": NumberInt(40),
//             "gender": "female",
//             "eyeColor": "brown",
//             "favoriteFruit": "banana",
//             "company": {
//                 "title": "NEPTIDE",
//                 "email": "leilacervantes@neptide.com",
//                 "phone": "+1 (982) 508-3965",
//                 "location": {
//                     "country": "USA",
//                     "address": "365 Berriman Street"
//                 }
//             },
//             "tags": [
//                 "ad",
//                 "eu",
//                 "ea",
//                 "labore",
//                 "quis"
//             ]
//         },
//         {
//             "index": NumberInt(22),
//             "name": "Agnes West",
//             "isActive": true,
//             "registered": ISODate("2014-03-26T01:38:01+0000"),
//             "age": NumberInt(39),
//             "gender": "female",
//             "eyeColor": "blue",
//             "favoriteFruit": "apple",
//             "company": {
//                 "title": "GEEKMOSIS",
//                 "email": "agneswest@geekmosis.com",
//                 "phone": "+1 (983) 462-2577",
//                 "location": {
//                     "country": "Italy",
//                     "address": "652 Johnson Street"
//                 }
//             },
//             "tags": [
//                 "sint",
//                 "sit"
//             ]
//         },
//         {
//             "index": NumberInt(23),
//             "name": "Bowman Whitaker",
//             "isActive": true,
//             "registered": ISODate("2014-06-28T04:39:11+0000"),
//             "age": NumberInt(21),
//             "gender": "male",
//             "eyeColor": "blue",
//             "favoriteFruit": "apple",
//             "company": {
//                 "title": "HELIXO",
//                 "email": "bowmanwhitaker@helixo.com",
//                 "phone": "+1 (992) 530-2197",
//                 "location": {
//                     "country": "Italy",
//                     "address": "878 Erasmus Street"
//                 }
//             },
//             "tags": [
//                 "adipisicing",
//                 "in"
//             ]
//         },
//         {
//             "index": NumberInt(24),
//             "name": "Roseann Conrad",
//             "isActive": false,
//             "registered": ISODate("2018-02-24T12:39:03+0000"),
//             "age": NumberInt(34),
//             "gender": "female",
//             "eyeColor": "blue",
//             "favoriteFruit": "apple",
//             "company": {
//                 "title": "SNORUS",
//                 "email": "roseannconrad@snorus.com",
//                 "phone": "+1 (983) 544-2622",
//                 "location": {
//                     "country": "Germany",
//                     "address": "735 Duffield Street"
//                 }
//             },
//             "tags": [
//                 "et",
//                 "minim",
//                 "exercitation",
//                 "amet"
//             ]
//         },
//         {
//             "index": NumberInt(25),
//             "name": "Bryant Thornton",
//             "isActive": true,
//             "registered": ISODate("2016-07-02T06:12:47+0000"),
//             "age": NumberInt(37),
//             "gender": "male",
//             "eyeColor": "green",
//             "favoriteFruit": "strawberry",
//             "company": {
//                 "title": "ZENCO",
//                 "email": "bryantthornton@zenco.com",
//                 "phone": "+1 (863) 499-2732",
//                 "location": {
//                     "country": "France",
//                     "address": "744 Poly Place"
//                 }
//             },
//             "tags": [
//                 "ut",
//                 "consectetur",
//                 "anim",
//                 "id",
//                 "velit"
//             ]
//         },
//         {
//             "index": NumberInt(26),
//             "name": "Maldonado Osborne",
//             "isActive": true,
//             "registered": ISODate("2015-09-10T01:38:41+0000"),
//             "age": NumberInt(31),
//             "gender": "male",
//             "eyeColor": "brown",
//             "favoriteFruit": "strawberry",
//             "company": {
//                 "title": "RECRISYS",
//                 "email": "maldonadoosborne@recrisys.com",
//                 "phone": "+1 (871) 540-3394",
//                 "location": {
//                     "country": "USA",
//                     "address": "804 Revere Place"
//                 }
//             },
//             "tags": [
//                 "elit",
//                 "est",
//                 "ex",
//                 "proident",
//                 "mollit"
//             ]
//         },
//         {
//             "index": NumberInt(27),
//             "name": "Herman David",
//             "isActive": true,
//             "registered": ISODate("2018-02-22T12:21:33+0000"),
//             "age": NumberInt(33),
//             "gender": "male",
//             "eyeColor": "blue",
//             "favoriteFruit": "strawberry",
//             "company": {
//                 "title": "LUNCHPAD",
//                 "email": "hermandavid@lunchpad.com",
//                 "phone": "+1 (946) 447-3775",
//                 "location": {
//                     "country": "Italy",
//                     "address": "230 Anthony Street"
//                 }
//             },
//             "tags": [
//                 "adipisicing",
//                 "dolore",
//                 "fugiat",
//                 "exercitation"
//             ]
//         },
//         {
//             "index": NumberInt(28),
//             "name": "Berta Case",
//             "isActive": true,
//             "registered": ISODate("2014-01-29T09:09:27+0000"),
//             "age": NumberInt(23),
//             "gender": "female",
//             "eyeColor": "brown",
//             "favoriteFruit": "strawberry",
//             "company": {
//                 "title": "TURNABOUT",
//                 "email": "bertacase@turnabout.com",
//                 "phone": "+1 (892) 445-2890",
//                 "location": {
//                     "country": "USA",
//                     "address": "802 Jefferson Avenue"
//                 }
//             },
//             "tags": [
//                 "velit",
//                 "est",
//                 "id",
//                 "proident"
//             ]
//         },
//         {
//             "index": NumberInt(29),
//             "name": "Abby Wallace",
//             "isActive": false,
//             "registered": ISODate("2016-07-25T06:30:13+0000"),
//             "age": NumberInt(40),
//             "gender": "female",
//             "eyeColor": "green",
//             "favoriteFruit": "apple",
//             "company": {
//                 "title": "ZIORE",
//                 "email": "abbywallace@ziore.com",
//                 "phone": "+1 (878) 459-2952",
//                 "location": {
//                     "country": "France",
//                     "address": "981 Hazel Court"
//                 }
//             },
//             "tags": [
//                 "commodo",
//                 "voluptate",
//                 "laborum",
//                 "dolor",
//                 "enim"
//             ]
//         },
//     ])

db.users.aggregate([{
    $group: {
        _id: "$gender",
        averageAge: {
            $avg: "$age"
        }
    }
}])

// db.users.aggregate([{
//     $group: {
//         _id: "$favoriteFruit",
//         count: {
//             $sum: 1
//         }
//     },

// }])

// db.users.aggregate([{
//     $group: {
//         _id: "$company.location.country",
//         count: {
//             $sum: 1
//         }
//     },
// }, {
//     $sort: {
//         count: -1
//     }
// }])

// db.users.aggregate([{
//     $group: {
//         _id: "$eyeColor"
//     }
// }])

// db.users.aggregate([{
//     $group: {
//         _id: "$tags",
//     }
// }, {
//     $count: 'tags'
// }])


// db.users.aggregate([{
//     $match: {
//         tags: 'enim',
//     }
// }, {
//     $count: 'tags'
// }])

// db.users.aggregate([{
//     $match: {
//         tags: 'velit',
//         isActive: false
//     }
// }, {
//     $project: {
//         name: 1,
//         age: 1
//     }
// }])

// db.users.aggregate([{
//     $match: {
//         "company.phone": {
//             $regex: /^\+1 \(940\)/i
//         }
//     }
// }])

// db.users.aggregate([{
//     $sort: {
//         registered: -1
//     },
// }, {
//     $limit: 2
// }, {
//     $project: {
//         name: 1,
//         registered: 1,
//         company: 1
//     }
// }])

// db.users.aggregate([{
//     $group: {
//         _id: "$favoriteFruit",
//         Totalusers: {
//             $push: '$name'
//         }
//     }
// }])

// db.users.aggregate([{
//     $group: {
//       _id: expression,
//       fieldN: {
//         accumulatorN: expressionN
//       }
//     }
// }])

// db.users.aggregate([{
//     $group: {
//         _id: "age",
//         average: {
//             $avg:"$age"
//         }
//     }
// }])