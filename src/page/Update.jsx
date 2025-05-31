import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  console.log(data);
  const handelup = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const updatedUser = { linkedin, github, resume };

    fetch(`http://localhost:3000/form/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    }).then((res) => {
      console.log(res);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div>
      <form onSubmit={handelup} action="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Page details</legend>

          <label className="label">linkedin</label>
          <input
            type="text"
            name="linkedin"
            defaultValue={data.linkedin}
            className="input"
            placeholder="linedin"
          />

          <label className="label">github</label>
          <input
            type="text"
            name="github"
            defaultValue={data.github}
            className="input"
            placeholder="github"
          />

          <label className="label">resume</label>
          <input
            type="text"
            name="resume"
            defaultValue={data.resume}
            className="input"
            placeholder="resume"
          />
          <button type="submit">submit now</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Update;
