const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://mralibekmurat27:2YfJYdhzD081ewtu@mymongodb.ltqngdh.mongodb.net/mymongodb?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

module.exports = { client, connectToDatabase };
