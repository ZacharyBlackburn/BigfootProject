import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'



const LandingPage = (props) => {

    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    // const [showAlert, setShowAlert] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    const handleCloseSignup = () => setShowSignup(false);
    const handleShowSignup = () => setShowSignup(true);
    // const handleShowAlert = () => setShowAlert(true);


    // if (showAlert) {
    //     return (
    //     <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
    //         <Alert.Heading>Your username or password is incorrect.</Alert.Heading>
    //         <p>
    //         Sometimes Bigfoot gets mistaken for the Abominable Snowman. Sometimes you mistake your username and password for the one you use on an Abominal Snowman tracking website.
    //         </p>
    //         <hr />
    //         <p className="mb-0">
    //         Click{' '} 
    //         <Alert.Link onClick={handleShowLogin}>here</Alert.Link>{' '} to try again.
    //         </p>
    //     </Alert>
    //     );
    // }
        

    // const handleCloseAndLogin = () => {
    //     handleCloseLogin() 
    //     if (props.loginError) {
    //         setShowAlert(true);
            
    //     }
    // }

    const handleSignupThenLogin = () => {
        handleCloseSignup() 
        handleShowLogin()
    }

    return (

    <>
          <Card className="text-center">
            <Card.Header>
              <img src="photos/bigfoot-tracker-logo.svg"
                height="100"
                className="d-inline-block align-top"
                alt="Bigfoot Tracker Logo" />
            </Card.Header>
            <Card.Body>
              <Card.Title>Login or Sign Up to Bigfoot Tracker</Card.Title>
              <Card.Text>
                We'll catch him... or her... or they... whatever it is, we'll get it. We need to be signed up first though.
              </Card.Text>
              <Button className="mr-1" variant="secondary" onClick={handleShowLogin}>Login</Button>
              <Button className="mr-1" variant="primary" onClick={handleShowSignup}>Sign Up</Button>
            </Card.Body>
            <Card.Footer className="text-muted">The world's best bigfoot tracker.</Card.Footer>
          </Card>          
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
                   
    );
}

export default LandingPage
