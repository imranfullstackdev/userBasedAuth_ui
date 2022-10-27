import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context";
import Header from "./Header";
const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();
  const { email, password } = user;
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const body = { user };
      const Loginuser = await fetch(`http://localhost:8000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body.user),
      });
      console.log(Loginuser);
      const res = await Loginuser.json();
      console.log("ROLE IS", res.role);

      if (Loginuser.status === 200) {
        localStorage.setItem("Token", res.token);
        localStorage.setItem("role", res.role);
        // setrole(localStorage.getItem("role"));
        dispatch({ type: "role", payload: JSON.parse(localStorage.getItem('role'))});
        navigate("/AllUser");
      } else {
        alert(res.err);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={email}
            onChange={changeHandler}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
