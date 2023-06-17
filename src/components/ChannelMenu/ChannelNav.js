import Accordion from 'react-bootstrap/Accordion';

function ChannelNav() {
  return (
    <Accordion id='channel-nav'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        <ul className='left-nav-list'>
        <li><a href='#'><p>One</p></a></li>
        <li><a href='#'><p>Two</p></a></li>
        <li><a href='#'><p>Three</p></a></li>
         </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ChannelNav;