import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, Button, } from "react-bootstrap";

function Layout() {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Pride Hacks Project</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="blog">
                <Nav.Link>Blog</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
                <NavDropdown.Divider />
                <LinkContainer to="login">
                  <NavDropdown.Item>Login</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
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

      <div className="App-header">
        {/* Outlet renders each page in the App-header div */}
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
