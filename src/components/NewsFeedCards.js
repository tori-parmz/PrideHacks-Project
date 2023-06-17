import { React, Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class NewsFeedCards extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      
      <div>
          <Card style={{height: '250px', padding: '10px', margin: '10px', borderRadius: '15px', fontSize: '16px' }} >
          <Card.Body>
            <Card.Title style={{textAlign: 'center'}}>{this.props.cards.title}</Card.Title>
            <Card.Text>
              {this.props.cards.description}
            </Card.Text>
          </Card.Body>
          <Button variant="primary" href={this.props.cards.link} target="_blank">Read More</Button>
      </Card>
      </div>
    );
  }
}

export default NewsFeedCards;
