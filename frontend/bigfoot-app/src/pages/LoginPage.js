import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const Login = ({isLoggedIn, handleLogout, handleLogin}) => {

  if (isLoggedIn) {
    return <div>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  }

  return (
    <div>
    <h1>Login Page</h1>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  }}>
      <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" name='username' placeholder="Enter username" />
    <Form.Text className="text-muted">
      Make it a good one.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </div>
    </div>
  );
};

export default Login;

