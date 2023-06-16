import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

// importing the blog images
import prideCelebration from '../../blog_images/pride_celebration.jpg';
import prideFlags from '../../blog_images/pride_flag.jpg';
import prideParade from '../../blog_images/pride_parade.jpg';
import prideLove from '../../blog_images/pride_love.jpg';

function UserBlog() {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Card>
            <Card.Img variant="top" src={prideParade} height={280} />
            <Card.Body>
              <Card.Title> My First Pride Parade</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
          </Card>
        </Col>
        <Col xs={6}>
          <Card>
            <Card.Img variant="top" src={prideCelebration} height={280} />
            <Card.Body>
              <Card.Title>My Pride Celebration</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
          </Card>
        </Col>
    </Row>
    <br />
    <Row>
        <Col xs={6}>
          <Card>
            <Card.Img variant="top" src={prideFlags} height={280} />
            <Card.Body>
              <Card.Title>Different Pride Flags</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
          </Card>
        </Col>
        <Col xs={6}>
          <Card>
            <Card.Img variant="top" src={prideLove} height={280} />
            <Card.Body>
              <Card.Title>My First Love</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
          </Card>
        </Col>
    </Row>
    </Container>
  );
}

export default UserBlog;
