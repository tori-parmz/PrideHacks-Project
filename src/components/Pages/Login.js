import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

function Login() {
  const handleSignup = async () => {
    try {
      const response = await axios.post("/signup", {
        username: "John",
        email: "john@example.com",
        password: "password123",
      });
      console.log(response.data);
      // Redirect to another page after successful signup
      window.location.href = "/UserHome.js"; // Update the redirect path here
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>This is the Login</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={handleSignup}>
          Sign Up
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Login;
