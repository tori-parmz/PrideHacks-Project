import Nav from 'react-bootstrap/Nav';
import * as React from 'react';


function ProfileMenu() {
    return (
    <div className='profile-menu'>
    <Nav className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
    </div>

    );
}

export default ProfileMenu;