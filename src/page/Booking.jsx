import React, { use } from "react";
import { Authcontext } from "../Auth/Authcontext";
import { } from "react-router";

const Booking = () => {

    const {users} = use(Authcontext)

  return (
    <div>
      <form >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

          <label className="label">name</label>
          <input type="text" name="name" className="input" placeholder="My awesome page" />

          <label className="label">discription</label>
          <input type="text" name="discription" className="input" placeholder="my-awesome-page" />

          <label className="label">Author</label>
          <input type="email" defaultValue={users.email} className="input" placeholder="Name" />
        </fieldset>
      </form>
    </div>
  );
};

export default Booking;
