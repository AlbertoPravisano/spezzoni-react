import { MongoClient } from "mongodb";

const mongoClient = new MongoClient("mongodb://localhost:27017");

// https://www.mongodb.com/developer/languages/javascript/node-connect-mongodb/

mongoClient.connect(function (err) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  const db = mongoClient.db("mydatabase");
  const collection = db.collection("products");

  // Aggiunge un prodotto
  collection.insertOne(
    {
      name: "John Doe",
    },
    function (err, result) {
      if (err) {
        console.log(err);
        process.exit(1);
      }

      console.log("Prodotto aggiunto con successo. Id:", result.insertedId);
    }
  );
});
