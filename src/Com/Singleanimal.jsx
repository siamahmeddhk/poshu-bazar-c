import React from 'react';

const Singleanimal = ({animal}) => {
    
    const {name, age, price_bdt, location, description, type} = animal

    return (
        <div>

            <div className="card w-96 bg-base-100 card-xs shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <h1>{type}</h1>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
    );
};

export default Singleanimal;