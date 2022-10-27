import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Edit = (user) => {
  const [show, setShow] = useState(false);
  const [edituser, setEdituser] = useState(user.user);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changeHandler = (e) => {
    setEdituser({ ...edituser, [e.target.name]: e.target.value });
  };
  const editHandler = async (e, id) => {
    e.preventDefault();
    const body = { edituser };
    try {
      const editHandler = await fetch(`http://localhost:8000/put/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body.edituser),
      });

      const res=await editHandler.json()
      window.location.reload()
      console.log(res)
    } catch (error) {
      console.log(error);
    }
   };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <div className="">
              <Form.Group className="mb-3 m-3 m-2" controlId="formBasicEmail">
                <Form.Label>NAME:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  defaultValue={user.user.name}
                  onChange={changeHandler}
                  placeholder="Enter name"
                />
              </Form.Group>
              <Form.Group className="mb-3 m-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  defaultValue={user.user.email}
                  onChange={changeHandler}
                  placeholder="Enter email"
                />
              </Form.Group>
            </div>
            <div className="">
              <Form.Group className="mb-3 m-3" controlId="formBasicPassword">
                <Form.Label>PHONE NUMBER:</Form.Label>
                <Form.Control
                  type="tel"
                  name="phonenumber"
                  defaultValue={user.user.phonenumber}
                  onChange={changeHandler}
                  placeholder="Password"
                />
              </Form.Group>{" "}
              <Form.Group className="mb-3 m-3" controlId="formBasicPassword">
                <Form.Label>QUALIFICATION</Form.Label>
                <Form.Control
                  type="text"
                  name="qualification"
                  defaultValue={user.user.qualification}
                  onChange={changeHandler}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3 m-3" controlId="formBasicPassword">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  name="work"
                  defaultValue={user.user.work}
                  onChange={changeHandler}
                  placeholder="Enter Your Designation"
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-5">
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  editHandler(e, user.user.id);
                }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit;
