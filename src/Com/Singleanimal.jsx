import React from 'react';
import { Link } from 'react-router';

const Singleanimal = ({animal}) => {
    
    const {_id, name, description, type} = animal


    return (
        <div>

            <div className="card w-96 bg-base-100 card-xs shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <h1>{type}</h1>
    <div className="justify-end card-actions">
      <Link to={`/all/${_id}`}>
            <button className="btn btn-primary">view details</button>
      </Link>
    </div>
  </div>
</div>
</div>
    );
};

export default Singleanimal;