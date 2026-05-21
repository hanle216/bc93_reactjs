import React from "react";

const Shoe = (props) => {
  //   console.log("props shoe", props);
  const { shoe, onDetailShoe, onCart } = props;

  return (
    <div className="col-4 p-3">
      <div className="card">
        <img className="card-img-top" src={shoe.image} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{shoe.name}</h4>
          <p className="card-text">{shoe.description}</p>
        </div>
        <button className="btn btn-success" onClick={() => onDetailShoe(shoe)}>
          View detail
        </button>
        <button className="btn btn-danger" onClick={() => onCart(shoe)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Shoe;
