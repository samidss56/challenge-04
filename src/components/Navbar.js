import React from "react";
import {
  Button,
  Container,
  Navbar,
  Nav,
  Form,
  Row,
  Col,
  NavLink,
} from "react-bootstrap";
import { searchMovie } from "../api";

const NavbarComponent = ({ onSearchResults }) => {
  const search = async (q) => {
    console.log("Search function called with query:", q);
    if (q.length > 3) {
      const query = await searchMovie(q);
      onSearchResults(query.results);
    }
  };

  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand className="logo text-danger">
            <h2>
              <strong>MovieList</strong>
            </h2>
          </Navbar.Brand>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" Movie-search mr-sm-2"
                  onChange={({ target }) => search(target.value)}
                ></Form.Control>
              </Col>
            </Row>
          </Form>
          <Nav>
            <NavLink>
              <Button variant="success" className="login">
                Login
              </Button>
            </NavLink>
            <NavLink>
              <Button variant="primary" className="register">
                Register
              </Button>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
