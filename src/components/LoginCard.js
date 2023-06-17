import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function LoginCard(props) {
    const { howdy, setNewHowdy } = props;
    const [howdyInput, setHowdyInput] = useState('');
    console.log(howdyInput);
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title> {howdy} This is the Login</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setHowdyInput(e.target.value)}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          <Button variant="primary" onClick={setNewHowdy(howdyInput)}>Go somewhere</Button>
        </Card.Body>
      </Card>
    );

}

export default LoginCard;