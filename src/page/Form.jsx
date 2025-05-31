import React, { use } from "react";
import { Authcontext } from "../Auth/Authcontext";

const Form = () => {

    const {users} = use(Authcontext)

   const handelform = e => {
    e.preventDefault()
    const form = e.target
    const linkedin = form.linkedin.value
    const github= form.github.value
    const resume = form.resume.value
    const data = {
        linkedin : linkedin,
        github: github,
        resume : resume,
        email : users?.email

    }

    
    fetch('http://localhost:3000/form',{
        method: 'POST',
        headers: {
            "content-type" : 'application/json'
        },
        body: JSON.stringify(data)
    })



   }

  return (
    <div>
      <form onSubmit={handelform} action="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Page details</legend>

          <label className="label">linkedin</label>
          <input type="text" name="linkedin" className="input" placeholder="linedin" />

          <label className="label">github</label>
          <input type="text" name="github" className="input" placeholder="github" />

          <label className="label">resume</label>
          <input type="text" name="resume" className="input" placeholder="resume" />
          <button type="submit">submit now</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
