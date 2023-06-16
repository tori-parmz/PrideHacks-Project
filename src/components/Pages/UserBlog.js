import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserBlog() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>This is the User Blog</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default UserBlog;