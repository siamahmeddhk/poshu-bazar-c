import React, { use } from 'react';
import { Link, useLoaderData } from 'react-router';
import { Authcontext } from '../Auth/Authcontext';

const Poshudtl = () => {
    
    const {} = use(Authcontext)

    const data = useLoaderData()
    console.log(data)

    return (
        <div>
            <h1 className='text-3xl text-shadow-emerald-400'>{data.name}</h1>
            <Link to="/signup">
                 <button>booking</button>
            </Link>
        </div>
    );
};

export default Poshudtl;