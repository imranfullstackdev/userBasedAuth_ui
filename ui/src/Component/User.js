import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const userHandler = async () => {
    const getHandler = await fetch(`http://localhost:8000/about`, {
      method: "get",
      headers: {
        accept: "Application/json",
        autherization: localStorage.getItem("Token"),
        "Content-Type": "application/json",
      },
    });
    
    const res = await getHandler.json();
    console.log(getHandler.status);
    if (getHandler.status === 200) {
      setData(res.user[0]);
    } else {
      navigate("/");
    }

    // console.log("response ", res);
  };
  useEffect(() => {
    userHandler();
  }, []);

  // delete Handler

  const DeleteUser = async (e, id) => {
    e.preventDefault();
    try {
      const deleteHandler = await fetch(`http://localhost:8000/dlt/${id}`, {
        method: "DELETE",
      });
      const res = await deleteHandler.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>USER</h1>
      <h1>NAME : {data.name}</h1>
      <h1>Email : {data.email}</h1>
      <h1>Number : {data.phonenumber}</h1>
      <h1>QUALIFICATION : {data.name}</h1>
      <h1>PROFESSION : {data.name}</h1>
    
    </>
  );
};

export default User;
