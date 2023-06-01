import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import ErkenIsik from "../5dk";

function ProductedSiniflar() {
  const { user, loggedIn } = useAuth();

  return (
    <>
      {loggedIn === true && <ErkenIsik />}
      {loggedIn === false && <Navigate to={"/"} />}
    </>
  );
}

export default ProductedSiniflar;
