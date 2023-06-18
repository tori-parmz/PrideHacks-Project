import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function BlogEntryForm() {
  const [title, setTitle] = useState("");
  const [newPost, setNewPost] = useState("");

  const postToBlog = (e) => {
    e.preventDefault();

      const newDate = new Date(); //creates a date for the post
      const blogPost = {
        title: title,
        text: newPost,
        coverArt: albumArt || "./Assets/default-album-art.png",
        myReview: newReview,
        postDate: newDate.toDateString() //turns that date into formatted date string
      };

      setTitle("");
      setNewPost("");
      
    };
  

  return (
    <Form>
      <Form.Group className="mb-3" controlId="albumTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Blog Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        </Form.Group>
      <Form.Group className="mb-3" controlId="reviewInput">
          <Form.Control
            as="textarea"
            value={newPost}
            onChange={(e) => {
                setNewPost(e.target.value);
            }}
          />
          </Form.Group>
        
      <Button variant="primary" type="submit" onClick={postToBlog}>
        Submit
      </Button>
    </Form>
  );
}
