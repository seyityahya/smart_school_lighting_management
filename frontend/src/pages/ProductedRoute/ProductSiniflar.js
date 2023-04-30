import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Siniflar from "../Siniflar";

function ProductedSiniflar() {
  const { user, loggedIn } = useAuth();

  return (
    <>
      {loggedIn === true && user.role === "admin" && <Siniflar />}
      {loggedIn === true && user.role === "user" && <Navigate to={"/"} />}
      {loggedIn === false && <Navigate to={"/"} />}
    </>
  );
}

export default ProductedSiniflar;
