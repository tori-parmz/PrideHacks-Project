import Form from 'react-bootstrap/Form';


function ChannelChat() {

    return(
        <>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
        </>

    );
}

export default ChannelChat;

