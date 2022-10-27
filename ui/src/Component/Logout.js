import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const logOut = () => {
    dispatch({ type: "role", payload: null });
    localStorage.clear()
    navigate("/");
  };

  useEffect(() => {
    logOut();
  }, []);
  return <></>;
};

export default Logout;
