import Form from 'react-bootstrap/Form';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Row, Col } from 'react-bootstrap';


function ChannelChat() {

    return(
        <>
        <Box sx={{width: '55%', }} id="text-frame">
        <Form>
        <div className='row'>
            <div className='col-9'>

      <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={3} id="text-area-style"/>
      </Form.Group>
      </div>
      <div className='col-3 mr-0 mt-2'>
      <Button type="submit" id="chat-button">
        Send
      </Button>
      </div>
      </div>
     </Form>
     </Box>
        
        </>

    );
}

export default ChannelChat;

