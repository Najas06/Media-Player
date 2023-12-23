import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" style={{color:"white"}}><i class="fa-solid fa-video text-warning me-2"></i> Media Player</Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
    </div>
  )
}

export default Header