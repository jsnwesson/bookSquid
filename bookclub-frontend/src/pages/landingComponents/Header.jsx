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
import Login from '../../components/sessions/Login.jsx';
import SignOut from '../../components/sessions/SignOut.jsx';



const Header = (props) => {

  console.log(props.isLoggedIn)

  const onSignIn = () => {
    return null;
  }



  return (
<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
  <Navbar.Brand href="#home">LOGO HERE</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Form inline>
      <Row>
        <Col>
          <FormControl type="text" placeholder="Search Books, Authors or Genres" className=" mr-sm-2" />
        </Col>
        <Col>
          <Button variant="outline-success">Search</Button>
        </Col>
        <Col>
        {!props.isLoggedIn
        ? <Login setIsLoggedIn={props.setIsLoggedIn} setUidCookie={props.setUidCookie} setEmailCookie={props.setEmailCookie} />
        : <SignOut
            removeEmailCookie={props.removeEmailCookie}
            removeUidCookie={props.removeUidCookie}
            setIsLoggedIn={props.setIsLoggedIn}
          />

      }
        </Col>


      </Row>
    </Form>
  </Navbar.Collapse>
</Navbar>











  // <Navbar bg="dark" variant="dark" className='navBar'>
  //   <Container fluid>
  //     <Row className="border">
  //       <Col xs={6}>
  //         <Navbar.Brand href="#home">LOGO</Navbar.Brand>
  //       </Col>
  //       <Col>
  //         <Form inline>
  //           <Container>
  //             <Row>
  //               <Col>
  //                 <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  //               </Col>
  //               <Col>
  //                 <Button variant="outline-info">Search</Button>
  //               </Col>
  //             </Row>
  //           </Container>
  //         </Form>
  //       </Col>
  //     </Row>
  //   </Container>
  // </Navbar>
  )


}

export default Header;
