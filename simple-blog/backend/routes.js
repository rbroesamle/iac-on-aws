const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const getUri = () => {
  const MONGODB_NAME = process.env.MONGODB_NAME;
  const MONGODB_DATABASE = process.env.MONGODB_DATABASE;
  const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
  const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
  const MONGODB_PORT = process.env.MONGODB_PORT;
  var uri = `mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_NAME}:${MONGODB_PORT}/${MONGODB_DATABASE}?authSource=admin`;
  return uri;  
}

const router = express.Router();

router.get("/getallposts", async (req, res) => {
  try {
    let client = await MongoClient.connect(getUri());
  
    let collection = client.db().collection("posts");
    let findings = await collection.find().toArray();
    let results = findings.map((item) => {
      return item.text;
    }).filter((item) => item != null);

    res.send(results).status(200);
      } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message });
  }
});

router.post("/post", async (req, res) => {
  try {
    let client = await MongoClient.connect(getUri());
  
    let collection = client.db().collection("posts");

    let newDocument = req.body;
    console.log(req);
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
