import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Outlet } from "react-router-dom";

function User() {
    return (
        <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>This is User Layout</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
      <div className="App-header">
        {/* Outlet renders each page in the App-header div */}
        <Outlet />
      </div>
      </>
    );
  }
  
  export default User;