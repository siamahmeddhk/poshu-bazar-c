import React, { use, useEffect, useState } from 'react';

import Single from '../Com/Single';
import { Authcontext } from '../Auth/Authcontext';

const Data = () => {

    const {users} = use(Authcontext)

    const [data, setdata] = useState([])

    useEffect(()=> {
        if(users?.email){
            fetch(`http://localhost:3000/form?email=${users.email}`)
            .then(res=>res.json())
            .then(data=>{
                setdata(data)
            })
        }
       
    },[users])

    return (
        <div>
            {
                data.map(d=><Single d={d}></Single>)
            }
        </div>
    );
};

export default Data;