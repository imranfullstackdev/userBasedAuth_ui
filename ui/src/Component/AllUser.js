import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Edit from "./Edit";

const AllUser = () => {
  const [alluser, setAlluser] = useState([]);

  // getting all user
  const getAllUser = async () => {
    const alldata = await fetch(`http://localhost:8000`, {
      method: "get",
    });
    console.log(alldata);
    const res = await alldata.json();
    setAlluser(res);
  };

  //   for delete handler
  const deleteHandler = async (e, id) => {
    console.log(id);
    try {
      const deleteUser = await fetch(`http://localhost:8000/dlt/${id}`, {
        method: "delete",
      });
      const res = await deleteUser.json();
      alert(res.sus);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUser();
  }, [] || [deleteHandler]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>phonenumber</th>
            <th>qualification</th>
            <th>WORK</th>
          </tr>
        </thead>
        <tbody>
          {alluser.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phonenumber}</td>
                <td>{user.qualification}</td>
                <td>{user.work}</td>
                <td>
                  <Edit user={user} />
                </td>
                <td
                  onClick={(e) => {
                    deleteHandler(e, user.id);
                  }}
                >
                  DELETE
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default AllUser;
