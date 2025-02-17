 import React from 'react';
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav'; 
import logo from '../images/logo.png';
 function HeaderSec() {
  const navLinkStyle = { color: 'white' }; // Set text color to white

  return (
    <Navbar expand="lg" className="bg-dark">
      <img className="mb-5" src={logo} alt='logo' /> 
       
      <Navbar.Brand href="#home" style={{ color: 'white', fontSize:'69px' }}>WeatherSphere</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-3">
          <Nav.Link href="#today" stylse={navLinkStyle}>Today</Nav.Link>
          <Nav.Link href="#tomorrow" style={navLinkStyle}>Tomorrow</Nav.Link>
          <Nav.Link href="#MonthlyForecast" style={navLinkStyle}>MonthlyForecast</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderSec;