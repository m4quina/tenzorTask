var MongoClient = require("mongodb").MongoClient;
const mongoClient = require("mongodb").MongoClient;
const express = require('express');
const url = "mongodb+srv://mongodb:xgt97aZG83D@tenzorbd-dan97.mongodb.net/test?retryWrites=true";
const port = 5000;

const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {

  mongoClient.connect(url, {useNewUrlParser: true}, function (err, client) {

    const collection = client.db("tenzor").collection("data");

    if (err) return console.log(err);
    collection.find().toArray(function (err, results) {
      var text = "Name: " + results[0].name + "\n Name: " + results[1].name;
      res.send(text + "");
      console.log(results);
      client.close();
    });

  });

})

app.listen(port, () => {
  console.log(`Server run on ${port} port`)
})
