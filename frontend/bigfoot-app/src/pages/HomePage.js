import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext.js';
import BigfootData from '../components/BigfootData.js';
import Heatmap from '../components/Heatmap.js';
import BigfootTypes from '../components/BigfootTypes.js';
import { Container, Col, Row } from "react-bootstrap";

const HomePage = ({ isLoggedIn, handleLogout }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  return (
    <div>
      
      {
        user &&
        <div>
          <br />
          <Container>
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
            <BigfootData />
          </Container>
        </div>
      }
      {
        !isLoggedIn
        ?
        <div  style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
      }}>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <div>
            <Link to='/signup'>Signup</Link>
          </div>
        </div>
        :
        <button onClick={handleLogout}>Logout</button>
      }
    </div>
  );
};

export default HomePage;