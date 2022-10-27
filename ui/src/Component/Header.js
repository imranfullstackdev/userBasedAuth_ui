import React, { useEffect, useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context";

// roles

const Adminpanel = () => {
  const { state, dispatch } = useContext(UserContext);
  const {role} = state;
  console.log("the role from the header",state)

  // ROLES

  // FOR ADMIN
  if (role == 1) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">LMV IT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto m-1">
              <NavLink className=" m-3" to="/">
                Login
              </NavLink>
              <NavLink className=" m-3" to="/Register">
                NewUser
              </NavLink>
              <NavLink className=" m-3" to="/User">
                User
              </NavLink>
              <NavLink className=" m-3" to="/Ceo">
                Ceo
              </NavLink>
              <NavLink className=" m-3" to="/Zonalmanager">
                ZONAL MANAGER
              </NavLink>
              <NavLink className=" m-3" to="/ReginalManager">
                ReginalManager
              </NavLink>{" "}
              <NavLink className=" m-3" to="/BranchManager">
                BranchManager
              </NavLink>{" "}
              <NavLink className=" m-3" to="/SRexhecutive">
                SRexhecutive
              </NavLink>{" "}
              <NavLink className=" m-3" to="/Exhecutive">
                Exhecutive
              </NavLink>
              <NavLink className=" m-3" to="/logout">
                LogOut
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  // For Zonal Manager
  if (role == 2) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">LMV IT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto m-1">
              <NavLink className=" m-4" to="/Register">
                NewUser
              </NavLink>
              <NavLink className=" m-4" to="/User">
                User
              </NavLink>
              <NavLink className=" m-4" to="/ReginalManager">
                ReginalManager
              </NavLink>{" "}
              <NavLink className=" m-4" to="/BranchManager">
                BranchManager
              </NavLink>{" "}
              <NavLink className=" m-4" to="/SRexhecutive">
                SRexhecutive
              </NavLink>{" "}
              <NavLink className=" m-4" to="/Exhecutive">
                Exhecutive
              </NavLink>
              <NavLink className=" m-4" to="/logout">
                LogOut
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  // for Reginal Manager
  if (role == 3) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">LMV IT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto m-1">
              <NavLink className=" m-4" to="/Register">
                NewUser
              </NavLink>
              <NavLink className=" m-4" to="/User">
                User
              </NavLink>
              <NavLink className=" m-4" to="/ReginalManager">
                ReginalManager
              </NavLink>{" "}
              <NavLink className=" m-4" to="/ReginalManager">
                National Manager
              </NavLink>{" "}
              <NavLink className=" m-4" to="/BranchManager">
                BranchManager
              </NavLink>{" "}
              <NavLink className=" m-4" to="/SRexhecutive">
                SRexhecutive
              </NavLink>{" "}
              <NavLink className=" m-4" to="/Exhecutive">
                Exhecutive
              </NavLink>
              <NavLink className=" m-4" to="/logout">
                LogOut
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  // For branch Manager
  if (role == 4) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">LMV IT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto m-1">
              <NavLink className=" m-4" to="/Register">
                NewUser
              </NavLink>
              <NavLink className=" m-4" to="/User">
                User
              </NavLink>
              <NavLink className=" m-4" to="/BranchManager">
                BranchManager
              </NavLink>{" "}
              <NavLink className=" m-4" to="/SRexhecutive">
                SRexhecutive
              </NavLink>{" "}
              <NavLink className=" m-4" to="/Exhecutive">
                Exhecutive
              </NavLink>
              <NavLink className=" m-4" to="/logout">
                LogOut
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  // For Sr Exhecutive
  // console.log("the role form the use state", role);

  if (role == 5) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">LMV IT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto m-1">
              <NavLink className=" m-4" to="/Register">
                NewUser
              </NavLink>
              <NavLink className=" m-4" to="/User">
                User
              </NavLink>
              <NavLink className=" m-4" to="/SRexhecutive">
                SRexhecutive
              </NavLink>{" "}
              <NavLink className=" m-4" to="/Exhecutive">
                Exhecutive
              </NavLink>
              <NavLink className=" m-4" to="/logout">
                LogOut
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  // For Exhecutive
  if (role == 6) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">LMV IT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto m-1">
              <NavLink className=" m-4" to="/Exhecutive">
                Exhecutive
              </NavLink>
              <NavLink className=" m-4" to="/logout">
                LogOut
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  if (role == 7) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">LMV IT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto m-1">
              <NavLink className=" m-3" to="/User">
                User
              </NavLink>
              <NavLink className=" m-4" to="/logout">
                LogOut
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  if (role === null) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">LMV IT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto m-1">
              <NavLink className=" m-5" to="/">
                Login
              </NavLink>
              <NavLink className=" m-5" to="/Register">
                NewUser
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};

const Header = () => {
  return <Adminpanel />;
};

export default Header;
