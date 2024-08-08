import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Categories
            </Nav.Link>
            <Nav.Link href="#features">Add Category</Nav.Link>
            <Nav.Link href="#pricing">Favorites</Nav.Link>
            <Nav.Link as={Link} to="/basket">
              Basket
            </Nav.Link>
            <Nav.Link as={Link} to={"/Detail"}>
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
