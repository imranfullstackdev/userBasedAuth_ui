import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    Cpassword: "",
    phonenumber: "",
    qualification: "",
    work: "",
  });
  const navigate=useNavigate()
  const { name, email, password, Cpassword, phonenumber, qualification, work } =
    data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const body = { data };
      console.log(body);
      const addUser = await fetch("http://localhost:8000/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body.data),
      });
      const res =await addUser.json();
      if(addUser.status===200){
        alert('User added sucessfully')
        navigate('/')
      }
      console.log(res);
      console.log(addUser);
    } catch (error) {
      console.log(error);
    }
  };
  return (
      <div className="align-items-center justify-content-center mt-5">
        <h3><b><u>REGISTER</u></b></h3>
      <Form onSubmit={submitHandler}>
        <div className="d-flex m-5">
          <Form.Group className="mb-3 m-3 m-2" controlId="formBasicEmail">
            <Form.Label>NAME:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={changeHandler}
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group className="mb-3 m-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={email}
              onChange={changeHandler}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3 m-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={changeHandler}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3 m-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="Cpassword"
              value={Cpassword}
              onChange={changeHandler}
              placeholder="Password"
            />
          </Form.Group>
        </div>
        <div className="d-flex p-5">
          <Form.Group className="mb-3 m-3" controlId="formBasicPassword">
            <Form.Label>PHONE NUMBER:</Form.Label>
            <Form.Control
              type="tel"
              name="phonenumber"
              value={phonenumber}
              onChange={changeHandler}
              placeholder="Password"
            />
          </Form.Group>{" "}
          <Form.Group className="mb-3 m-3" controlId="formBasicPassword">
            <Form.Label>QUALIFICATION</Form.Label>
            <Form.Control
              type="text"
              name="qualification"
              value={qualification}
              onChange={changeHandler}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3 m-3" controlId="formBasicPassword">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              name="work"
              value={work}
              onChange={changeHandler}
              placeholder="Enter Your Designation"
            />
          </Form.Group>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
