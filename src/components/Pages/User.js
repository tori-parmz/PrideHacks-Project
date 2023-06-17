import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LeftHandNav from "../LeftHandNav/LeftHandNav";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { Form, Button } from "react-bootstrap";

function Layout() {
  return (
    <>
    <div className="App">
      <Navbar expand="lg" className="navbar">
        <Container fluid>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="justify-content-end">
            <Nav className="ms-auto">
            <Nav.Link href="#home">Notifications on/off</Nav.Link>
            <Nav.Link href="#home">Darkmode</Nav.Link>
            <Nav.Link href="#home">Logout</Nav.Link>
  
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id="search-bar"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1" id="left-nav-backgroud">
            <LeftHandNav />
          </div>
          <div className="col-9" id="app-col">
            <div className="App-header">
              {/* Outlet renders each page in the App-header div */}
              <Outlet />
            </div>
          </div>
          <div className="col-2" id="menu-col">
            <ProfileMenu />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Layout;
