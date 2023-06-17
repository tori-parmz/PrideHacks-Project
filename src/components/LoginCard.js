import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function LoginCard() {

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: '30%',
        marginTop: "150px",
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: 'Times New Roman',
        fontSize: '25px'
    }}
    >
      <Card style={{padding: '90px'}}>
        <Button 
          variant="primary" size="lg" block
          >
            Log in with Google
        </Button>
        <br />
        <Button 
        
          variant="primary" size="lg" block
          >
          Log in with Discord
          </Button>
      </Card>
    </div>
  );
}

export default LoginCard;
