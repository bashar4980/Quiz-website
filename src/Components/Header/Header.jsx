import React from "react";
import Container from "react-bootstrap/Container";
import {  NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import './Header.css'

import Navbar from "react-bootstrap/Navbar";


const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand  className="fw-bold">Quizadda</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
          
            <NavLink className="nav-link" to='/'>Home</NavLink>
            <NavLink className="nav-link" to='/statistics'>Statistics</NavLink>
            <NavLink className="nav-link" to='/blogs'>Blogs</NavLink>
           
            <Nav.Link href="/">Blog</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
           
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </div>
  );
};

export default Header;
