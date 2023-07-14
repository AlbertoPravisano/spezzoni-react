import { MongoClient } from "mongodb";

const mongoClient = new MongoClient("mongodb://localhost:27017");

// https://www.mongodb.com/developer/languages/javascript/node-connect-mongodb/

mongoClient.connect(function (err) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  const db = mongoClient.db("mydatabase");
  const collection = db.collection("users");

  // Aggiunge un utente
  collection.insertOne(
    {
      name: "John Doe",
      surname: "Doe",
      email: "johndoe@example.com",
      phone: "1234567890",
      city: "New York",
      birthday: "1980-01-01",
      password: "password123",
    },
    function (err, result) {
      if (err) {
        console.log(err);
        process.exit(1);
      }

      console.log("Utente aggiunto con successo. Id:", result.insertedId);
    }
  );
});

// Crea un database e una collezione
db.createUser({
  user: "myuser",
  pwd: "mypassword",
  roles: ["readWrite"],
});

db.createCollection("users");

// Aggiunge un utente
db.users.insertOne({
  name: "John Doe",
  surname: "Doe",
  email: "johndoe@example.com",
  phone: "1234567890",
  city: "New York",
  birthday: "1980-01-01",
  password: "password123",
});

// Ottiene un utente
db.users.findOne({
  id: ObjectId("5f66e49090737e0001000001"),
});

// Modifica un utente
db.users.updateOne(
  {
    _id: ObjectId("5f66e49090737e0001000001"),
  },
  {
    $set: {
      name: "Jane Doe",
      email: "janedoe@example.com",
      city: "Los Angeles",
    },
  }
);

// Rimuove un utente
db.users.deleteOne({
  _id: ObjectId("5f66e49090737e0001000001"),
});
