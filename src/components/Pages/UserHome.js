import { React, Component } from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import LandingPageCards from "../LandingPageCards";

import landingPageImage from '../../assets/landing-page-header.png';
 

class UserHome extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        { 
          title: 'About Us',
          description: '[Insert Name] is an inclusive online platform designed to provide a supportive and nurturing space for LGBTQ+ individuals to freely express themselves and connect with like-minded community members.'
        },
        { 
          title: 'Our Mission',
          description: 'our mission is to create a virtual sanctuary where LGBTQ+ individuals can find acceptance, support, and empowerment. We are dedicated to fostering a safe and inclusive online community that celebrates diverse identities and provides a nurturing space for personal growth. Through educational resources, community engagement, and access to LGBTQ+-friendly services, we strive to empower individuals to embrace their true selves, build meaningful connections, and navigate the challenges they may face.'
        },
        { 
          title: 'Our Values',
          description: 'Inclusivity, Safety, Empowerment, Community, Education, Support, Acceptance, Growth, and Love. These values guide our actions and decisions at {Insert Name} as we work towards creating a supportive and empowering platform for LGBTQ+ individuals to thrive.'
        },
        { 
          title: 'Join Our Community',
          description: 'Join {Insert Name} today and embark on a journey of self-discovery, support, and empowerment. Together, we can foster a world where LGBTQ+ individuals feel safe, embraced, and celebrated for who they are.'
        } 
      ]
    }
  }

  render () {
    
    let landingPageCards = this.state.cards.map(cards => {
      return (
        <Col xs={12} md={6}>
          <LandingPageCards cards={cards} />
          <br />
        </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
        <img src={landingPageImage} className="landing-page-header" />
        </Row>
        <Row>
          {landingPageCards}
        </Row>
      </Container>
     );
   }
   
}

export default UserHome;
