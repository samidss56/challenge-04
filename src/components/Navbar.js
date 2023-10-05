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
      <Navbar className="navbar" bg="trasnparent navbar-expand-lg fixed-top p-2">
        <Container fluid>
          <Navbar.Brand className="logo text-danger mx-4" as={Link} to={"/"}>
            <h2>
              <strong style={{ marginLeft: "3.7rem" }}>MovieList</strong>
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
                  style={{background: "transparent", color: "white"}}
                  color="white"
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
              <Button
                variant="danger"
                className="register"
                style={{ marginRight: "4.8rem" }}
              >
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
