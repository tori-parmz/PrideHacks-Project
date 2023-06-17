import { React, Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class LandingPageCards extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      
      <div>
          <Card style={{height: '250px', padding: '10px', margin: '10px', borderRadius: '15px' }} >
          <Card.Body>
            <Card.Title style={{textAlign: 'center'}}>{this.props.cards.title}</Card.Title>
            <Card.Text>
              {this.props.cards.description}
            </Card.Text>
          </Card.Body>
      </Card>
      </div>
    );
  }
}

export default LandingPageCards;
