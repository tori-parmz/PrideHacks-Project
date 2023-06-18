import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import LoginCard from "../LoginCard";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "30%",
        marginTop: "150px",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "25px",
        
      }}
    >
      <Card style={{padding: '40px'}}>
        <Card.Body>
          <Card.Text>
            Only members can view blogs. Login to view blogs
          </Card.Text>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={handleLoginClick}>
              Login
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
