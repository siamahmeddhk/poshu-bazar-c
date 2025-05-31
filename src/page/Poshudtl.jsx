import React, {  } from 'react';
import { Link, useLoaderData } from 'react-router';
import { Authcontext } from '../Auth/Authcontext';

const Poshudtl = () => {
    
    

    const data = useLoaderData()
    console.log(data)

    return (
        <div>
            <h1 className='text-3xl text-shadow-emerald-400'>{data.name}</h1>
            <Link to={`/booking/${data._id}`}>
                 <button className='btn btn-primary'>booking</button>
            </Link>
        </div>
    );
};

export default Poshudtl;