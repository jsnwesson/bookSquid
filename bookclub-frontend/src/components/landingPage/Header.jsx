import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Header = () => {



  return (
  <Navbar bg="dark" variant="dark" className='navBar'>
    <Container fluid>
      <Row>
        <Col xs={6}>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        </Col>
        {/* <Col>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Col> */}
        <Col>
          <Form inline>
            <Container>
              <Row>
                <Col>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Col>
                <Col>
                  <Button variant="outline-info">Search</Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </Col>
      </Row>
    </Container>
  </Navbar>
  )


}

export default Header;
