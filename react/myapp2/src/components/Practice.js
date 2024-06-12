const MongoClient = require("mongodb").MongoClient;
url = "";
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("new_db");
  dbo.createCollection("new_collection", function (err, res) {
    if (err) throw err;
    console.log("Collection created");
    db.close();
  });
});

const MongoClient = require("mongodb").MongoClient;
url = "";
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("new_db");
  var ob = [{}, {}];
  dbo.collection("new_collection").insertMany(ob, function (err, res) {
    if (err) throw err;
    console.log("Collection created");
    db.close();
  });
});
