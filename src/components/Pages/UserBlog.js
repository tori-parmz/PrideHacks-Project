// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';

// // importing the blog images
// import prideCelebration from '../../blog_images/pride_celebration.jpg';
// import prideFlags from '../../blog_images/pride_flag.jpg';
// import prideParade from '../../blog_images/pride_parade.jpg';
// import prideLove from '../../blog_images/pride_love.jpg';

// function UserBlog() {
//   return (
//     <Container>
//       <Row>
//         <Col xs={6}>
//           <Card>
//             <Card.Img variant="top" src={prideParade} height={280} />
//             <Card.Body>
//               <Card.Title> My First Pride Parade</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//               <Button variant="primary">Read more</Button>
//             </Card.Body>
//             <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//           </Card>
//         </Col>
//         <Col xs={6}>
//           <Card>
//             <Card.Img variant="top" src={prideCelebration} height={280} />
//             <Card.Body>
//               <Card.Title>My Pride Celebration</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//               <Button variant="primary">Read more</Button>
//             </Card.Body>
//             <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//           </Card>
//         </Col>
//     </Row>
//     <br />
//     <Row>
//         <Col xs={6}>
//           <Card>
//             <Card.Img variant="top" src={prideFlags} height={280} />
//             <Card.Body>
//               <Card.Title>Different Pride Flags</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//               <Button variant="primary">Read more</Button>
//             </Card.Body>
//             <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//           </Card>
//         </Col>
//         <Col xs={6}>
//           <Card>
//             <Card.Img variant="top" src={prideLove} height={280} />
//             <Card.Body>
//               <Card.Title>My First Love</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//               <Button variant="primary">Read more</Button>
//             </Card.Body>
//             <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//           </Card>
//         </Col>
//     </Row>
//     </Container>
//   );
// }

// export default UserBlog;
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./UserBlog.css"; // Import the CSS file

// importing the blog images
import prideCelebration from "../../blog_images/pride_celebration.jpg";
import prideFlags from "../../blog_images/pride_flag.jpg";
import prideParade from "../../blog_images/pride_parade.jpg";
import prideLove from "../../blog_images/pride_love.jpg";

function BlogCard({ title, imageSrc, content }) {
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <Card.Img variant="top" src={imageSrc} height={280} />
      <Card.Body className={expanded ? "expanded" : ""}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {expanded ? content : content.slice(0, 100) + "..."}
        </Card.Text>
        <Button variant="primary" onClick={handleReadMore}>
          {expanded ? "Read less" : "Read more"}
        </Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}

function UserBlog() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <BlogCard
            title="My First Pride Parade"
            imageSrc={prideParade}
            content="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
        </Col>
        <Col xs={12} md={6}>
          <BlogCard
            title="My Pride Celebration"
            imageSrc={prideCelebration}
            content="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12} md={6}>
          <BlogCard
            title="Different Pride Flags"
            imageSrc={prideFlags}
            content="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
        </Col>
        <Col xs={12} md={6}>
          <BlogCard
            title="My First Love"
            imageSrc={prideLove}
            content="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
        </Col>
      </Row>
    </Container>
  );
}

export default UserBlog;
