import { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


import NewsFeedCards from "../NewsFeedCards";

class Newsfeed extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        { 
          title: 'About Us',
          description: 'lore`m ipsum',
          link: 'https://www.google.com'
        },
        { 
          title: 'Our Mission',
          description: 'lorem ipsum',
          link: 'https://www.google.com'
        },
        { 
          title: 'Our Values',
          description: 'lorem ipsum',
          link: 'https://www.google.com'
        },
        { 
          title: 'Join Our Community',
          description: 'lorem ipsum',
          link: 'https://www.google.com'
        } 
      ]
    }
  }

  render () {
    
    let newsFeedCards = this.state.cards.map(cards => {
      return (
        <Col xs={12} md={6}>
          <NewsFeedCards cards={cards} />
          <br />
        </Col>
      )
    })

    return (
      <Container fluid>
        <Row>
          {newsFeedCards}
        </Row>
      </Container>
     );
   }
    
}
  
export default Newsfeed;