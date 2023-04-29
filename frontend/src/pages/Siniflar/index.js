import React from "react";
import { useQuery } from "react-query";
import { fetchLedSinif } from "../../api";

function Siniflar() {
  // const { isLoading, isError, data, error } = useQuery(
  //   "Sınıf:Durum",
  //   fetchLedSinif
  // );
  const item = true;
  console.log(item);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (isError) {
  //   return <div>Error {error.message}</div>;
  // }
  return (
    <>
      {item === true && <div>true</div>}
      {item === false && <div>false</div>}
    </>
  );
}

export default Siniflar;
