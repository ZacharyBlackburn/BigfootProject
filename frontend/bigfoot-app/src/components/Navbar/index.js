import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown, Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'


const BigfootNavbar = (props) => {
    const [show, setShow] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    const handleCloseSignup = () => setShowSignup(false);
    const handleShowSignup = () => setShowSignup(true);
    const handleCloseAndLogout = () => {
        handleClose() 
        props.handleLogout()
    }

    const handleSignupThenLogin = () => {
        handleCloseSignup() 
        handleShowLogin()
    }

    return (

    <>
    <Navbar collapseOnSelect expand="md">
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="#home">
                <img
                src="photos/bigfoot-tracker-logo.svg"
                height="30"
                className="d-inline-block align-top"
                alt="Bigfoot Tracker Logo"
                />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
                {
                    !props.user
                    ?
                    <>
                        <Nav.Link className="justify-content-end" onClick={handleShowSignup}>
                            Sign Up
                        </Nav.Link>
                        <Modal show={showSignup} onHide={handleCloseSignup}>
                        <Modal.Header closeButton>
                            <Modal.Title>Sign Up and Track Bigfoot</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={props.handleSignup}>
                        <Modal.Body>
                            
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control type="text" name='username' placeholder="Sasquatch Jr" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Password" />
                                </Form.Group>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseSignup}>
                            Cancel
                            </Button>
                            <Button variant="primary" type="submit" onClick={handleSignupThenLogin}>
                            Sign Up
                            </Button>
                        </Modal.Footer>
                        </Form>
                        </Modal>
                        
                        
                        <Nav.Link className="justify-content-end" onClick={handleShowLogin}>
                            Login
                        </Nav.Link>
                        <Modal show={showLogin} onHide={handleCloseLogin}>
                        <Modal.Header closeButton>
                            <Modal.Title>Login to Bigfoot Tracker</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={props.handleLogin}>
                        <Modal.Body>
                            
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name='username' placeholder="Enter username" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Password" />
                                </Form.Group>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseLogin}>
                            Cancel
                            </Button>
                            <Button variant="primary" type="submit" onClick={handleCloseLogin}>
                            Login
                            </Button>
                        </Modal.Footer>
                        </Form>
                        </Modal>
                    </>
                    :
                    <>
                    <Navbar.Text>
                            Signed in as: <a href="/">{props.user.username}</a>
                    </Navbar.Text>
                    <Nav.Item>
                    <Nav.Link onClick={handleShow}>
                    Logout
                    </Nav.Link>
                    </Nav.Item>

                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>We're sad to see you go! Bigfoot isn't sad about it though.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseAndLogout}>
                        Confirm Logout
                        </Button>
                    </Modal.Footer>
                    </Modal>
                    <DropdownButton class="dropdown-menu" align="end" title="View Sightings" id="dropdown-menu-align-end">
                        
                        <Dropdown.Item onClick={()=>props.setStateSelected("alabama")}>Alabama</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("alaska")}>Alaska</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("arizona")}>Arizona</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("arkansas")}>Arkansas</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("california")}>California</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Colorado")}>Colorado</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Connecticut")}>Connecticut</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Delaware")}>Delaware</Dropdown.Item>                     
                        <Dropdown.Item onClick={()=>props.setStateSelected("Florida")}>Florida</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Georgia")}>Georgia</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Hawaii")}>Hawaii</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Idaho")}>Idaho</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Illinois")}>Illinois</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Indiana")}>Indiana</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Iowa")}>Iowa</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Kansas")}>Kansas</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Kentucky")}>Kentucky</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Louisiana")}>Louisiana</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Maine")}>Maine</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Maryland")}>Maryland</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Massachusetts")}>Massachusetts</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Michigan")}>Michigan</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Minnesota")}>Minnesota</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Mississippi")}>Mississippi</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Missouri")}>Missouri</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Montana")}>Montana</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Nebraska")}>Nebraska</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Nevada")}>Nevada</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("New Hampshire")}>New Hampshire</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("New Jersey")}>New Jersey</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("New Mexico")}>New Mexico</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("New York")}>New York</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("North Carolina")}>North Carolina</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("North Dakota")}>North Dakota</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Ohio")}>Ohio</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Oklahoma")}>Oklahoma</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Oregon")}>Oregon</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Pennsylvania")}>Pennsylvania</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Rhode Island")}>Rhode Island</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("South Carolina")}>South Carolina</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("South Dakota")}>South Dakota</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Tennessee")}>Tennessee</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Texas")}>Texas</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Utah")}>Utah</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Vermont")}>Vermont</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Virginia")}>Virginia</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("washington")}>Washington</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("West Virginia")}>West Virginia</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Wisconsin")}>Wisconsin</Dropdown.Item>
                        <Dropdown.Item onClick={()=>props.setStateSelected("Wyoming")}>Wyoming</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>  
                    </>
                }
                
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    );
};

export default BigfootNavbar;