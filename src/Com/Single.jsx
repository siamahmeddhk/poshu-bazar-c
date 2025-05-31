
import React, {} from "react";

import { Link } from "react-router";
import Swal from "sweetalert2";

const Single = ({ d }) => {
  const { _id, github, linkedin, resume } = d;

  

  const handeldlt = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/form/${_id}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Delete success",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div>
      <div className="bg-red-500 p-12 border-2 mb-4">
        <h1>{github}</h1>
        <h1>{linkedin}</h1>
        <h1>{resume}</h1>
        <Link d={d} to={`/update/${_id}`}>
          <button  className="btn btn-success">updtae</button>
        </Link> 
        <button onClick={handeldlt} className="btn btn-error">
          delete
        </button>
      </div>
    </div>
  );
};

export default Single;
