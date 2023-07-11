const express = require("express");
const { MongoClient } = require("mongodb");
const morgan = require("morgan");
const cors = require('cors');
const caravansData = require("./data.js");

const app = express();
const port = 3000;

const apiUrl = import.meta.env.VITE_API_URL;

const client = new MongoClient(apiUrl);

app.use(cors());
app.use(morgan("combined"));

// Connect to MongoDB and store data
async function main() {
  try {
    await client.connect();
    // await storeDataInDB(client, caravansData);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

// Store data in MongoDB
async function storeDataInDB(client, caravansData) {
  const session = client.startSession();

  try {
    await session.withTransaction(async () => {
      const collection = client.db("Caravans").collection("GeoLocationApp");
      const insertPromises = caravansData.map((caravan) =>
        collection.insertOne(caravan, { session })
      );

      const results = await Promise.all(insertPromises);
      const insertedIds = results.map((result) => result.insertedId);

      console.log(
        `${insertedIds.length} new listings created with the following id(s):`
      );
      console.log(insertedIds);
    });
  } finally {
    session.endSession();
  }
};

main().catch(console.error);

// Define API endpoint for fetching the data
app.get("/api/data", async (req, res) => {
  let client;

  try {
  client = new MongoClient(url);

    await client.connect();

    console.log("Connected to the database");

    const database = client.db("Caravans");
    const collection = database.collection("GeoLocationApp");

    const data = await collection.find().toArray();

    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    if (client) {
      client.close()
      console.log("Disconnected from the database");
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Call the main function to store the data and start the server
