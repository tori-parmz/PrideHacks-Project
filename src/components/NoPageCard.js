import { padding } from "@mui/system";
import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class NoPageCard extends Component {

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          width: "100%",
          marginTop: "130px",
          marginLeft: "350px",
          marginRight: "200px",
          fontFamily: "Times New Roman",
          fontSize: "25px",
          
        }}
      >

        <Card style={{ padding: '50px' }} >
            <Card.Body>
              <h1>404</h1>
              <Card.Text>
                <p>Whoops! Page does not exist.</p>
              </Card.Text>
            </Card.Body>
            <Button variant="primary">Home</Button>
        </Card>
        
    </div>
    );
  }
}

export default NoPageCard;