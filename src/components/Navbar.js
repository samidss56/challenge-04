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
import { Link } from "react-router-dom";

const NavbarComponent = ({ onSearchResults }) => {
  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      onSearchResults(query.results);
    }
  };

  return (
    <>
      <Navbar className="navbar" >
        <Container fluid>
          <Navbar.Brand className="logo text-danger mx-4" as={Link} to={"/"}>
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
                  variant="outline-danger"
                ></Form.Control>
              </Col>
            </Row>
          </Form>
          <Nav>
            <NavLink>
              <Button variant="outline-danger" className="login">
                Login
              </Button>
            </NavLink>
            <NavLink>
              <Button variant="danger" className="register">
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
