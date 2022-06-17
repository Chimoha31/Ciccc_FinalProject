import React from "react";
import "../../styles/authForm/Login.scss";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Form className="d-flex flex-column justify-content-center form_container">
        <h1 className="text-center">Log in</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">*Fill in the blank</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted">*Fill in the blank</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div>
          <p className="text-center mt-5">
            You don't have an account yet? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Login;
