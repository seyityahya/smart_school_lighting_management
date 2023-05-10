import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import DersProgramı from "../DersProgramı";

function ProductedSiniflar() {
  const { user, loggedIn } = useAuth();

  return (
    <>
      {loggedIn === true && user.role === "admin" && <DersProgramı />}
      {loggedIn === true && user.role === "user" && <Navigate to={"/"} />}
      {loggedIn === false && <Navigate to={"/"} />}
    </>
  );
}

export default ProductedSiniflar;
