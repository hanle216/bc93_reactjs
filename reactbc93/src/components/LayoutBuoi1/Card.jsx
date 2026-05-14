import React from "react";

const Card = () => {
  return (
    <div className="card h-100 shadow">
      <img className="card-img-top" src="https://i.pravatar.cc/150?img=57" alt="Title" />
      <div className="card-body">
        <h4 className="card-title">John Doe</h4>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Card;
