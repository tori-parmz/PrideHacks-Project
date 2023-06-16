const express = require("express");
const bodyParser = require("body-parser");
const { OAuth2Client } = require("google-auth-library");
const path = require("path"); // Import the path module

const app = express();
app.use(bodyParser.json());

// In-memory storage for user data
let users = [];

// Google client configuration
const googleClientId = "YOUR_GOOGLE_CLIENT_ID";
const client = new OAuth2Client(googleClientId);

// Route for user signup
app.post("/signup", async (req, res) => {
  // Extract user information from request body
  const { username, email, password, idToken } = req.body;

  try {
    // Verify the Google ID token if available
    let googleId;
    if (idToken) {
      const ticket = await client.verifyIdToken({
        idToken,
        audience: googleClientId,
      });
      const payload = ticket.getPayload();
      googleId = payload.sub;
    }

    // Create a new user object
    const user = {
      id: users.length + 1,
      username,
      email,
      password,
      googleId,
    };

    // Add the user to the list of users
    users.push(user);

    // Redirect the user to another page after successful signup
    res.sendFile(path.resolve(__dirname, "../components/Pages/UserHome.js")); // Update the file path here
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(400).json({ message: "Error signing up" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
