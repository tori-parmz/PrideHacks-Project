import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { React, Component } from 'react';


class Blog extends Component {
  render () {
    return (
      <div 
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: '30%',
        marginTop: "150px",
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: 'Times New Roman',
        fontSize: '25px',
        padding: '15px'
      }}
      >
        <Card>
        <Card.Body>
          <Card.Text>
            Only members can view blogs. Login to view blogs
          </Card.Text>
          <div className="d-grid gap-2">
            <Button variant="primary" size='lg'>Login</Button>
          </div>  
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default Blog;
