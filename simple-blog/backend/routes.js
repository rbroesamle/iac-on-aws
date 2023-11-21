const express = require("express");
const ObjectId = require("mongodb").ObjectId;
const MongoClient = require("mongodb").MongoClient;
const MongoClientOptions = require("mongodb").MongoClientOptions;

// const MONGODB_NAME = process.env.MONGODB_NAME | "mongodb";
// const MONGODB_DATABASE = process.env.MONGODB_DATABASE | "mongodb";
// const MONGODB_USERNAME = process.env.MONGODB_USERNAME | "admin";
// const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD | "admin";
// const MONGODB_PORT = process.env.MONGODB_PORT | 27017;
const MONGODB_NAME = "localhost";
const MONGODB_DATABASE = "mongodb";
const MONGODB_USERNAME = "admin";
const MONGODB_PASSWORD = "admin";
const MONGODB_PORT = 27017;
var uri = `mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_NAME}:${MONGODB_PORT}/${MONGODB_DATABASE}?authSource=admin`;

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let client = await MongoClient.connect(uri);
  
    let collection = client.db().collection("posts");
    let results = await collection.find().toArray();
  
    res.send(results).status(200);
      } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    let client = await MongoClient.connect(uri);
  
    let collection = client.db().collection("posts");

    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;