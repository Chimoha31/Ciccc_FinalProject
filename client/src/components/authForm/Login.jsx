import React, { useState } from "react";
import "../../styles/authForm/Login.scss";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErr, setShowErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrMsg("");
    if(email !== "" && password !== "") {
      navigate("/available_room");
    }else if(email === "" || password === ""){
      setErrMsg("Please fill in the blank")
      setShowErr(true);
    }
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <Form className="d-flex flex-column justify-content-center form_container" onSubmit={handleLoginSubmit}>
        <h1 className="text-center mb-5">Log in</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{fontSize: "1.2rem"}}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {showErr && !email ? <Form.Text className="text-danger">{errMsg}</Form.Text> : ""}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{fontSize: "1.2rem"}}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {showErr && !password ? <Form.Text className="text-danger">{errMsg}</Form.Text> : ""}
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
