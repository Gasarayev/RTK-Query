import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useGetCategoriesApiQuery } from '../redux/categoriesApi';

function Header() {

    

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Categories</Nav.Link>
            <Nav.Link href="#features">Add Category</Nav.Link>
            <Nav.Link href="#pricing">Favorites</Nav.Link>
            <Nav.Link href="/basket">Basket</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
