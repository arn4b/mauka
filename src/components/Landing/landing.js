import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Row, Col, Button } from 'react-bootstrap'
import '../Landing/landing.css'

export default function Landing() {
    return(
        <div>
            <Navbar variant="dark" collapseOnSelect expand="lg" fixed="top" style={{backgroundColor: '#0a1e32'}}>
            <img
                alt=""
                src="https://maukaeducation.com/static/img/logo3.png"
                width="70"
                className="d-inline-block align-top"
            />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                    className="my-2 my-lg-0 ml-auto"
                    style={{ maxHeight: '100px' }}
                    inline
                    >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">CohortOne</Nav.Link>
                    <NavDropdown title="Modules" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Communication</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Collaboration</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Creativity</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Critical Thinking</NavDropdown.Item>
                        
                    </NavDropdown>
                    <Nav.Link href="#action2">Talk to Us</Nav.Link>
                    <Nav.Link href="#action2">Join Now</Nav.Link>
                    <Nav.Link href="#action2">Login</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <div className="hero">
            <Container>
                <Row>
                    <Col style={{textAlign: 'left', paddingTop: '5rem'}}>
                        <h1>Mauka is building a playground for you.</h1><br/>
                        <h3>A professional playground for you to learn, discover, fail and grow with like minded people.</h3>
                        <br/>
                        <Button variant="light">JOIN NOW</Button> 
                    </Col>
                    <Col><img className="img-hero" src="./land-image.jpg" /></Col>
                </Row>
            </Container>
            </div>
        </div>
    );
}