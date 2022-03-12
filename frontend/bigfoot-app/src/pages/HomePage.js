import React, { useContext, useState  } from 'react';
import UserContext from '../contexts/UserContext.js';
import BigfootData from '../components/BigfootData.js';
import Heatmap from '../components/Heatmap.js';
import BigfootTypes from '../components/BigfootTypes.js';
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import CarouselComponent from '../components/CarouselComponent.js';
import AddSighting from '../components/AddSighting.js';


  const HomePage = (props) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);


  const handleSignupThenLogin = () => {
      handleCloseSignup() 
      handleShowLogin()
  }


  return (
    <div>
      
      {
        !user
        ?
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
        :
        <div>
          <CarouselComponent stateSelected={props.stateSelected} setStateSelected={props.setStateSelected}/>
          <br />
          <Container>
          <Col>
          <Row>
              { props.stateSelected &&
                <BigfootData id="bigfoot-data" stateSelected={props.stateSelected}/>
              }
          </Row> 
          </Col>
          </Container>
          <Container className="mt-5" fluid="md">
            <Row>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <h3>Bigfoot Variations</h3>
                <br />
              </Col>
              <Col>
                <h3>Heatmap of Sightings</h3>
                <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <BigfootTypes />
              </Col>
              <Col>
                <Heatmap />
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <br />
          <Container>
            <Row>
            <AddSighting />
            </Row>
          </Container>
        </div>
      }
    </div>
  );
};

export default HomePage;