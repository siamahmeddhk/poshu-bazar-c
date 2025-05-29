import React, { useEffect, useState } from 'react';
import Singleanimal from '../Com/Singleanimal';

const All = () => {

    const [all, setall] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/all')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setall(data)
        })
    },[])

    
    
    console.log(all)
  

    return (
        <div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3'>
                {
                    all.map(animal=><Singleanimal animal={animal}></Singleanimal>)
                }
            </div>
        </div>
    );
};

export default All;