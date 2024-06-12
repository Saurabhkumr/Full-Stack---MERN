var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("student1");
  console.log("Database created");
  var ob = [
    { sno: 12, sname: "saurabh" },
    { sno: 2, sname: "anmol" },
  ];
  dbo.collection("fs_stud_mca23").insertMany(ob, function (err, res) {
    if (err) throw err;
    console.log("number of ducument in collection created" + res.insertedCount);
    db.close();
  });
});

// // Import the MongoDB client
// const MongoClient = require("mongodb").MongoClient;

// // MongoDB connection URL

// const url = "mongodb://localhost:27017";

// // Database name and collection name
// const dbName = "student";
// const collectionName = "mca_stud";

// // Connect to MongoDB
// MongoClient.connect(url, function(err, client) {
//     if (err) {
//         console.error("Error occurred while connecting to MongoDB:", err);
//         return;
//     }

//     console.log("Connected to MongoDB successfully");

//     // Access the database
//     const db = client.db(dbName);

//     // Access the collection
//     const collection = db.collection(collectionName);

//     // Find all documents in the collection
//     collection.find({}).toArray(function(err, documents) {
//         if (err) {
//             console.error("Error occurred while fetching documents:", err);
//             client.close();
//             return;
//         }

//         // Display the documents using a for loop
//         console.log("Documents in the collection:");
//         for (let i = 0; i < documents.length; i++) {
//             console.log(documents[i]);
//         }

//         // Close the connection
//         client.close();
//     });
// });
