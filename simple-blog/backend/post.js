const { db } = require("./db");


exports.newPost = async (req, res) => {
  try {
    let collection = await db.collection("posts");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
    } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message });
  }
};

exports.allPosts = async (req, res) => {
  try {
    let collection = await db.collection("posts");
    let results = await collection.find({})
      .toArray();

    res.send(results).status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error" });
  }
}
