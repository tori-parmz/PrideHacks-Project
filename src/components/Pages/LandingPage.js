import { React, Component } from "react";
import { Card } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import LandingPageCards from "../LandingPageCards";

import landingPageImage from '../../landing_page_images/pride_parade.jpg';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        { 
          title: 'About Us',
          description: 'lorem ipsum'
        },
        { 
          title: 'Our Mission',
          description: 'lorem ipsum'
        },
        { 
          title: 'Our Values',
          description: 'lorem ipsum'
        },
        { 
          title: 'Join Our Community',
          description: 'lorem ipsum'
        } 
      ]
    }
  }

  render () {
    
    let landingPageCards = this.state.cards.map(cards => {
      return (
        <Col xs={6} md={2} lg={6}>
          <LandingPageCards cards={cards} />
          <br />
        </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
        <Card.Img src={landingPageImage} height={350} />
        </Row>
        <Row>
          {landingPageCards}
        </Row>
      </Container>
     );
   }
   
}

export default LandingPage;
