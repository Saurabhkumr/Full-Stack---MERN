var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("student");
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
